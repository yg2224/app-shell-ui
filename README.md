<div align="center">
  <p>
    <img src="assets/readme-banner.png" alt="app-shell-ui 品牌封面：两个彼此分离的设计空间" width="100%">
  </p>
  <p>
    <strong>一个 Skill，两条独立的前端设计路线。</strong><br>
    公开网站使用 Website Mode；登录后产品使用 App Mode。先判断界面，再决定像素。
  </p>
  <p>
    <a href="LICENSE"><img alt="Apache 2.0" src="https://img.shields.io/badge/license-Apache--2.0-2ea44f"></a>
    <a href="#安装"><img alt="Codex Claude Code Grok" src="https://img.shields.io/badge/agent-Codex%20%7C%20Claude%20Code%20%7C%20Grok-111827"></a>
    <a href="#双模式"><img alt="2 modes" src="https://img.shields.io/badge/modes-App%20%2B%20Website-2459d3"></a>
    <a href="#top-50-react-组件库"><img alt="50 React components" src="https://img.shields.io/badge/React%20references-50-d4482e"></a>
    <a href="README_EN.md"><img alt="中文与 English" src="https://img.shields.io/badge/language-中文%20%7C%20English-5d6572"></a>
  </p>
  <p>
    <a href="#快速开始">快速开始</a> ·
    <a href="#双模式示例">示例</a> ·
    <a href="#能力范围">能力</a> ·
    <a href="#安装">安装</a> ·
    <a href="#目录结构">目录</a> ·
    <a href="README_EN.md">English</a>
  </p>
</div>

---

# app-shell-ui

`app-shell-ui` 是一套可由 Codex、Claude Code、Grok 等 agent 加载的前端设计与实现规范。它先判断页面属于公开网站还是登录后产品，再进入对应工作流：

- **App Mode**：面向登录后的设置、控制台、工作台、聊天、邮件和运营工具。
- **Website Mode**：面向官网、落地页、作品集、内容页、文档站和产品目录。

两种模式仅在合适时共享品牌 Token；工作流、页面结构和案例彼此独立，各自使用适合任务的密度与滚动方式。

## 双模式

| | App Mode | Website Mode |
| --- | --- | --- |
| 典型场景 | 设置、控制台、AI 工作台、IM、桌面客户端 | 官网、落地页、作品集、编辑内容、文档、目录 |
| 首要任务 | 高频操作与状态判断 | 说服、阅读、体验或浏览选择 |
| 默认结构 | 持久侧栏 + 任务画布 | 根据访客旅程选择页面宏观结构 |
| 页面高度 | 桌面默认一屏完成主任务，长列表内部滚动 | 正常文档滚动，首屏完整并提示后续内容 |
| 主题 | 默认同时交付 Light / Dark | 按品牌与场景决定，支持时必须成对验证 |
| 视觉证据 | 真实状态、列表、图表与交互 | 真实产品、作品、摄影或针对页面生成的位图 |
| 明确避免 | 营销 Hero、彩虹图标、无边界长页面 | 假 App 壳、通用 Hero + 三卡片、伪造数据与截图 |

判断规则：**用户来完成工作，用 App Mode；用户来认识、阅读或选择，用 Website Mode。** 同一项目同时包含官网和登录后产品时，分别设计。

## 快速开始

安装完整目录后，直接描述任务。agent 会先路由模式，再选择结构和实现方式。

```text
用 app-shell-ui 做一个陶瓷工作室管理台：App Mode，控制台布局，浅深主题，桌面一屏完成今日排产。
```

```text
用 app-shell-ui 的 Website Mode 做一家陶瓷工作室官网：作品优先，首屏展示真实器物图片，避免通用 SaaS 卡片。
```

```text
按 app-shell-ui 重做现有页面。保留信息架构和业务逻辑，修复响应式、焦点状态、对比度和交互反馈。
```

```text
使用 app-shell-ui，并从 Top 50 参考库中选择一个命令面板和一个 Agent Workflow 组件接入现有 React 项目。
```

也可以直接触发：`/app-shell-ui` 或 `使用 app-shell-ui skill`。

## 双模式示例

4 个核心示例按模式独立展示。Website Mode 示例只验证公开网页的访客旅程与自然滚动；App Mode 示例只验证登录后工具的任务画布与操作状态。截图均来自对应 HTML 的真实浏览器渲染，点击图片可进入 Demo。

