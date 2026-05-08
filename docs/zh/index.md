---
layout: home
hero:
  name: Agent Tool
  text: 面向 Agent 系统的可移植工具面标准
  tagline: 为工具声明、能力引用、调用生命周期、进度、结果、权限和审计链接提供统一语义。
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
    details: 稳定 id、命名空间、输入/输出 schema、能力引用、风险面和执行 profile。
  - title: 安全调用工具
    details: 调用 id、审批门、进度事件、取消、重试、超时和结构化错误。
  - title: 可移植地返回结果
    details: 结果 envelope 连接 resources、artifacts、evidence、policy decisions、runtime events 和 telemetry spans。
---

# Agent Tool

Agent Tool 是 Agent 系统中工具层的可移植标准。它定义工具如何被描述、选择、调用、监控、约束与返回，但不替代 MCP、OpenAPI、function calling API、runtime executor、UI renderer、policy engine、evidence archive 或 artifact store。

当产品需要稳定表达文件访问、网页搜索、浏览器控制、代码执行、API 调用、媒体生成、文档抽取、工具搜索和原生应用动作等能力时，使用 Agent Tool。
