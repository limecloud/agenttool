---
title: 调研来源
description: Agent Tool 调研来源。
---

# 调研来源

Agent Tool v0.2.0 参考了成熟的工具、API、事件、遥测、授权与 agent 协议。这些参考影响标准形状，但不转移 Agent Tool 的语义所有权。

| 来源 | Agent Tool 借鉴内容 |
| --- | --- |
| [Model Context Protocol tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) | Tool discovery、`tools/list`、`tools/call`、`name`、`title`、`description`、`inputSchema`、`outputSchema`、content blocks、`structuredContent`、`resource_link`、embedded resources、annotations、`isError`、`_meta`、errors 与 safety guidance。 |
| [Agent2Agent Protocol](https://a2a-protocol.org/latest/specification/) | Agent cards、skills、tasks、messages、artifacts、streaming events、auth scoping、native task/context/artifact ids 与 peer-agent capability references。 |
| [OpenAI function calling guide](https://platform.openai.com/docs/guides/function-calling) | Function tools、tool calls、tool outputs、`tool_call_id`、tool choice、parallel tool calls、strict schema mode、custom tools 与 tool search/deferred loading concepts。 |
| [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) | Operation ids、methods、paths、request/response schemas、security schemes 与 API operation mapping。 |
| [JSON Schema 2020-12 validation](https://json-schema.org/draft/2020-12/json-schema-validation) | input / output contracts 的结构化校验。 |
| [OAuth 2.0 RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) | authorization scopes、grants、tokens 与 credential delegation references。 |
| [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | `id`、`source`、`specversion`、`type`、`subject`、`time` 与内容 metadata。 |
| [OpenTelemetry GenAI MCP conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/mcp/) | tool execution spans、tool names、arguments/results、JSON-RPC ids、MCP session ids 与 trace/span correlation。 |
| [Agent Skills](https://agentskills.io/) | AI-friendly authoring style、progressive disclosure、package-versus-runtime boundary 与 skill/tool distinction。 |
| [in-toto Attestation](https://github.com/in-toto/attestation) | 工具生成审计包的 signed statements 与 subject refs。 |

## Implementation analysis inputs

Agent Tool v0.2.0 也吸收了 coding-agent tool systems 的源码级分析，尤其包括 tool interfaces、permission flows、hook pipelines、streaming execution、tool search、file tools、shell tools、MCP adapters 与 result persistence mechanisms。公共标准只保留蒸馏后的 contracts，不依赖任何单一产品实现。
