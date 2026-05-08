---
title: Source analysis
description: Analysis distilled from tool systems, coding agents, browser tools, and agent product patterns.
---

# Source Analysis

Agent Tool exists because agent systems need a tool layer that is more precise than a prompt-visible function list and more portable than one product runtime.

## What existing standards already solve

MCP defines a strong tool discovery and invocation protocol with content blocks and resource links. OpenAPI defines API operations and schemas. Function calling APIs define model-facing tool calls and tool outputs. A2A defines peer-agent skills, tasks, and artifacts. OpenTelemetry defines how tool calls can be traced. CloudEvents defines a portable event envelope. OAuth and security schemes define credential and scope patterns.

## What agent products add

Agent products combine all of these in one surface. A single task may expose local file tools, remote MCP tools, browser controls, shell commands, API adapters, tool search, media generation tasks, and peer-agent capabilities. Those tools need policy, approval, progress, cancellation, artifact refs, evidence refs, and telemetry refs. Native protocols do not all describe these agent-specific relationships in the same way.

## Design conclusions

1. Preserve native ids and protocols instead of replacing them.
2. Separate catalog, surface, declaration, invocation, execution, and result.
3. Keep permission facts separate from policy decisions.
4. Treat progress, cancellation, timeout, and partial result as first-class facts.
5. Prefer refs for large or sensitive results.
6. Link tool results to Agent Artifact and Agent Evidence rather than embedding all audit data in the tool result.
7. Keep tool search and deferred loading as normal surface mechanics for large catalogs.
8. Make errors structured enough for retry, recovery, UI, and evidence.
