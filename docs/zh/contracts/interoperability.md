---
title: Interoperability
description: Agent Tool 互操作。
---

# Interoperability

Agent Tool 是 normalization 与 linking layer，不应吞掉原生协议。

## MCP

保留 `tools/list`、`tools/call`、tool `name`、`title`、`description`、`inputSchema`、`outputSchema`、`annotations`、`structuredContent`、`content`、`isError`、`_meta`、`resource_link` 与 embedded resources。在外围增加 Agent Tool ids 与 policy/evidence/runtime refs。

## OpenAPI

保留 `operationId`、method、path、server、security schemes、request schemas 与 response schemas。增加 agent-specific surfaces、invocation lifecycle 与 result mapping。

## Function calling APIs

保留 provider `tool_call_id`、function name、tool choice、strictness、deferred loading flags 与 parallel-call semantics。增加 portable invocation ids 与 policy/evidence refs。

## A2A

保留 Agent Card、AgentSkill id、task id、context id、message id 与 artifact id。Agent Tool 可以把 peer agent capability 描述为工具，但不替代 peer protocol。

## CLI 与 local tools

保留 command id、argv、working directory、environment policy、sandbox ref、timeout、signal、exit code、stdout/stderr refs 与 background task id。

## Telemetry

保留 trace id、span id、GenAI tool call attributes、native request ids、duration、decision source 与 result-size fields。除非明确启用并 redacted，不要在 telemetry 中存敏感 arguments 或 results。
