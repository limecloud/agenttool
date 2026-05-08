---
title: What is Agent Tool?
description: Overview of Agent Tool and its boundaries.
---

# What is Agent Tool?

Agent Tool defines the portable tool surface for agent systems. It is the common record of what capability is being exposed, what inputs are allowed, how an invocation is authorized and executed, how progress is reported, what result came back, and which adjacent systems can audit or render the outcome.

A tool is not just a JSON function. In an agent product it may be a remote MCP tool, a local file operation, a browser action, a shell command, a native desktop command, a site adapter, a model-powered media task, or a delegated API action. These tools need a common vocabulary that survives provider changes and preserves native ids.

## Use Agent Tool when

- a model-facing tool must be listed, filtered, searched, or deferred.
- a tool needs input and output contracts that can be validated.
- a tool call requires approval, sandboxing, quota, tenant policy, or human confirmation.
- progress, cancellation, timeout, retry, and partial result semantics matter.
- outputs may include structured JSON, text, media, resource refs, artifact refs, or evidence refs.
- multiple protocols need to reference the same invocation without losing native ids.

## What it is not

Agent Tool is not a transport protocol, not an MCP replacement, not an OpenAPI replacement, not a model API, not a runtime executor, not a skill package format, not a policy engine, not a UI component system, not an evidence archive, and not an artifact storage system.

| Adjacent system | Owns | Agent Tool owns |
| --- | --- | --- |
| MCP / OpenAPI / provider API | Wire protocol and native operation model. | Mapping refs, declaration normalization, invocation envelope, and result mapping. |
| Agent Runtime | Scheduling, process execution, session state, task lifecycle, recovery. | Tool invocation facts and tool-specific status transitions. |
| Agent Policy | Allow, deny, ask, risk, retention, waiver, redaction decisions. | Permission profile refs and policy decision refs attached to tool calls. |
| Agent UI | Composer controls, tool cards, approval prompts, progress projection. | Machine-readable facts that UI can render. |
| Agent Evidence | Provenance, verification, replay, review, audit export. | Tool call refs and result facts that evidence can ingest. |
| Agent Artifact | Durable deliverables, versions, exports, handoff packages. | Result-to-artifact refs and tool-generated source links. |
| Agent Skills | Portable instruction bundles and procedural knowledge. | Runtime tool declarations exposed after a skill activates. |
