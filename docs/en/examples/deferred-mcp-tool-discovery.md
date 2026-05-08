---
title: Deferred MCP tool discovery
description: Agent Tool deferred MCP tool discovery example.
---

# Deferred MCP Tool Discovery

A remote server may expose many tools. Agent Tool can surface names and hints first, then load exact schemas only when needed.

```json
{
  "schema_version": "0.2.0",
  "surface_id": "surface_turn_42",
  "scope": "turn",
  "loaded_tools": ["tool_search"],
  "deferred_tools": [
    {
      "tool_id": "mcp.github.search_issues",
      "name": "mcp__github__search_issues",
      "namespace": "mcp.github",
      "search_hint": "search repository issues",
      "source": "mcp",
      "schema_visibility": "deferred",
      "loading_state": "discoverable",
      "native_ref": {
        "server_name": "github",
        "tool_name": "search_issues"
      }
    }
  ]
}
```

A tool search result can select by exact name:

```json
{
  "schema_version": "0.2.0",
  "query": "select:mcp__github__search_issues",
  "query_type": "select",
  "matches": ["mcp.github.search_issues"],
  "total_deferred_tools": 31,
  "next_action": "load_schema_then_call"
}
```
