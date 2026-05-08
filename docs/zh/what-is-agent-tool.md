---
title: 什么是 Agent Tool？
description: Agent Tool 的定位与边界。
---

# 什么是 Agent Tool？

Agent Tool 定义 Agent 系统中的可移植工具面。它记录“暴露了什么能力、允许什么输入、调用如何被授权和执行、进度如何报告、返回了什么结果、相邻系统如何审计或渲染结果”。

工具不只是一个 JSON function。它可能是远端 MCP tool、本地文件操作、浏览器动作、shell 命令、原生桌面命令、站点适配器、模型驱动的媒体任务，或被委托的 API 动作。这些工具需要一套不会被 provider 变化打断、同时保留原生 id 的公共语义。

## 什么时候使用 Agent Tool

- 需要列出、过滤、搜索或延迟加载 model-facing tools。
- 工具需要可验证的 input / output contracts。
- 工具调用需要审批、sandbox、quota、tenant policy 或 human confirmation。
- 进度、取消、超时、重试和部分结果语义很重要。
- 输出可能包含结构化 JSON、文本、媒体、resource refs、artifact refs 或 evidence refs。
- 多个协议需要引用同一次调用，同时不能丢失原生 id。

## 它不是什么

Agent Tool 不是传输协议，不替代 MCP 或 OpenAPI，不是模型 API，不是 runtime executor，不是 skill 包格式，不是 policy engine，不是 UI 组件系统，不是 evidence archive，也不是 artifact storage system。

| 相邻系统 | 拥有 | Agent Tool 拥有 |
| --- | --- | --- |
| MCP / OpenAPI / provider API | wire protocol 与原生 operation model。 | mapping refs、declaration normalization、invocation envelope 和 result mapping。 |
| Agent Runtime | 调度、进程执行、会话状态、task lifecycle、恢复。 | tool invocation facts 与 tool-specific status transitions。 |
| Agent Policy | allow、deny、ask、risk、retention、waiver、redaction decisions。 | 绑定到工具调用的 permission profile refs 与 policy decision refs。 |
| Agent UI | composer controls、tool cards、approval prompts、progress projection。 | UI 可渲染的机器可读事实。 |
| Agent Evidence | provenance、verification、replay、review、audit export。 | Evidence 可摄取的 tool call refs 与 result facts。 |
| Agent Artifact | durable deliverables、versions、exports、handoff packages。 | result-to-artifact refs 与 tool-generated source links。 |
| Agent Skills | portable instruction bundles 与 procedural knowledge。 | skill 激活后暴露的 runtime tool declarations。 |
