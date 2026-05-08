---
title: Research sources
description: External references used by the Agent Tool draft.
---

# Research Sources

Agent Tool v0.1.0 uses established tool, API, eventing, telemetry, authorization, and agent protocol references. These references inform the shape of the standard; they do not transfer ownership of Agent Tool semantics.

| Source | What Agent Tool takes from it |
| --- | --- |
| [Model Context Protocol tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) | Tool discovery, `tools/list`, `tools/call`, `inputSchema`, `outputSchema`, content blocks, `structuredContent`, `resource_link`, embedded resources, annotations, errors, and safety guidance. |
| [Agent2Agent Protocol](https://a2a-protocol.org/latest/specification/) | Agent cards, skills, tasks, messages, artifacts, streaming events, auth scoping, native task/context/artifact ids, and peer-agent capability references. |
| [OpenAI function calling guide](https://platform.openai.com/docs/guides/function-calling) | Function tools, tool calls, tool outputs, `tool_call_id`, tool choice, allowed tools, strict schema mode, custom tools, and tool search. |
| [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) | Operation ids, methods, paths, request/response schemas, security schemes, and API operation mapping. |
| [JSON Schema 2020-12 validation](https://json-schema.org/draft/2020-12/json-schema-validation) | Structural validation for input and output contracts. |
| [OAuth 2.0 RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) | Authorization scopes, grants, tokens, and credential delegation references. |
| [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | Portable event envelope fields such as `id`, `source`, `specversion`, `type`, `subject`, `time`, and content metadata. |
| [OpenTelemetry GenAI MCP conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/mcp/) | `execute_tool` spans, `gen_ai.tool.name`, `gen_ai.tool.call.arguments`, `gen_ai.tool.call.result`, JSON-RPC ids, MCP session ids, and trace/span correlation. |
| [Agent Skills](https://agentskills.io/) | AI-friendly authoring style, progressive disclosure, package-versus-runtime boundary, and skill/tool distinction. |
| [in-toto Attestation](https://github.com/in-toto/attestation) | Signed statements and subject refs for tool-generated audit packages. |
