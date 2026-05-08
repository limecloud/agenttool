---
title: Tool declaration
description: Agent Tool tool declaration.
---

# Tool Declaration

A `tool_declaration` is the portable description of one callable capability. It should be compact enough for discovery and rich enough for validation.

## Required shape

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

## Guidance

- `description` is model-facing. Explain when to use the tool and when not to use it.
- `namespace` prevents collision between tools with similar names.
- `capability_refs` should describe underlying capability, not the product entry point.
- `annotations` are hints. Consumers should treat them as untrusted unless the producer is trusted.

