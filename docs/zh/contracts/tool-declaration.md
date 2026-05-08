---
title: Tool declaration
description: Agent Tool Tool declaration。
---

# Tool Declaration

`tool_declaration` 是一个 callable capability 的可移植描述。它既要足够小，适合 discovery；也要足够明确，支持 validation。

## 基本形状

```json
{
  "schema_version": "0.1.0",
  "tool_id": "tool_web_search",
  "namespace": "web",
  "name": "search",
  "title": "Web Search",
  "description": "Search the web for current public information and return source refs.",
  "lifecycle": "available",
  "tool_kind": "web_search",
  "capability_refs": ["web_search"],
  "input_contract": {
    "schema": {
      "type": "object",
      "properties": { "query": { "type": "string" } },
      "required": ["query"]
    }
  }
}
```

## 规则

- `description` 面向模型，应说明什么时候使用、什么时候不要使用。
- `namespace` 用来避免同名工具冲突。
- `capability_refs` 描述底层能力，不描述产品入口。
- `annotations` 只是 hints。除非 producer 被信任，否则 consumer 不应把它当成可信事实。
