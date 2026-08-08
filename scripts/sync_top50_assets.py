#!/usr/bin/env python3
"""将精选的 Top 50 React UI gallery 同步到当前 skill。"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Iterable


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Copy the Top 50 component source and refresh the skill catalog."
    )
    parser.add_argument(
        "--source",
        required=True,
        type=Path,
        help="Path to the standalone top50 project.",
    )
    return parser.parse_args()


def replace_all(value: str, replacements: Iterable[tuple[str, str]]) -> str:
    for old, new in replacements:
        value = value.replace(old, new)
    return value


def write_text(path: Path, value: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(value, encoding="utf-8")


def sync_file(source: Path, target: Path, replacements: Iterable[tuple[str, str]] = ()) -> None:
    write_text(target, replace_all(source.read_text(encoding="utf-8"), replacements))


def render_catalog(manifest: list[dict[str, object]], descriptions: list[str]) -> str:
    layout_by_category = {
        "AI Interface": "工作台型 / IM 三栏型",
        "SaaS": "设置型 / 控制台型",
        "Data Visualization": "控制台型",
        "Information": "设置型 / IM 三栏型",
        "Creative": "工作台型",
        "Advanced UI": "按交互选择",
    }
    lines = [
        "# Top 50 React UI 参考库",
        "",
        "这份索引对应 `assets/top50-react/` 中的 50 个可复制组件。组件保留原始交互和预览结构；接入 App Shell UI 页面时，优先把颜色、表面和间距改成 `references/tokens.md` 的变量。",
        "",
        "## 来源与筛选",
        "",
        "这 50 个组件由本机源项目 `/Users/yg2224/Desktop/project/UI-合集` 的 Top 50 导出生成。按生成记录，3 个模型各产出 100 个候选，共 300 个原始候选：GPT-5.6 100 个、MiniMax M3 100 个、GLM 5.2 100 个。当前工作区保留并可审计的只有 GPT-5.6 和 MiniMax M3 共 200 个；GLM 5.2 的 100 个候选已删除或当前不可见，未进入现有评分和 Top 50。保留候选再按 Visual Quality、Distinctiveness、Product Utility、Interaction & A11y、Engineering Quality 五个维度加权评审，最后保留排名前 50 的实现。`claude/` 和 `trea/` 仅作为源审计背景，不计入可渲染候选排名。",
        "",
        "当前资源包中的 50 个实现均来自最终入选的 dedicated React renderer；这里保留的是可复用源码和交互参考，不是原始候选全集。",
        "",
        "## 使用方式",
        "",
        "1. 先按下表选择组件，再只读取对应的 `components/items/*.tsx` 文件。",
        "2. 组件依赖 `components/shared.tsx`；若使用 `cn`，同时复制根目录的 `lib/cn.ts`，并保持 `components/items`、`components/shared.tsx`、`lib/cn.ts` 的相对层级，不要额外套目录。",
        "3. React / Next.js 项目需要 `react`、`lucide-react`，并需要 Tailwind CSS v4；`globals.css` 提供组件使用的自定义 token 和动画。",
        "4. 组件的 `PreviewFrame` 是学习展示容器，不要把它当作业务页面外壳；外层页面仍按 App Shell 的四种 layout template 组装。",
        "",
        "## 组件索引",
        "",
        "| Rank | Component | Export | Category | Purpose | 推荐 shell layout | Source |",
        "| ---: | --- | --- | --- | --- | --- | --- |",
    ]
    for item in manifest:
        category = str(item["category"])
        source = str(item["file"])
        source = source.replace("src/components/items/", "components/items/")
        lines.append(
            f"| {item['rank']} | {item['name']} | `{item['exportName']}` | {category} | {descriptions[item['rank'] - 1]} | {layout_by_category.get(category, '按场景选择')} | `{source}` |"
        )
    lines.extend(
        [
            "",
            "## 依赖边界",
            "",
            "- 组件只保留本地演示数据，不包含 API、数据库或外部图片请求。",
            "- 组件文件均为单一 named export；不要把多个组件拼回一个文件。",
            "- 交互组件包含键盘、焦点、`aria-*` 和 reduced-motion 处理；改写时保留这些行为。",
            "- `top50.json` 是机器可读的顺序和命名清单；变更组件时同步更新它。",
            "",
            "## 刷新资源",
            "",
            "从原始项目重新同步：",
            "",
            "```bash",
            "python scripts/sync_top50_assets.py --source /path/to/top50",
            "```",
            "",
            "同步脚本会把 `@/` 别名改成资源包内的相对 import，并重新生成本索引。",
            "",
        ]
    )
    return "\n".join(lines)


def validate_manifest(manifest: object, source: Path) -> list[dict[str, object]]:
    if not isinstance(manifest, list) or len(manifest) != 50:
        raise SystemExit("Expected top50.json to contain exactly 50 records")
    if not all(isinstance(item, dict) for item in manifest):
        raise SystemExit("Every Top 50 manifest record must be an object")
    if [item.get("rank") for item in manifest] != list(range(1, 51)):
        raise SystemExit("Top 50 ranks must be sequential from 1 to 50")
    exports = [item.get("exportName") for item in manifest]
    if len(set(exports)) != 50:
        raise SystemExit("Top 50 exportName values must be unique")
    filenames = [Path(str(item.get("file"))).name for item in manifest]
    if len(set(filenames)) != 50:
        raise SystemExit("Top 50 source filenames must be unique")
    for item in manifest:
        source_file = source / str(item.get("file"))
        if not source_file.is_file():
            raise SystemExit(f"Top 50 source file is missing: {source_file}")
    return manifest


def validate_synced_assets(asset_root: Path, manifest: list[dict[str, object]]) -> None:
    items = sorted((asset_root / "components/items").glob("*.tsx"))
    if len(items) != 50:
        raise SystemExit(f"Expected 50 synced component files, found {len(items)}")
    registry = (asset_root / "data/top50.ts").read_text(encoding="utf-8")
    index = (asset_root / "components/index.ts").read_text(encoding="utf-8")
    for item in manifest:
        path = asset_root / "components/items" / Path(str(item["file"])).name
        text = path.read_text(encoding="utf-8")
        export_name = str(item["exportName"])
        if not re.search(rf"export function {re.escape(export_name)}\s*\(", text):
            raise SystemExit(f"Missing export in synced file: {path}")
        if len(re.findall(r"^export function ", text, flags=re.MULTILINE)) != 1:
            raise SystemExit(f"Expected one component export in: {path}")
        if not re.search(r"<PreviewFrame\b[^>]*\btitle=", text, flags=re.DOTALL):
            raise SystemExit(f"PreviewFrame title is missing in: {path}")
        if "dangerouslySetInnerHTML" in text:
            raise SystemExit(f"Unsafe HTML renderer found in: {path}")
        if re.search(r"<button(?![^>]*\btype=)[^>]*>", text, flags=re.DOTALL):
            raise SystemExit(f"Button without an explicit type found in: {path}")
        if f"Renderer: {export_name}" not in registry:
            raise SystemExit(f"Gallery registry is missing: {export_name}")
        if f"export {{ {export_name} }}" not in index:
            raise SystemExit(f"Public component index is missing: {export_name}")


def main() -> None:
    args = parse_args()
    source = args.source.expanduser().resolve()
    skill_root = Path(__file__).resolve().parents[1]
    asset_root = skill_root / "assets" / "top50-react"

    required = [
        source / "top50.json",
        source / "src/components/items",
        source / "src/components/shared.tsx",
        source / "src/components/index.ts",
        source / "src/components/top50-gallery.tsx",
        source / "src/data/top50.ts",
        source / "src/lib/cn.ts",
        source / "src/app/globals.css",
    ]
    missing = [str(path) for path in required if not path.exists()]
    if missing:
        raise SystemExit("Source project is missing: " + ", ".join(missing))

    manifest = validate_manifest(
        json.loads((source / "top50.json").read_text(encoding="utf-8")), source
    )
    descriptions = re.findall(
        r'^\s+description:\s+"([^"]*)",',
        (source / "src/data/top50.ts").read_text(encoding="utf-8"),
        flags=re.MULTILINE,
    )
    if len(descriptions) != 50:
        raise SystemExit("Expected 50 component descriptions in src/data/top50.ts")

    items_target = asset_root / "components" / "items"
    items_target.mkdir(parents=True, exist_ok=True)
    for stale_file in items_target.glob("*.tsx"):
        stale_file.unlink()
    for item in manifest:
        source_file = source / str(item["file"])
        target_file = items_target / source_file.name
        sync_file(source_file, target_file, [("@/components/shared", "../shared")])

    sync_file(
        source / "src/components/shared.tsx",
        asset_root / "components/shared.tsx",
        [("@/lib/cn", "../lib/cn")],
    )
    sync_file(
        source / "src/components/index.ts",
        asset_root / "components/index.ts",
        [("@/components/items/", "./items/")],
    )
    sync_file(
        source / "src/components/top50-gallery.tsx",
        asset_root / "components/top50-gallery.tsx",
        [("@/data/top50", "../data/top50")],
    )
    sync_file(
        source / "src/data/top50.ts",
        asset_root / "data/top50.ts",
        [
            ("@/components/items/", "../components/items/"),
            ("src/components/items/", "components/items/"),
        ],
    )
    sync_file(source / "src/lib/cn.ts", asset_root / "lib/cn.ts")
    sync_file(source / "src/app/globals.css", asset_root / "globals.css")

    normalized_manifest = []
    for item in manifest:
        normalized = dict(item)
        normalized["file"] = "components/items/" + Path(str(item["file"])).name
        normalized_manifest.append(normalized)
    write_text(
        asset_root / "top50.json",
        json.dumps(normalized_manifest, ensure_ascii=False, indent=2) + "\n",
    )
    write_text(
        skill_root / "references/top50-components.md",
        render_catalog(manifest, descriptions),
    )
    validate_synced_assets(asset_root, manifest)
    print(f"Synced {len(manifest)} components to {asset_root}")


if __name__ == "__main__":
    main()
