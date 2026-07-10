<div align="center">
  <p>
    <img src="assets/readme-banner.png" alt="app-shell-ui banner" width="100%">
  </p>
</div>

# app-shell-ui

**App Shell UI** — a reusable desktop-utility frontend skill for AI agents (Codex / Claude Code / Grok).

Clean macOS-style shell: left nav + content, dual light/dark themes, CSS tokens, restrained stroke icons. Not a marketing landing page.

## Quick start prompts

| Goal | Say |
| --- | --- |
| Settings page | `Use app-shell-ui for a light+dark settings page with sidebar and toggles.` |
| Console grid | `Use app-shell-ui console layout: stats + card grid + equal-height two-col.` |
| Workbench empty | `Use app-shell-ui workbench: session sidebar + centered composer.` |
| Restyle only | `Restyle this screen with app-shell-ui tokens; keep IA.` |

Slash / name: `/app-shell-ui` or `app-shell-ui`.

## Showcase

Four demos, one shell — screenshots under [`assets/showcase/`](assets/showcase/), sources under [`demos/`](demos/).

> **Generation: theme-only, no free-form prompt engineering.**  
> Only the subject domains were specified (terminal / pentest / learning / chat). Layout and look were constrained solely by the `app-shell-ui` skill.

| Case | Demo | Screenshot |
| --- | --- | --- |
| Terminal · TermDock | [terminal.html](demos/terminal.html) | ![terminal](assets/showcase/terminal.png) |
| Pentest console · PulseScope | [pentest.html](demos/pentest.html) | ![pentest](assets/showcase/pentest.png) |
| Learning bench · StudyBench | [learning.html](demos/learning.html) | ![learning](assets/showcase/learning.png) |
| Chat app · LinkPane | [chat.html](demos/chat.html) | ![chat](assets/showcase/chat.png) |

```bash
cd demos && python3 -m http.server 8040
```

## Install (keep full folder)

```bash
git clone https://github.com/yg2224/app-shell-ui.git

# Codex
rsync -a --exclude .git ./app-shell-ui/ ~/.codex/skills/app-shell-ui/

# Claude Code: clone to a stable path and point a subagent/slash command
# at SKILL.md (see Chinese README.md)

# Grok
rsync -a --exclude .git ./app-shell-ui/ ~/.grok/skills/app-shell-ui/
```

## Layout

```text
SKILL.md
references/
  tokens.md
  components.md
  layouts.md
```

## Principles

1. Stable chrome, swappable business content  
2. Explicit tokens over vibes  
3. Light + dark as first-class  
4. Text + stroke icons; no emoji-dense content  
5. Equal-height peer columns  
6. Deliver runnable UI + dual-theme checklist  

## License

Licensed under the [Apache License 2.0](LICENSE).

```text
Copyright 2026 yg2224

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

You may use, modify, and distribute this skill (including commercially), provided you retain the copyright and license notices. See [LICENSE](LICENSE) for full terms.

The GitHub repository is currently **private**; clone access is limited to authorized users. The Apache-2.0 terms still apply once you have the source.

## Author

yg2224 · 2677406151@qq.com
