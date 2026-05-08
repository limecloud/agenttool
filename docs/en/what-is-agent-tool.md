---
title: What is Agent Tool?
description: Overview of Agent Tool and its boundaries.
---

# What is Agent Tool?

Agent Tool defines the portable tool layer for agent systems. It is the common record of what capability is exposed, which surface made it visible, what input the model proposed, how hooks and permission decisions changed it, how it was scheduled and executed, what progress streamed, what result came back, and which adjacent systems can audit, render, persist, or replay the outcome.

A tool is not just a JSON function. In an agent product it may be a remote MCP tool, a local file operation, a browser action, a shell command, a native desktop command, a site adapter, a model-powered media task, a tool-search entry, or a peer-agent capability. These tools need a common vocabulary that survives provider changes and preserves native ids.

## Use Agent Tool when

- a model-facing tool must be listed, filtered, searched, deferred, loaded, or blocked.
- a tool needs model-facing and runtime-facing input schemas that can differ safely.
- hooks or permission prompts may normalize paths, add context, update inputs, or stop execution.
- a tool call requires approval, sandboxing, quota, tenant policy, classifier checks, or human confirmation.
- concurrency, ordering, sibling failure, interruption, cancellation, timeout, retry, or partial result semantics matter.
- outputs may include structured JSON, text, media, resource refs, artifact refs, persisted payload refs, or evidence refs.
- multiple protocols need to reference the same invocation without losing native ids.

## What it is not

Agent Tool is not a transport protocol, not an MCP replacement, not an OpenAPI replacement, not a model API, not a runtime scheduler, not a skill package format, not a policy engine, not a UI component system, not an evidence archive, and not an artifact storage system.

| Adjacent system | Owns | Agent Tool owns |
| --- | --- | --- |
| MCP / OpenAPI / provider API | Wire protocol and native operation model. | Mapping refs, declaration normalization, invocation envelope, and result mapping. |
| Agent Runtime | Scheduling engine, process execution, session state, task lifecycle, recovery. | Tool-specific scheduling facts, invocation facts, progress, and status transitions. |
| Agent Policy | Allow, deny, ask, risk, retention, waiver, redaction decisions. | Permission profiles and per-invocation permission decision refs. |
| Agent UI | Composer controls, tool cards, approval prompts, progress projection. | Machine-readable facts that UI can render without owning the semantics. |
| Agent Evidence | Provenance, verification, replay, review, audit export. | Tool call refs and result facts that evidence can ingest. |
| Agent Artifact | Durable deliverables, versions, exports, handoff packages. | Result-to-artifact refs and tool-generated source links. |
| Agent Skills | Portable instruction bundles and procedural knowledge. | Runtime tool declarations exposed after a skill activates. |
| Agent Context | Context selection, assembly, injection, compaction, missing-context facts. | Tool inputs, outputs, and hook-added context refs attached to invocations. |
