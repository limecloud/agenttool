---
title: Interoperability
description: Agent Tool Interoperability。
---

# Interoperability

Agent Tool 是 normalization 与 linking layer，不应该吞掉原生协议。

## MCP

保留 `tools/list`、`tools/call`、tool `name`、`inputSchema`、`outputSchema`、`structuredContent`、`content`、`isError` 与 content block refs。在外层补 Agent Tool ids 与 policy / evidence / runtime refs。

## OpenAPI

保留 `operationId`、method、path、server、security schemes、request schemas 与 response schemas。再补 agent-specific surfaces、invocation lifecycle 与 result mapping。

## Function calling APIs

保留 provider 的 `tool_call_id`、function name、tool choice、strictness 与 parallel-call semantics。再补 portable invocation ids 与 policy / evidence refs。

## A2A

保留 Agent Card、AgentSkill id、task id、context id、message id 与 artifact id。Agent Tool 可以把 peer agent capability 描述成 tool，但不替代 peer protocol。

## Telemetry

保留 trace id、span id、GenAI tool call attributes 与 native request ids。除非明确启用且完成脱敏，否则不要把敏感 arguments 或 results 写进 telemetry。
