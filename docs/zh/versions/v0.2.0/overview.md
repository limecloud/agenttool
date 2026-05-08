---
title: v0.2.0 概览
description: Agent Tool v0.2.0 概览。
---

# v0.2.0 概览

Agent Tool v0.2.0 是第一个面向深层 runtime 的草案。它保留 v0.1.x 的 declaration、surface、invocation、progress、result、permission 与 interoperability 基础，并补上真实 agent tools 所需的机制。

## v0.2.0 新增

- Tool interface contract，覆盖 schemas、aliases、search hints、validation、safety classification、permission matching、execution、result mapping、rendering 与 persistence。
- 分离 `model_input`、`observable_input`、`permission_input` 与 `call_input` records。
- Tool execution pipeline，包含 schema parse、value validation、hooks、permission decisions、scheduler states、execution、result mapping、post hooks、persistence 与 terminal events。
- Permission decision records，包含 allow、ask、deny、passthrough、rule sources、modes、classifier state、suggested updates 与 updated input。
- Hook 与 input mutation records。
- 面向 parallel-safe tools、exclusive tools、interrupts、sibling failures、yielded results 与 synthetic errors 的 concurrency/scheduling policy。
- 面向大 catalogs 与 MCP-backed tools 的 deferred loading 与 tool search records。
- Result persistence 与 rendering boundaries。
- 扩展 JSON Schemas 与 examples。
