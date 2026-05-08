---
title: Tool declaration
description: Agent Tool 工具声明。
---

# Tool Declaration

`tool_declaration` 是一个 callable capability 的可移植描述。它应足够紧凑，便于 discovery；也要足够丰富，支持 validation 与 safety classification。

## Required shape

```json
{
  "schema_version": "0.2.0",
  "tool_id": "tool_web_search",
  "namespace": "web",
  "name": "search",
  "aliases": ["web_search"],
  "search_hint": "current public web information",
  "title": "Web Search",
  "description": "Search the web for current public information and return source refs.",
  "lifecycle": "available",
  "tool_kind": "web_search",
  "capability_refs": ["web_search"],
  "input_contract": {
    "strict": true,
    "model_input_schema": {
      "type": "object",
      "properties": { "query": { "type": "string" } },
      "required": ["query"],
      "additionalProperties": false
    }
  },
  "interface_ref": "tool_interface:web.search",
  "execution_profile_ref": "execution_profile:web.search",
  "permission_profile_ref": "permission_profile:web.search"
}
```

## Guidance

- `description` 面向模型。说明什么时候使用，也说明什么时候不该使用。
- `name` 是主要 model-callable name；`aliases` 是兼容名称。
- `namespace` 防止同名工具冲突。
- `search_hint` 帮助 deferred loading 与关键词 discovery。
- `capability_refs` 描述底层能力，而不是产品入口。
- `annotations` 是 hints。除非 producer 可信，consumer 应把它们当作非可信输入。
- 原生 id 放在 `external_mappings`；不要为了统一命名而丢失 MCP tool names、OpenAPI operation ids、provider function names、CLI commands、browser action ids 或 A2A task/artifact ids。
