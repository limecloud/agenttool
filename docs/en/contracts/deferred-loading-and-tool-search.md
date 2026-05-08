---
title: Deferred loading and tool search
description: Agent Tool deferred loading and tool search contract.
---

# Deferred Loading and Tool Search

Large tool catalogs should not force every schema into the prompt. Agent Tool treats discovery and loading as first-class surface mechanics.

## Loading states

| State | Meaning |
| --- | --- |
| `loaded` | Full schema and prompt description are available to the model or caller. |
| `deferred` | Tool is known by name or hint, but full schema is not loaded. |
| `discoverable` | Tool can appear in search results. |
| `pending_provider` | Backing server, plugin, peer agent, or provider is still connecting. |
| `unavailable` | Tool cannot be loaded in this context. |

## Deferred ref

A `deferred_tool_ref` SHOULD include:

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

A `tool_search_result` SHOULD include `query`, `query_type`, `matches`, `total_deferred_tools`, `pending_providers`, `missing_names`, and `next_action`.

Exact selection and keyword search SHOULD both be supported. Exact selection reduces retry churn when the caller already knows a tool name. Keyword search helps models discover remote tools without loading all schemas.

## Schema-not-loaded error

If a model calls a deferred tool before loading its schema, return a structured `schema_not_loaded` error with a hint to discover or select the tool first. Do not execute a call whose schema was not visible and validated.