### Website Mode：公开网页

这组示例不使用 App Shell。页面结构、内容节奏、图片与交互均围绕公开访问者设计。

<table>
  <tr>
    <td width="50%" valign="top">
      <p align="center"><strong>WEB 01 · 青岫陶作官网</strong><br><sub>Experience / Catalog</sub></p>
      <a href="demos/ceramics-final.html"><img src="assets/showcase/ceramics-website.png" alt="青岫陶作公开品牌官网" width="100%"></a>
      <p align="center"><sub>沉浸式器物摄影 · 不对称目录 · 工序折叠与图片灯箱</sub></p>
    </td>
    <td width="50%" valign="top">
      <p align="center"><strong>WEB 02 · Interface Fieldbook</strong><br><sub>Experience / Work Index</sub></p>
      <a href="demos/interface-fieldbook.html"><img src="assets/showcase/interface-fieldbook.png" alt="Interface Fieldbook UI 作品索引网站" width="100%"></a>
      <p align="center"><sub>全屏作品切换 · 真实 Demo 截图 · 响应式作品索引</sub></p>
    </td>
  </tr>
</table>

| Website 示例 | 主要任务 | 关键实现 |
| --- | --- | --- |
| 青岫陶作官网 | 认识品牌、浏览器物与制作过程 | 本地位图、自然滚动、移动菜单、图片灯箱 |
| Interface Fieldbook | 浏览并筛选 4 个界面研究 | 真实 Demo 截图、项目筛选、移动导航、可见焦点 |

### App Mode：登录后产品

这组示例不使用 Website 的营销或编辑式结构。固定壳层、状态判断和高频操作优先。

<table>
  <tr>
    <td width="50%" valign="top">
      <p align="center"><strong>APP 01 · 青岫陶作管理台</strong><br><sub>Console</sub></p>
      <a href="demos/ceramics-studio-app.html"><img src="assets/showcase/ceramics-app-dark.png" alt="青岫陶作工作室管理台深色主题" width="100%"></a>
      <p align="center"><sub>一屏任务画布 · Light / Dark · 搜索、筛选与表单状态</sub></p>
    </td>
    <td width="50%" valign="top">
      <p align="center"><strong>APP 02 · TermDock</strong><br><sub>Workbench</sub></p>
      <a href="demos/terminal.html"><img src="assets/showcase/terminal.png" alt="TermDock 深色终端与主机状态工作台" width="100%"></a>
      <p align="center"><sub>SSH 多会话 · 终端主画布 · 实时主机状态侧栏</sub></p>
    </td>
  </tr>
</table>

| App 示例 | 主要任务 | 关键实现 |
| --- | --- | --- |
| 青岫陶作管理台 | 管理器物工序、窑次和交付 | 一屏任务画布、Light / Dark、搜索筛选、表单校验 |
| TermDock | 同时判断 SSH 会话、终端输出和主机状态 | 稳定侧栏、终端主画布、有边界的状态区 |

### 本地预览

```bash
cd app-shell-ui
python3 -m http.server 8040

# Website Mode
open http://127.0.0.1:8040/demos/ceramics-final.html
open http://127.0.0.1:8040/demos/interface-fieldbook.html

# App Mode
open http://127.0.0.1:8040/demos/ceramics-studio-app.html
open http://127.0.0.1:8040/demos/terminal.html
```

陶瓷示例所需图片保存在 [`assets/ceramics/`](assets/ceramics/)，Interface Fieldbook 直接使用 [`assets/showcase/`](assets/showcase/) 中的真实 Demo 截图，运行时均不请求第三方图库。Website Mode 在缺少合适素材且环境提供 `imagegen` 时，可以生成与页面构图匹配的位图；最终图片必须落入项目目录、写明 `alt`，并经过真实页面截图验证。

README 顶部品牌图由 `imagegen` 使用 `gpt-image-2` 生成，只承担视觉识别，不作为 Website Mode 或 App Mode 的案例证据。

## 更多 App Mode 示例

现有案例继续用于验证 App Shell 在不同业务中的稳定性。源码位于 [`demos/`](demos/)，截图位于 [`assets/showcase/`](assets/showcase/)。

### 使用 Skill 前后对比

