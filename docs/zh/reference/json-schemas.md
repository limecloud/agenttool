---
title: JSON Schemas
description: Agent Tool JSON Schemas。
---

# JSON Schemas

Agent Tool 发布草案 JSON Schemas 用于互操作测试。v0.2.0 不再只覆盖 declaration/result 基础对象，而是扩展到 runtime interface、permission decision、hooks、scheduling、deferred loading、input mutation 与 result persistence。

| Schema | 用途 |
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
