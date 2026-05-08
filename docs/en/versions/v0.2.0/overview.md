---
title: v0.2.0 overview
description: Agent Tool v0.2.0 overview.
---

# v0.2.0 Overview

Agent Tool v0.2.0 is the first deep runtime-oriented draft. It keeps v0.1.x declaration, surface, invocation, progress, result, permission, and interoperability foundations, then adds the missing mechanics real agent tools need.

## Added in v0.2.0

- Tool interface contract for schemas, aliases, search hints, validation, safety classification, permission matching, execution, result mapping, rendering, and persistence.
- Separate `model_input`, `observable_input`, `permission_input`, and `call_input` records.
- Tool execution pipeline with schema parse, value validation, hooks, permission decisions, scheduler states, execution, result mapping, post hooks, persistence, and terminal events.
- Permission decision records with allow, ask, deny, passthrough, rule sources, modes, classifier state, suggested updates, and updated input.
- Hook and input mutation records.
- Concurrency and scheduling policy for parallel-safe tools, exclusive tools, interrupts, sibling failures, yielded results, and synthetic errors.
- Deferred loading and tool search records for large catalogs and MCP-backed tools.
- Result persistence and rendering boundaries.
- Expanded JSON Schemas and examples.
