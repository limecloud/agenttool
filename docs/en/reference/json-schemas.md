---
title: JSON Schemas
description: Public JSON Schemas for Agent Tool.
---

# JSON Schemas

Agent Tool publishes draft JSON Schemas for interoperability testing. v0.2.0 expands beyond declaration/result basics into runtime interface, permission decision, hooks, scheduling, deferred loading, input mutation, and result persistence.

| Schema | Purpose |
| --- | --- |
| [agenttool-tool-declaration.schema.json](/schemas/agenttool-tool-declaration.schema.json) | Tool declaration. |
| [agenttool-tool-interface.schema.json](/schemas/agenttool-tool-interface.schema.json) | Runtime tool interface. |
| [agenttool-tool-surface.schema.json](/schemas/agenttool-tool-surface.schema.json) | Context-specific tool surface. |
| [agenttool-invocation.schema.json](/schemas/agenttool-invocation.schema.json) | Tool invocation envelope. |
| [agenttool-permission-profile.schema.json](/schemas/agenttool-permission-profile.schema.json) | Permission profile. |
| [agenttool-permission-decision.schema.json](/schemas/agenttool-permission-decision.schema.json) | Per-invocation permission decision. |
| [agenttool-input-mutation.schema.json](/schemas/agenttool-input-mutation.schema.json) | Input mutation record. |
| [agenttool-hook.schema.json](/schemas/agenttool-hook.schema.json) | Tool hook record. |
| [agenttool-scheduler-policy.schema.json](/schemas/agenttool-scheduler-policy.schema.json) | Concurrency and scheduling policy. |
| [agenttool-deferred-tool.schema.json](/schemas/agenttool-deferred-tool.schema.json) | Deferred tool reference. |
| [agenttool-result.schema.json](/schemas/agenttool-result.schema.json) | Tool result envelope. |
| [agenttool-result-persistence.schema.json](/schemas/agenttool-result-persistence.schema.json) | Result persistence decision. |
| [agenttool-progress.schema.json](/schemas/agenttool-progress.schema.json) | Progress event payload. |
| [agenttool-execution-profile.schema.json](/schemas/agenttool-execution-profile.schema.json) | Execution profile. |
| [agenttool-event.schema.json](/schemas/agenttool-event.schema.json) | Tool lifecycle event. |
