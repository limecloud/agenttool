---
title: Source analysis
description: Analysis distilled from tool systems, coding agents, browser tools, and agent product patterns.
---

# Source Analysis

Agent Tool exists because agent systems need a tool layer that is more precise than a prompt-visible function list and more portable than one product runtime.

## What existing standards already solve

MCP defines a strong tool discovery and invocation protocol with content blocks, structured content, resource links, annotations, and tool-result error flags. OpenAPI defines API operations and schemas. Function calling APIs define model-facing tool calls, strict schemas, tool choice, tool call ids, and parallel-call options. A2A defines peer-agent skills, tasks, messages, streaming updates, and artifacts. OpenTelemetry defines how tool calls can be traced. CloudEvents defines a portable event envelope. OAuth and security schemes define credential and scope patterns.

## What coding-agent runtimes add

Modern coding-agent runtimes expose a richer tool system than a simple function list. Analysis of CLI and agent-runtime tool implementations shows these recurring needs:

1. Tool identity includes primary names, aliases, search hints, human-facing names, native ids, and compatibility names.
2. A tool has multiple schemas: model-facing schema, runtime schema, output schema, and sometimes native protocol schema.
3. Safety is input-dependent: read-only, destructive, open-world, sandbox override, and concurrency safety may change per call.
4. Permission is a decision flow: modes, rule sources, ask/allow/deny, user feedback, classifier checks, and updated input all matter.
5. Hooks can add context, emit progress, stop continuation, return permission decisions, or rewrite inputs.
6. Tool input is not a single mutable object; model input, observable input, permission input, and call input need separate records.
7. Parallel execution needs explicit queued/executing/completed/yielded states, interrupt behavior, sibling failure rules, and synthetic results.
8. Large catalogs need deferred loading and tool search so models do not ingest every schema.
9. Tool results need model-facing serialization, UI-facing rendering, transcript search text, telemetry refs, and persisted payload refs.
10. Denials, validation failures, rejected approvals, sibling cancellations, and streaming fallback should be terminal tool results, not invisible exceptions.

## Design conclusions

1. Preserve native ids and protocols instead of replacing them.
2. Separate catalog, surface, declaration, interface, invocation, permission decision, scheduling, execution, persistence, and result.
3. Keep permission facts separate from policy decisions, but record concrete per-invocation decisions.
4. Treat hooks and input mutation as first-class lifecycle facts.
5. Treat progress, cancellation, timeout, sibling failure, and partial result as first-class facts.
6. Prefer refs for large or sensitive results, and keep rendering separate from model-facing result content.
7. Link tool results to Agent Artifact and Agent Evidence rather than embedding all audit data in the tool result.
8. Keep tool search and deferred loading as normal surface mechanics for large catalogs.
9. Make errors structured enough for retry, recovery, UI, and evidence.
10. Fail closed when concurrency, write effects, or open-world behavior are unknown.
