---
title: Execution profile
description: Agent Tool 执行 profile。
---

# Execution Profile

`tool_execution_profile` 描述工具如何被运行。

## Execution kinds

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

## Capabilities

Profiles SHOULD 声明是否支持：

- streaming progress
- cancellation
- timeout
- resume
- retries
- partial results
- background tasks
- result persistence
- artifacts
- sandboxing
- credential delegation
- offline execution
- context modifiers

如果某能力不支持，要明确说明。Silent fallback 会制造不安全的 agent behavior。

## Shell 与 local process profiles

Shell-like tools SHOULD 声明 command parsing strategy、working directory policy、environment policy、sandbox profile、background execution support、timeout behavior、exit-code interpretation 与 classifier input。

## Remote profiles

Remote tools SHOULD 保留 native request ids、session ids、protocol versions、server names、retry semantics 与 protocol-level error distinctions。
