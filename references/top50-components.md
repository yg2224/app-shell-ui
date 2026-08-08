# Top 50 React UI 参考库

这份索引对应 `assets/top50-react/` 中的 50 个可复制组件。组件保留原始交互和预览结构；接入 App Shell UI 页面时，优先把颜色、表面和间距改成 `references/tokens.md` 的变量。

## 来源与筛选

这 50 个组件由本机源项目 `/Users/yg2224/Desktop/project/UI-合集` 的 Top 50 导出生成。源项目先汇总 200 个可独立渲染候选（GPT 100 个、MiniMax 100 个），再按 Visual Quality、Distinctiveness、Product Utility、Interaction & A11y、Engineering Quality 五个维度加权评审，最后保留排名前 50 的实现。`claude/` 和 `trea/` 仅作为源审计背景，不计入可渲染候选排名。

当前资源包中的 50 个实现均来自最终入选的 dedicated React renderer；这里保留的是可复用源码和交互参考，不是原始候选全集。

## 使用方式

1. 先按下表选择组件，再只读取对应的 `components/items/*.tsx` 文件。
2. 组件依赖 `components/shared.tsx`；若使用 `cn`，同时复制根目录的 `lib/cn.ts`，并保持 `components/items`、`components/shared.tsx`、`lib/cn.ts` 的相对层级，不要额外套目录。
3. React / Next.js 项目需要 `react`、`lucide-react`，并需要 Tailwind CSS v4；`globals.css` 提供组件使用的自定义 token 和动画。
4. 组件的 `PreviewFrame` 是学习展示容器，不要把它当作业务页面外壳；外层页面仍按 App Shell 的四种 layout template 组装。

## 组件索引

