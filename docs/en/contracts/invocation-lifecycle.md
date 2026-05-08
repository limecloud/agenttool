---
title: Invocation lifecycle
description: Agent Tool invocation lifecycle.
---

# Invocation Lifecycle

A `tool_invocation` records one requested or executed call.

## Required refs

- `invocation_id`
- `tool_id`
- `surface_id` when available
- `actor_ref`
- `runtime_refs`
- `arguments` or `arguments_ref`
- `status`
- `created_at`

## Recommended refs

- `native_call_id`
- `policy_refs`
- `evidence_refs`
- `telemetry_refs`
- `artifact_refs`
- `approval_request_ref`

Invocations should remain visible even if the result is redacted or the payload expires.

