---
title: Tool surface
description: Agent Tool Tool surface。
---

# Tool Surface

`tool_surface` 是某个上下文里可见的工具集合，不是全局 catalog。

Surface 可以作用于 `turn`、`task`、`session`、`tenant`、`skill`、`peer_agent` 或 `workspace`。

| 字段 | 含义 |
| --- | --- |
| `surface_id` | 当前工具集合的稳定 id。 |
| `scope` | 适用上下文。 |
| `tool_refs` | 可被考虑的工具。 |
| `deferred_tools` | 可发现但暂不加载的工具。 |
| `blocked_tools` | 被隐藏的工具及机器可读原因。 |
| `selection_policy` | 模型或 runtime 如何选择工具。 |
| `default_tool_choice` | `auto`、`none`、`required` 或工具级 hint。 |
| `policy_refs` | 相邻 policy decisions 或 constraints。 |

当 policy、credential、workspace、active skill、peer agent 或模型能力变化时，surface SHOULD 重新生成。
