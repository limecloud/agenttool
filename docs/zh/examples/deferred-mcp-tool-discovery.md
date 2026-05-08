---
title: Deferred MCP tool discovery
description: Agent Tool deferred MCP 工具发现示例。
---

# Deferred MCP Tool Discovery

远端 server 可能暴露很多工具。Agent Tool 可以先 surface names 与 hints，只在需要时加载精确 schema。

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

Tool search result 可以按精确名称选择：

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
