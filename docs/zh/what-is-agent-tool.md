---
title: 什么是 Agent Tool？
description: Agent Tool 的定位与边界。
---

# 什么是 Agent Tool？

Agent Tool 定义 Agent 系统中的可移植工具层。它记录“暴露了什么能力、哪个 surface 让它可见、模型提出了什么输入、hooks 与 permission decisions 如何改变输入、它如何被调度和执行、进度如何流出、返回了什么结果、相邻系统如何审计、渲染、持久化或 replay 结果”。

工具不只是一个 JSON function。它可能是远端 MCP tool、本地文件操作、浏览器动作、shell 命令、原生桌面命令、站点适配器、模型驱动的媒体任务、tool-search entry，或 peer-agent capability。这些工具需要一套不会被 provider 变化打断、同时保留原生 id 的公共语义。

## 什么时候使用 Agent Tool

- 需要列出、过滤、搜索、延迟加载、加载或阻塞 model-facing tools。
- 工具需要可安全区分的 model-facing 与 runtime-facing input schemas。
- hooks 或 permission prompts 可能 normalize paths、add context、update inputs 或 stop execution。
- 工具调用需要 approval、sandbox、quota、tenant policy、classifier checks 或 human confirmation。
- concurrency、ordering、sibling failure、interruption、cancellation、timeout、retry 或 partial result semantics 很重要。
- 输出可能包含结构化 JSON、文本、媒体、resource refs、artifact refs、persisted payload refs 或 evidence refs。
- 多个协议需要引用同一次调用，同时不能丢失原生 id。

## 它不是什么

Agent Tool 不是传输协议，不替代 MCP 或 OpenAPI，不是模型 API，不是 runtime scheduler，不是 skill 包格式，不是 policy engine，不是 UI 组件系统，不是 evidence archive，也不是 artifact storage system。

| 相邻系统 | 拥有 | Agent Tool 拥有 |
| --- | --- | --- |
| MCP / OpenAPI / provider API | wire protocol 与原生 operation model。 | mapping refs、declaration normalization、invocation envelope 和 result mapping。 |
| Agent Runtime | scheduling engine、进程执行、会话状态、task lifecycle、恢复。 | tool-specific scheduling facts、invocation facts、progress 与 status transitions。 |
| Agent Policy | allow、deny、ask、risk、retention、waiver、redaction decisions。 | permission profiles 与 per-invocation permission decision refs。 |
| Agent UI | composer controls、tool cards、approval prompts、progress projection。 | UI 可渲染、但不拥有语义的机器可读事实。 |
| Agent Evidence | provenance、verification、replay、review、audit export。 | Evidence 可摄取的 tool call refs 与 result facts。 |
| Agent Artifact | durable deliverables、versions、exports、handoff packages。 | result-to-artifact refs 与 tool-generated source links。 |
| Agent Skills | portable instruction bundles 与 procedural knowledge。 | skill 激活后暴露的 runtime tool declarations。 |
| Agent Context | context selection、assembly、injection、compaction、missing-context facts。 | 绑定到 invocations 的 tool inputs、outputs 与 hook-added context refs。 |
