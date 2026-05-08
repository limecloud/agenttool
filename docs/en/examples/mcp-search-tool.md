---
title: MCP search tool
description: Agent Tool example.
---

# MCP Search Tool

This example maps an MCP search tool into Agent Tool without replacing MCP.

```json
{
  "tool_id": "tool_mcp_search_docs",
  "namespace": "mcp.docs",
  "name": "search_docs",
  "tool_kind": "mcp_tool",
  "capability_refs": ["web_search", "retrieval"],
  "external_mappings": [
    {
      "source": "mcp",
      "server_id": "docs-server",
      "method": "tools/call",
      "tool_name": "search_docs",
      "mcp_protocol_version": "2025-06-18"
    }
  ],
  "input_contract": {
    "schema": {
      "type": "object",
      "properties": { "query": { "type": "string" } },
      "required": ["query"]
    }
  }
}
```

The invocation keeps the MCP JSON-RPC request id as a native ref and uses a portable `invocation_id` for cross-system linking.