| Rank | Component | Export | Category | Purpose | 推荐 shell layout | Source |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | Command Palette | `CommandPalette` | Advanced UI | Keyboard-first command palette with fuzzy search and shortcuts. | 按交互选择 | `components/items/01-command-palette.tsx` |
| 2 | Minimalist Player | `MinimalistPlayer` | Advanced UI | Minimal music player card with track progress and play state. | 按交互选择 | `components/items/02-minimalist-player.tsx` |
| 3 | Stepper Wizard | `StepperWizard` | Information | Multi-step wizard with progress bar and step content slot. | 设置型 / IM 三栏型 | `components/items/03-stepper-wizard.tsx` |
| 4 | Markdown Editor | `MarkdownEditor` | Advanced UI | Two-pane markdown editor with live preview. | 按交互选择 | `components/items/04-markdown-editor.tsx` |
| 5 | AI Chat Window | `AIChatWindow` | AI Interface | Streaming chat interface with avatars, code blocks and quick suggestions. | 工作台型 / IM 三栏型 | `components/items/05-ai-chat-window.tsx` |
| 6 | Confetti Burst | `ConfettiBurst` | Creative | Triggerable confetti burst with physics-driven particles. | 工作台型 | `components/items/06-confetti-burst.tsx` |
| 7 | FAQ Accordion | `FAQAccordion` | Information | Accordion list of FAQs with smooth height transitions. | 设置型 / IM 三栏型 | `components/items/07-faq-accordion.tsx` |
| 8 | Prompt Editor | `PromptEditor` | AI Interface | Multi-block prompt editor with variables, presets and live token count. | 工作台型 / IM 三栏型 | `components/items/08-prompt-editor.tsx` |
| 9 | Water Ripple Button | `WaterRippleButton` | Creative | Material-style button with ripple emanation on click. | 工作台型 | `components/items/09-water-ripple-button.tsx` |
| 10 | Cookie Banner | `CookieBanner` | Advanced UI | Sleek cookie consent banner with preferences and CTA. | 按交互选择 | `components/items/10-cookie-banner.tsx` |
| 11 | API Key Manager | `APIKeyManager` | SaaS | API key list with masked secrets, scopes, last used and revoke action. | 设置型 / 控制台型 | `components/items/11-api-key-manager.tsx` |
| 12 | Tool Call Inspector | `ToolCallInspector` | AI Interface | Inspector panel for tool calls, args and results with expandable JSON view. | 工作台型 / IM 三栏型 | `components/items/12-tool-call-inspector.tsx` |
| 13 | Tilt Pricing | `TiltPricing` | Advanced UI | Pricing card that lifts on hover with detailed feature checklist. | 按交互选择 | `components/items/13-tilt-pricing.tsx` |
| 14 | 3D Tilt Card | `Tilt3DCard` | Creative | Card that responds to mouse position with subtle 3D tilt and shine. | 工作台型 | `components/items/14-3d-tilt-card.tsx` |
| 15 | Sankey Flow Diagram | `SankeyFlow` | Data Visualization | Flow diagram showing how quantities move between stages with proportional link widths. | 控制台型 | `components/items/15-sankey-flow-diagram.tsx` |
| 16 | Model Comparator | `ModelComparator` | AI Interface | Side-by-side comparison of LLM responses with latency and quality tags. | 工作台型 / IM 三栏型 | `components/items/16-model-comparator.tsx` |
| 17 | Aurora Code Block | `AuroraCodeBlock` | Advanced UI | Code block with syntax-aware coloring on aurora background. | 按交互选择 | `components/items/17-aurora-code-block.tsx` |
| 18 | Metrics Dashboard | `MetricsDashboard` | Data Visualization | Compact analytics dashboard with KPI cards, sparklines and category breakdown. | 控制台型 | `components/items/18-metrics-dashboard.tsx` |
| 19 | User Management Table | `UserManagementTable` | SaaS | Sortable, searchable user table with role chips, status dot and bulk actions. | 设置型 / 控制台型 | `components/items/19-user-management-table.tsx` |
| 20 | Feature Flag Matrix | `FeatureFlagMatrix` | SaaS | Feature flag control matrix with environment toggles and rollout sliders. | 设置型 / 控制台型 | `components/items/20-feature-flag-matrix.tsx` |
| 21 | Onboarding Checklist | `OnboardingChecklist` | SaaS | Step-by-step onboarding checklist with progress ring and contextual tips. | 设置型 / 控制台型 | `components/items/21-onboarding-checklist.tsx` |
| 22 | Plan Upgrade Modal | `PlanUpgradeModal` | SaaS | Plan comparison modal with feature highlights and CTA per tier. | 设置型 / 控制台型 | `components/items/22-plan-upgrade-modal.tsx` |
| 23 | Linear-style Sidebar | `LinearSidebar` | Advanced UI | Linear-style sidebar with subdued icons and active state pill. | 按交互选择 | `components/items/23-linear-style-sidebar.tsx` |
| 24 | Usage Quota Meter | `UsageQuotaMeter` | SaaS | Animated quota meter with threshold warnings and upgrade prompt. | 设置型 / 控制台型 | `components/items/24-usage-quota-meter.tsx` |
| 25 | RAG Source Viewer | `RAGSourceViewer` | AI Interface | Source citations panel with relevance scores and chunk previews. | 工作台型 / IM 三栏型 | `components/items/25-rag-source-viewer.tsx` |
| 26 | Agent Workflow | `AgentWorkflow` | AI Interface | Visual workflow editor for chained agent steps with branches and tool calls. | 工作台型 / IM 三栏型 | `components/items/26-agent-workflow.tsx` |
| 27 | Streaming Markdown | `StreamingMarkdown` | AI Interface | Incremental markdown renderer that streams tokens into headings, lists and tables. | 工作台型 / IM 三栏型 | `components/items/27-streaming-markdown.tsx` |
| 28 | Pricing Table | `PricingTable` | SaaS | Three-tier pricing table with feature checklist and recommended highlight. | 设置型 / 控制台型 | `components/items/28-pricing-table.tsx` |
| 29 | Soft Pastel Form | `SoftPastelForm` | Advanced UI | Pastel-themed form with pill inputs and friendly placeholders. | 按交互选择 | `components/items/29-soft-pastel-form.tsx` |
| 30 | Stock Candlestick | `StockCandlestick` | Data Visualization | OHLC candlestick chart with volume bars and selectable time range chips. | 控制台型 | `components/items/30-stock-candlestick.tsx` |
| 31 | Month Calendar | `MonthCalendar` | Information | Month calendar grid with event dots and agenda side panel. | 设置型 / IM 三栏型 | `components/items/31-month-calendar.tsx` |
| 32 | Notification Center | `NotificationCenter` | Information | Dropdown notification center with grouped tabs and unread badges. | 设置型 / IM 三栏型 | `components/items/32-notification-center.tsx` |
| 33 | Bento Grid | `BentoGrid` | Advanced UI | Bento-style asymmetric feature grid popularized by Apple. | 按交互选择 | `components/items/33-bento-grid.tsx` |
| 34 | Roles & Permissions | `RolesPermissionsMatrix` | SaaS | Permission matrix editor with role rows and capability columns. | 设置型 / 控制台型 | `components/items/34-roles-permissions.tsx` |
| 35 | Search Results | `SearchResults` | Information | Search results list with category icons and highlighted matches. | 设置型 / IM 三栏型 | `components/items/35-search-results.tsx` |
| 36 | Kanban Board | `KanbanBoard` | Information | Mini kanban board with cards, columns and progress labels. | 设置型 / IM 三栏型 | `components/items/36-kanban-board.tsx` |
| 37 | Starfield Background | `StarfieldBackground` | Creative | Twinkling parallax starfield with subtle nebula glow. | 工作台型 | `components/items/37-starfield-background.tsx` |
| 38 | Particle Constellation | `ParticleConstellation` | Creative | Animated particle system with connecting lines on proximity. | 工作台型 | `components/items/38-particle-constellation.tsx` |
| 39 | Webhook Inspector | `WebhookInspector` | SaaS | Webhook delivery inspector with retries, status codes and replay action. | 设置型 / 控制台型 | `components/items/39-webhook-inspector.tsx` |
| 40 | Radar Capability Map | `RadarCapabilityMap` | Data Visualization | Multi-axis radar chart comparing skill dimensions or feature coverage between items. | 控制台型 | `components/items/40-radar-capability-map.tsx` |
| 41 | Comment Thread | `CommentThread` | Information | Threaded comment block with replies, likes and editor. | 设置型 / IM 三栏型 | `components/items/41-comment-thread.tsx` |
| 42 | Pricing Comparison | `PricingComparison` | Information | Full pricing comparison table with sticky plan column. | 设置型 / IM 三栏型 | `components/items/42-pricing-comparison.tsx` |
| 43 | Skeleton Loader Set | `SkeletonLoaderSet` | Advanced UI | Set of shimmering skeleton placeholders for cards, lists and media. | 按交互选择 | `components/items/43-skeleton-loader-set.tsx` |
| 44 | Parallax Hero | `ParallaxHero` | Creative | Hero section with parallax layers reacting to scroll position. | 工作台型 | `components/items/44-parallax-hero.tsx` |
| 45 | Magnetic Button | `MagneticButton` | Creative | Button that magnetically attracts to the cursor on hover. | 工作台型 | `components/items/45-magnetic-button.tsx` |
| 46 | Network Topology | `NetworkTopology` | Data Visualization | Force-directed graph of nodes and edges representing a service topology. | 控制台型 | `components/items/46-network-topology.tsx` |
| 47 | Terminal Window | `TerminalWindow` | Advanced UI | Terminal window mockup with command history and blinking cursor. | 按交互选择 | `components/items/47-terminal-window.tsx` |
| 48 | Spotlight Card | `SpotlightCard` | Advanced UI | Card with a glowing border that follows cursor position. | 按交互选择 | `components/items/48-spotlight-card.tsx` |
| 49 | Analytics Cockpit | `AnalyticsCockpit` | SaaS | Multi-widget analytics cockpit with KPI cards, trendline and segment table. | 设置型 / 控制台型 | `components/items/49-analytics-cockpit.tsx` |
| 50 | Token Consumption Panel | `TokenConsumption` | AI Interface | Daily token usage panel with per-model breakdown and remaining quota. | 工作台型 / IM 三栏型 | `components/items/50-token-consumption-panel.tsx` |

## 依赖边界

- 组件只保留本地演示数据，不包含 API、数据库或外部图片请求。
- 组件文件均为单一 named export；不要把多个组件拼回一个文件。
- 交互组件包含键盘、焦点、`aria-*` 和 reduced-motion 处理；改写时保留这些行为。
- `top50.json` 是机器可读的顺序和命名清单；变更组件时同步更新它。

## 刷新资源

从原始项目重新同步：

```bash
python scripts/sync_top50_assets.py --source /path/to/top50
```

同步脚本会把 `@/` 别名改成资源包内的相对 import，并重新生成本索引。
