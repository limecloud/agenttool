---
title: Tool surface
description: Agent Tool tool surface。
---

# Tool Surface

`tool_surface` 是某个上下文中可见的工具集合。它不是全局 catalog。

Surface 可以作用于 `turn`、`task`、`session`、`tenant`、`skill`、`peer_agent`、`workspace`、`role` 或 `model_request`。

## Fields

| 字段 | 含义 |
| --- | --- |
| `surface_id` | surfaced set 的稳定 id。 |
| `scope` | surface 适用的上下文。 |
| `tool_refs` | 可被考虑的工具。 |
| `loaded_tools` | 当前 schema 可见的工具。 |
| `deferred_tools` | 可发现但未完整加载的工具。 |
| `blocked_tools` | 带机器可读原因的隐藏工具。 |
| `excluded_tools` | 因 role、recursion、feature、model 或 policy filters 被移除的工具。 |
| `selection_policy` | 模型或 runtime 如何选择工具。 |
| `default_tool_choice` | `auto`、`none`、`required` 或工具特定 hint。 |
| `role_constraints` | Agent type、coordinator mode、background worker 或 human role constraints。 |
| `model_capabilities` | provider 对 strict schemas、parallel calls、deferred refs、media 等的支持。 |
| `policy_refs` | 相邻 policy decisions 或 constraints。 |
| `runtime_refs` | runtime、session、task 或 sandbox refs。 |

当 policy、credentials、workspace、active skill、peer agent、model capability、feature gates 或 runtime mode 变化时，应重新生成 surface。

## Filtering

Surface filters SHOULD 记录原因。例如：

- subagents 内部阻止 recursive agent tool。
- non-interactive mode 阻止 human-interaction tool。
- write tool 被 permission mode 阻止。
- MCP tool 延迟到被 discover 后再加载。
- browser tool 因没有 browser session 被排除。
- shell tool 被 sandbox 或 platform policy 排除。
