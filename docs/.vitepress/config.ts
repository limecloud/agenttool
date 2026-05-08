import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

const enNav = [
  { text: 'Guide', link: '/en/what-is-agent-tool' },
  { text: 'Specification', link: '/en/specification' },
  { text: 'Examples', link: '/en/examples/shell-command-with-sandbox' },
  { text: 'Ecosystem', link: '/en/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/en/reference/json-schemas' },
  {
    text: 'Version',
    items: [
      { text: 'latest', link: '/en/specification' },
      { text: 'v0.2.0 overview', link: '/en/versions/v0.2.0/overview' },
      { text: 'v0.2.0 specification', link: '/en/versions/v0.2.0/specification' },
      { text: 'v0.2.0 changelog', link: '/en/versions/v0.2.0/changelog' },
      { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
      { text: 'v0.1.1 specification', link: '/en/versions/v0.1.1/specification' },
      { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/en/versions/v0.1.0/specification' }
    ]
  }
]

const zhNav = [
  { text: '指南', link: '/zh/what-is-agent-tool' },
  { text: '规范', link: '/zh/specification' },
  { text: '示例', link: '/zh/examples/shell-command-with-sandbox' },
  { text: '生态', link: '/zh/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/zh/reference/json-schemas' },
  {
    text: '版本',
    items: [
      { text: 'latest', link: '/zh/specification' },
      { text: 'v0.2.0 概览', link: '/zh/versions/v0.2.0/overview' },
      { text: 'v0.2.0 规范', link: '/zh/versions/v0.2.0/specification' },
      { text: 'v0.2.0 变更记录', link: '/zh/versions/v0.2.0/changelog' },
      { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
      { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
      { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/zh/versions/v0.1.0/specification' }
    ]
  }
]

const enContracts = [
  { text: 'Tool declaration', link: '/en/contracts/tool-declaration' },
  { text: 'Tool interface', link: '/en/contracts/tool-interface' },
  { text: 'Tool surface', link: '/en/contracts/tool-surface' },
  { text: 'Input and output contracts', link: '/en/contracts/input-output-contracts' },
  { text: 'Execution profile', link: '/en/contracts/execution-profile' },
  { text: 'Execution pipeline', link: '/en/contracts/tool-execution-pipeline' },
  { text: 'Hooks and input mutation', link: '/en/contracts/hooks-and-input-mutation' },
  { text: 'Permission profile', link: '/en/contracts/permission-profile' },
  { text: 'Permission decision', link: '/en/contracts/permission-decision' },
  { text: 'Invocation lifecycle', link: '/en/contracts/invocation-lifecycle' },
  { text: 'Concurrency and scheduling', link: '/en/contracts/concurrency-and-scheduling' },
  { text: 'Deferred loading and tool search', link: '/en/contracts/deferred-loading-and-tool-search' },
  { text: 'Progress and cancellation', link: '/en/contracts/progress-and-cancellation' },
  { text: 'Result envelope', link: '/en/contracts/result-envelope' },
  { text: 'Result persistence and rendering', link: '/en/contracts/result-persistence-and-rendering' },
  { text: 'Resource and artifact refs', link: '/en/contracts/resource-and-artifact-refs' },
  { text: 'Errors and retries', link: '/en/contracts/errors-and-retries' },
  { text: 'Interoperability', link: '/en/contracts/interoperability' }
]

const zhContracts = [
  { text: 'Tool declaration', link: '/zh/contracts/tool-declaration' },
  { text: 'Tool interface', link: '/zh/contracts/tool-interface' },
  { text: 'Tool surface', link: '/zh/contracts/tool-surface' },
  { text: 'Input 与 output contracts', link: '/zh/contracts/input-output-contracts' },
  { text: 'Execution profile', link: '/zh/contracts/execution-profile' },
  { text: 'Execution pipeline', link: '/zh/contracts/tool-execution-pipeline' },
  { text: 'Hooks 与 input mutation', link: '/zh/contracts/hooks-and-input-mutation' },
  { text: 'Permission profile', link: '/zh/contracts/permission-profile' },
  { text: 'Permission decision', link: '/zh/contracts/permission-decision' },
  { text: 'Invocation lifecycle', link: '/zh/contracts/invocation-lifecycle' },
  { text: 'Concurrency 与 scheduling', link: '/zh/contracts/concurrency-and-scheduling' },
  { text: 'Deferred loading 与 tool search', link: '/zh/contracts/deferred-loading-and-tool-search' },
  { text: 'Progress 与 cancellation', link: '/zh/contracts/progress-and-cancellation' },
  { text: 'Result envelope', link: '/zh/contracts/result-envelope' },
  { text: 'Result persistence 与 rendering', link: '/zh/contracts/result-persistence-and-rendering' },
  { text: 'Resource 与 artifact refs', link: '/zh/contracts/resource-and-artifact-refs' },
  { text: 'Errors 与 retries', link: '/zh/contracts/errors-and-retries' },
  { text: 'Interoperability', link: '/zh/contracts/interoperability' }
]

const enExamples = [
  { text: 'Shell command with sandbox', link: '/en/examples/shell-command-with-sandbox' },
  { text: 'Deferred MCP discovery', link: '/en/examples/deferred-mcp-tool-discovery' },
  { text: 'Permission denied with retry', link: '/en/examples/permission-denied-with-retry' },
  { text: 'Large result persistence', link: '/en/examples/large-result-persistence' },
  { text: 'Parallel read tools', link: '/en/examples/parallel-read-tools' },
  { text: 'MCP search tool', link: '/en/examples/mcp-search-tool' },
  { text: 'Local file read', link: '/en/examples/local-file-read' },
  { text: 'Browser action', link: '/en/examples/browser-action' },
  { text: 'Image generation task', link: '/en/examples/image-generation-task' },
  { text: 'Tool search', link: '/en/examples/tool-search' }
]

const zhExamples = [
  { text: '带 sandbox 的 shell command', link: '/zh/examples/shell-command-with-sandbox' },
  { text: 'Deferred MCP discovery', link: '/zh/examples/deferred-mcp-tool-discovery' },
  { text: 'Permission denied with retry', link: '/zh/examples/permission-denied-with-retry' },
  { text: 'Large result persistence', link: '/zh/examples/large-result-persistence' },
  { text: 'Parallel read tools', link: '/zh/examples/parallel-read-tools' },
  { text: 'MCP 搜索工具', link: '/zh/examples/mcp-search-tool' },
  { text: '本地文件读取', link: '/zh/examples/local-file-read' },
  { text: '浏览器动作', link: '/zh/examples/browser-action' },
  { text: '图片生成任务', link: '/zh/examples/image-generation-task' },
  { text: '工具搜索', link: '/zh/examples/tool-search' }
]

const enSidebar = [
  { text: 'Start here', items: [
    { text: 'Overview', link: '/en/' },
    { text: 'What is Agent Tool?', link: '/en/what-is-agent-tool' },
    { text: 'Tool model', link: '/en/concepts/tool-model' },
    { text: 'Specification', link: '/en/specification' }
  ]},
  { text: 'Contracts', items: enContracts },
  { text: 'For implementors', items: [
    { text: 'Implementation quickstart', link: '/en/authoring/quickstart' },
    { text: 'Acceptance scenarios', link: '/en/authoring/acceptance-scenarios' }
  ]},
  { text: 'Examples', items: enExamples },
  { text: 'Reference', items: [
    { text: 'Glossary', link: '/en/reference/glossary' },
    { text: 'Agent standards ecosystem', link: '/en/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/en/reference/json-schemas' },
    { text: 'Ecosystem boundaries', link: '/en/reference/ecosystem-boundaries' },
    { text: 'Research sources', link: '/en/reference/research-sources' },
    { text: 'Source analysis', link: '/en/reference/source-analysis' }
  ]},
  { text: 'Versions', items: [
    { text: 'v0.2.0 overview', link: '/en/versions/v0.2.0/overview' },
    { text: 'v0.2.0 specification', link: '/en/versions/v0.2.0/specification' },
    { text: 'v0.2.0 changelog', link: '/en/versions/v0.2.0/changelog' },
    { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
    { text: 'v0.1.1 specification', link: '/en/versions/v0.1.1/specification' },
    { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
    { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
    { text: 'v0.1.0 specification', link: '/en/versions/v0.1.0/specification' },
    { text: 'v0.1.0 changelog', link: '/en/versions/v0.1.0/changelog' }
  ]}
]

const zhSidebar = [
  { text: '开始', items: [
    { text: '概览', link: '/zh/' },
    { text: '什么是 Agent Tool', link: '/zh/what-is-agent-tool' },
    { text: 'Tool 模型', link: '/zh/concepts/tool-model' },
    { text: '规范', link: '/zh/specification' }
  ]},
  { text: '契约', items: zhContracts },
  { text: '实现者', items: [
    { text: '快速开始', link: '/zh/authoring/quickstart' },
    { text: '验收场景', link: '/zh/authoring/acceptance-scenarios' }
  ]},
  { text: '示例', items: zhExamples },
  { text: '参考', items: [
    { text: '术语表', link: '/zh/reference/glossary' },
    { text: 'Agent 标准生态', link: '/zh/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/zh/reference/json-schemas' },
    { text: '生态边界', link: '/zh/reference/ecosystem-boundaries' },
    { text: '调研来源', link: '/zh/reference/research-sources' },
    { text: '实现分析摘要', link: '/zh/reference/source-analysis' }
  ]},
  { text: '版本', items: [
    { text: 'v0.2.0 概览', link: '/zh/versions/v0.2.0/overview' },
    { text: 'v0.2.0 规范', link: '/zh/versions/v0.2.0/specification' },
    { text: 'v0.2.0 变更记录', link: '/zh/versions/v0.2.0/changelog' },
    { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
    { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
    { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
    { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
    { text: 'v0.1.0 规范', link: '/zh/versions/v0.1.0/specification' },
    { text: 'v0.1.0 变更记录', link: '/zh/versions/v0.1.0/changelog' }
  ]}
]

export default defineConfig({
  base,
  title: 'Agent Tool',
  description: 'A portable standard for agent tool declarations, runtime interfaces, invocation, progress, results, permissions, scheduling, and audit refs.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'English', items: enNav },
      { text: '中文', items: zhNav }
    ],
    sidebar: { '/en/': enSidebar, '/zh/': zhSidebar },
    search: { provider: 'local' },
    footer: {
      message: 'Draft standard for portable agent tool declarations, runtime interfaces, invocations, progress, results, permissions, scheduling, and audit refs.',
      copyright: 'Copyright © 2026'
    }
  },
  markdown: { lineNumbers: true }
})