<table>
  <tr>
    <td width="50%" align="center" valign="top">
      <p><strong><a href="demos/learning-before.html">未使用 Skill</a></strong></p>
      <a href="demos/learning-before.html"><img src="assets/showcase/learning-before.png" alt="未使用 Skill 的通用彩色学习仪表盘" width="100%"></a>
      <p><sub>彩色卡片堆叠 · 缺少稳定壳层与层级</sub></p>
    </td>
    <td width="50%" align="center" valign="top">
      <p><strong><a href="demos/learning.html">使用 app-shell-ui</a></strong></p>
      <a href="demos/learning.html"><img src="assets/showcase/learning-after.png" alt="使用 app-shell-ui 的学习工作台" width="100%"></a>
      <p><sub>稳定侧栏 · Token 分层 · 克制状态色 · 并列等高</sub></p>
    </td>
  </tr>
</table>

### 其他 App Mode 主题

| 示例 | 重点 | Demo |
| --- | --- | --- |
| PulseScope | 授权范围、漏洞队列、安全工具状态 | [`pentest.html`](demos/pentest.html) |
| StudyBench | 学习路径、复习队列、快速笔记等高 | [`learning.html`](demos/learning.html) |
| LinkPane | 图标栏、会话列表、对话详情三栏 | [`chat.html`](demos/chat.html) |

## 能力范围

| 能力 | 内容 |
| --- | --- |
| 模式路由 | 区分公开网站与登录后产品，混合项目按 route 分开设计 |
| App 布局 | 设置型、控制台型、工作台型、IM / 三栏型 |
| Website 表面 | Persuade、Read、Experience、Catalog |
| Website 宏观结构 | Product reveal、Evidence-led story、Editorial narrative、Work index、Catalogue、Reading guide、Campaign poster |
| 视觉系统 | 语义 Token、类型角色、颜色与材质、图片处理、单一明确差异点 |
| 实现质量 | 响应式 Grid、语义 HTML、键盘与焦点、表单状态、Reduced Motion、稳定图片尺寸 |
| App 主题 | `data-theme="light|dark"`、CSS Variables、可持久化切换 |
| React 参考 | 50 个可复制的交互组件与机器可读索引 |
| 交付验证 | 桌面 / 移动截图、溢出、对比度、内容真实性、加载与交互状态检查 |

本 Skill 会保留现有品牌和设计系统；没有既有系统时，根据用户任务建立具体方向。

## 工作方式

### App Mode

1. 选择设置型、控制台型、工作台型或 IM / 三栏型。
2. 定义目标桌面视口和页面唯一主任务。
3. 锁定 Light / Dark Token。
4. 用侧栏、面板、列表、状态 Pill、Toggle、Composer 等配方组装。
5. 完成交互后，在双主题和移动端分别验证。

### Website Mode

1. 明确页面类型、受众、访客任务和具体视觉语气。
2. 选择 Persuade、Read、Experience 或 Catalog。
3. 先定宏观结构，再定组件；不默认使用通用落地页模板。
4. 使用真实、用户提供、获许可或针对页面生成的视觉素材。
5. 实现完整状态、语义结构、响应式与可访问性。
6. 在 `320 / 375 / 414 / 768 / 1280+ px` 检查真实渲染结果。

详细规则由 [`SKILL.md`](SKILL.md) 路由到对应参考文件，避免一次加载全部上下文。

## 安装

必须安装**完整目录**。只复制 `SKILL.md` 会丢失 App Token、布局与组件配方、Website Mode 规范和 Top 50 源码。

### Codex

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/yg2224/app-shell-ui.git ~/.codex/skills/app-shell-ui
```

也可以把仓库地址交给 Codex，并要求安装到 `~/.codex/skills/app-shell-ui`。

### Claude Code

```bash
mkdir -p ~/ai-skills
git clone https://github.com/yg2224/app-shell-ui.git ~/ai-skills/app-shell-ui
```

在 subagent 或 slash command 中先读取稳定路径下的 `SKILL.md`：

```markdown
Read `~/ai-skills/app-shell-ui/SKILL.md` first and follow it as the governing workflow.
Read files under `references/` only when the selected mode requires them.

