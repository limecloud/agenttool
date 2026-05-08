import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

const enNav = [
  { text: 'Guide', link: '/en/what-is-agent-tool' },
  { text: 'Specification', link: '/en/specification' },
  { text: 'Examples', link: '/en/examples/mcp-search-tool' },
  { text: 'Ecosystem', link: '/en/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/en/reference/json-schemas' },
  {
    text: 'Version',
    items: [
      { text: 'latest', link: '/en/specification' },
      { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/en/versions/v0.1.0/specification' }
    ]
  }
]

const zhNav = [
  { text: '指南', link: '/zh/what-is-agent-tool' },
  { text: '规范', link: '/zh/specification' },
  { text: '示例', link: '/zh/examples/mcp-search-tool' },
  { text: '生态', link: '/zh/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/zh/reference/json-schemas' },
  {
    text: '版本',
    items: [
      { text: 'latest', link: '/zh/specification' },
      { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/zh/versions/v0.1.0/specification' }
    ]
  }
]

const enSidebar = [
  { text: 'Start here', items: [
    { text: 'Overview', link: '/en/' },
    { text: 'What is Agent Tool?', link: '/en/what-is-agent-tool' },
    { text: 'Tool model', link: '/en/concepts/tool-model' },
    { text: 'Specification', link: '/en/specification' }
  ]},
  { text: 'Contracts', items: [
    { text: 'Tool declaration', link: '/en/contracts/tool-declaration' },
    { text: 'Tool surface', link: '/en/contracts/tool-surface' },
    { text: 'Input and output contracts', link: '/en/contracts/input-output-contracts' },
    { text: 'Execution profile', link: '/en/contracts/execution-profile' },
    { text: 'Permission profile', link: '/en/contracts/permission-profile' },
    { text: 'Invocation lifecycle', link: '/en/contracts/invocation-lifecycle' },
    { text: 'Progress and cancellation', link: '/en/contracts/progress-and-cancellation' },
    { text: 'Result envelope', link: '/en/contracts/result-envelope' },
    { text: 'Resource and artifact refs', link: '/en/contracts/resource-and-artifact-refs' },
    { text: 'Errors and retries', link: '/en/contracts/errors-and-retries' },
    { text: 'Interoperability', link: '/en/contracts/interoperability' }
  ]},
  { text: 'For implementors', items: [
    { text: 'Implementation quickstart', link: '/en/authoring/quickstart' },
    { text: 'Acceptance scenarios', link: '/en/authoring/acceptance-scenarios' }
  ]},
  { text: 'Examples', items: [
    { text: 'MCP search tool', link: '/en/examples/mcp-search-tool' },
    { text: 'Local file read', link: '/en/examples/local-file-read' },
    { text: 'Browser action', link: '/en/examples/browser-action' },
    { text: 'Image generation task', link: '/en/examples/image-generation-task' },
    { text: 'Tool search', link: '/en/examples/tool-search' }
  ]},
  { text: 'Reference', items: [
    { text: 'Glossary', link: '/en/reference/glossary' },
    { text: 'Agent standards ecosystem', link: '/en/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/en/reference/json-schemas' },
    { text: 'Ecosystem boundaries', link: '/en/reference/ecosystem-boundaries' },
    { text: 'Research sources', link: '/en/reference/research-sources' },
    { text: 'Source analysis', link: '/en/reference/source-analysis' }
  ]},
  { text: 'Versions', items: [
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
  { text: '契约', items: [
    { text: 'Tool declaration', link: '/zh/contracts/tool-declaration' },
    { text: 'Tool surface', link: '/zh/contracts/tool-surface' },
    { text: 'Input 与 output contracts', link: '/zh/contracts/input-output-contracts' },
    { text: 'Execution profile', link: '/zh/contracts/execution-profile' },
    { text: 'Permission profile', link: '/zh/contracts/permission-profile' },
    { text: 'Invocation lifecycle', link: '/zh/contracts/invocation-lifecycle' },
    { text: 'Progress 与 cancellation', link: '/zh/contracts/progress-and-cancellation' },
    { text: 'Result envelope', link: '/zh/contracts/result-envelope' },
    { text: 'Resource 与 artifact refs', link: '/zh/contracts/resource-and-artifact-refs' },
    { text: 'Errors 与 retries', link: '/zh/contracts/errors-and-retries' },
    { text: 'Interoperability', link: '/zh/contracts/interoperability' }
  ]},
  { text: '实现者', items: [
    { text: '快速开始', link: '/zh/authoring/quickstart' },
    { text: '验收场景', link: '/zh/authoring/acceptance-scenarios' }
  ]},
  { text: '示例', items: [
    { text: 'MCP 搜索工具', link: '/zh/examples/mcp-search-tool' },
    { text: '本地文件读取', link: '/zh/examples/local-file-read' },
    { text: '浏览器动作', link: '/zh/examples/browser-action' },
    { text: '图片生成任务', link: '/zh/examples/image-generation-task' },
    { text: '工具搜索', link: '/zh/examples/tool-search' }
  ]},
  { text: '参考', items: [
    { text: '术语表', link: '/zh/reference/glossary' },
    { text: 'Agent 标准生态', link: '/zh/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/zh/reference/json-schemas' },
    { text: '生态边界', link: '/zh/reference/ecosystem-boundaries' },
    { text: '调研来源', link: '/zh/reference/research-sources' },
    { text: '实现分析摘要', link: '/zh/reference/source-analysis' }
  ]},
  { text: '版本', items: [
    { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
    { text: 'v0.1.0 规范', link: '/zh/versions/v0.1.0/specification' },
    { text: 'v0.1.0 变更记录', link: '/zh/versions/v0.1.0/changelog' }
  ]}
]

export default defineConfig({
  base,
  title: 'Agent Tool',
  description: 'A portable standard for agent tool declarations, invocation, progress, results, permissions, and audit refs.',
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
      message: 'Draft standard for portable agent tool declarations, invocations, progress, results, permissions, and audit refs.',
      copyright: 'Copyright © 2026'
    }
  },
  markdown: { lineNumbers: true }
})
