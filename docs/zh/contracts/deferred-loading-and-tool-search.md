---
title: Deferred loading and tool search
description: Agent Tool 延迟加载与工具搜索契约。
---

# Deferred Loading and Tool Search

大型工具 catalog 不应强迫所有 schema 进入 prompt。Agent Tool 把 discovery 和 loading 当作一等 surface 机制。

## Loading states

| 状态 | 含义 |
| --- | --- |
| `loaded` | 完整 schema 与 prompt description 已对模型或调用方可用。 |
| `deferred` | 工具仅以 name 或 hint 形式已知，完整 schema 尚未加载。 |
| `discoverable` | 工具可以出现在 search results 中。 |
| `pending_provider` | 后端 server、plugin、peer agent 或 provider 仍在连接。 |
| `unavailable` | 当前上下文无法加载该工具。 |

## Deferred ref

`deferred_tool_ref` SHOULD 包含：

- `tool_id`
- `name`
- `namespace`
- `search_hint`
- `source`
- `schema_visibility`
- `loading_state`
- `reason`
- `pending_provider_or_server`
- `selection_ref`
- `native_ref`

## Search result

`tool_search_result` SHOULD 包含 `query`、`query_type`、`matches`、`total_deferred_tools`、`pending_providers`、`missing_names` 与 `next_action`。

精确选择与关键词搜索 SHOULD 都被支持。精确选择减少调用方已经知道工具名时的 retry churn。关键词搜索帮助模型发现 remote tools，而不用加载所有 schemas。

## Schema-not-loaded error

如果模型在加载 schema 前调用 deferred tool，返回结构化 `schema_not_loaded` 错误，并提示先 discover 或 select 工具。不得执行 schema 不可见且未校验的调用。