$ARGUMENTS
```

### Grok

```bash
git clone https://github.com/yg2224/app-shell-ui.git ~/.grok/skills/app-shell-ui
```

安装或更新后建议新开会话，再使用 `/app-shell-ui` 触发。

## 目录结构

```text
app-shell-ui/
├── SKILL.md                       # agent 主入口与模式路由
├── README.md / README_EN.md       # 人类可读说明
├── references/
│   ├── tokens.md                  # App Light / Dark Token
│   ├── layouts.md                 # App 布局与视口预算
│   ├── components.md              # App 组件配方
│   ├── web-frontend.md            # Website Mode 完整规范
│   └── top50-components.md        # React 组件索引
├── assets/
│   ├── readme-banner.png          # Imagegen 生成的 README 品牌封面
│   ├── ceramics/                  # 陶瓷示例位图
│   ├── showcase/                  # README 截图
│   └── top50-react/               # 50 个 React 组件与 Gallery 资源
├── demos/
│   ├── ceramics-final.html        # Website Mode 示例
│   ├── interface-fieldbook.html   # Website Mode 作品索引示例
│   ├── ceramics-studio-app.html   # App Mode 示例
│   ├── terminal.html
│   ├── pentest.html
│   ├── learning.html
│   └── chat.html
└── scripts/
    └── sync_top50_assets.py       # Top 50 同步脚本
```

## 参考文件

| 文件 | 何时读取 |
| --- | --- |
| [`SKILL.md`](SKILL.md) | 每次触发 Skill 时先读取，用于模式路由与交付清单 |
| [`references/tokens.md`](references/tokens.md) | App Mode 需要颜色、字阶、圆角和主题脚本时 |
| [`references/layouts.md`](references/layouts.md) | App Mode 选择布局、分配首屏容量或处理并列等高时 |
| [`references/components.md`](references/components.md) | App Mode 组装侧栏、卡片、列表、开关和 Composer 时 |
| [`references/web-frontend.md`](references/web-frontend.md) | 实现 Website Mode 前必须读取 |
| [`references/top50-components.md`](references/top50-components.md) | 需要复用 React 组件时先查索引，再按需打开单个组件 |

## Top 50 React 组件库

[`assets/top50-react/`](assets/top50-react/) 包含 50 个可复制的 React 交互参考，覆盖 AI Interface、SaaS、Data Visualization、Information、Advanced UI 与 Creative 类别。

来源记录保持透明：3 个模型各生成 100 个原始候选；当前可复核工作区只保留 GPT-5.6 与 MiniMax M3 共 200 个候选，GLM 5.2 的 100 个候选已删除或缺失，因此未进入当前评分。最终 50 个组件从可复核候选中按 Visual Quality、Distinctiveness、Product Utility、Interaction & A11y、Engineering Quality 加权筛选。

使用时先读 [`references/top50-components.md`](references/top50-components.md)，只复制需要的 `components/items/*.tsx`，并保留 `components/shared.tsx` 与 `lib/cn.ts` 的相对层级。App Mode 用这些组件补充交互，外层结构仍由所选布局决定；Website Mode 仅在组件符合页面任务并完成视觉适配时复用。

刷新资源：

```bash
python scripts/sync_top50_assets.py --source /path/to/top50
```

## 核心约束

1. 先判断 App / Website，不让结构习惯代替产品判断。
2. App 默认双主题、单主色、稳定壳层、首屏主任务与有边界的内部滚动。
3. Website 先定访客旅程、宏观结构与素材策略，允许自然页面滚动。
4. 不编造客户、指标、评价、品牌 Logo、产品截图或技术状态。
5. 图片使用真实、用户提供、获许可或针对页面生成的位图，并保留尺寸与 `alt`。
6. 图标统一使用一套线框家族；App 密集列表默认零 emoji。
7. 卡片只承载重复项目、控件或真正需要边界的工具，不把每个页面区段包成卡片。
8. 所有交付都检查响应式、键盘、焦点、对比度、状态、Reduced Motion 与溢出。

## 更新

```bash
cd /path/to/app-shell-ui
git pull

# 同步到 Codex 已安装目录
rsync -a --delete --exclude .git ./ ~/.codex/skills/app-shell-ui/
```

## 维护与许可

- 维护者：[yg2224](https://github.com/yg2224)
- Issues / PR：[yg2224/app-shell-ui](https://github.com/yg2224/app-shell-ui)
- 社区：[linux.do](https://linux.do/)
- 许可：[Apache License 2.0](LICENSE)

Copyright 2026 yg2224。可使用、修改和商用分发，但需保留版权与许可声明；完整条款以 [`LICENSE`](LICENSE) 为准。
