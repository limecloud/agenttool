---
title: Execution profile
description: Agent Tool Execution profile。
---

# Execution Profile

`tool_execution_profile` 描述工具如何运行。

## 执行类型

初始 execution kinds：

- `mcp_server`
- `http_api`
- `native_app`
- `local_process`
- `shell`
- `browser`
- `model_service`
- `peer_agent`
- `embedded_runtime`
- `hybrid`

## 能力声明

Profile SHOULD 明确是否支持：

- streaming progress
- cancellation
- resume
- retries
- partial results
- artifacts
- sandboxing
- credential delegation
- offline execution

如果某项能力不支持，就显式写出。静默 fallback 会造成不安全的 Agent 行为。
