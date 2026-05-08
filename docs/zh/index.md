---
layout: home
hero:
  name: Agent Tool
  text: 面向 Agent 的可移植工具系统标准
  tagline: 为工具声明、运行时接口、上下文 surface、输入变更、权限决策、调度、进度、结果、持久化和审计链接提供统一语义。
  image:
    src: /logo.svg
    alt: Agent Tool logo
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: LLM 完整上下文
      link: ../llms-full.txt
features:
  - title: 清晰声明工具
    details: 稳定 id、aliases、namespace、search hints、schemas、capability refs、风险面与 native mappings。
  - title: 安全执行工具
    details: 分离 model input、observable input、permission input 与 call input，并保留 validation、hooks、permission decisions 与 scheduling facts。
  - title: 可移植地返回结果
    details: 结果 envelope 连接 model content、UI rendering、persisted payloads、resources、artifacts、evidence、policy、runtime events 和 telemetry spans。
---

# Agent Tool

Agent Tool 是 Agent 系统中工具层的可移植标准。它定义工具如何被描述、选择、调用、授权、调度、流式输出、监控、约束、持久化、渲染与返回，但不替代 MCP、OpenAPI、function calling APIs、runtime executors、UI renderers、policy engines、evidence archives 或 artifact stores。

当产品需要稳定表达文件访问、网页搜索、浏览器控制、shell commands、代码执行、API 调用、媒体生成、文档抽取、工具搜索、MCP servers、peer-agent calls 和原生应用动作等能力时，使用 Agent Tool。
