---
title: MCP 搜索工具
description: Agent Tool MCP 搜索工具示例。
---

# MCP 搜索工具

这个示例把 MCP search tool 映射成 Agent Tool，同时不替代 MCP。

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

Invocation 保留 MCP JSON-RPC request id 作为 native ref，并使用 portable `invocation_id` 做跨系统连接。
