---
title: Interoperability
description: Agent Tool interoperability.
---

# Interoperability

Agent Tool is a normalization and linking layer. It should not swallow the native protocol.

## MCP

Preserve `tools/list`, `tools/call`, tool `name`, `inputSchema`, `outputSchema`, `structuredContent`, `content`, `isError`, and content block refs. Add Agent Tool ids and policy/evidence/runtime refs around them.

## OpenAPI

Preserve `operationId`, method, path, server, security schemes, request schemas, and response schemas. Add agent-specific surfaces, invocation lifecycle, and result mapping.

## Function calling APIs

Preserve provider `tool_call_id`, function name, tool choice, strictness, and parallel-call semantics. Add portable invocation ids and policy/evidence refs.

## A2A

Preserve Agent Card, AgentSkill id, task id, context id, message id, and artifact id. Agent Tool can describe a peer agent capability as a tool without replacing the peer protocol.

## Telemetry

Preserve trace id, span id, GenAI tool call attributes, and native request ids. Do not store sensitive arguments or results in telemetry unless explicitly enabled and redacted.

