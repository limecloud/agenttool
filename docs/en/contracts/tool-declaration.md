---
title: Tool declaration
description: Agent Tool tool declaration.
---

# Tool Declaration

A `tool_declaration` is the portable description of one callable capability. It should be compact enough for discovery and rich enough for validation and safety classification.

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

- `description` is model-facing. Explain when to use the tool and when not to use it.
- `name` is the primary model-callable name; `aliases` are compatibility names.
- `namespace` prevents collision between tools with similar names.
- `search_hint` helps deferred loading and keyword discovery.
- `capability_refs` should describe underlying capability, not the product entry point.
- `annotations` are hints. Consumers should treat them as untrusted unless the producer is trusted.
- Preserve native ids in `external_mappings`; do not rename away MCP tool names, OpenAPI operation ids, provider function names, CLI commands, browser action ids, or A2A task/artifact ids.
