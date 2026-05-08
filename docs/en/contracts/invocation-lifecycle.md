---
title: Invocation lifecycle
description: Agent Tool invocation lifecycle.
---

# Invocation Lifecycle

A `tool_invocation` records one requested or executed call.

## Required refs

- `schema_version`
- `invocation_id`
- `tool_id`
- `status`
- `created_at`

## Recommended refs

- `surface_id`
- `native_call_id`
- `model_input_ref` or `model_input`
- `observable_input_ref`
- `permission_input_ref`
- `call_input_ref`
- `actor_ref`
- `runtime_refs`
- `policy_refs`
- `permission_decision_refs`
- `hook_refs`
- `evidence_refs`
- `telemetry_refs`
- `artifact_refs`
- `approval_request_ref`
- `scheduler_policy_ref`

Invocations should remain visible even if the result is redacted, the payload expires, the call is denied before execution, or the tool is canceled by a sibling failure.

## Status transitions

A runtime SHOULD preserve status transitions with timestamps. Useful states include `planned`, `selected`, `arguments_ready`, `pre_hooks_running`, `awaiting_approval`, `approved`, `denied`, `queued`, `running`, `partial_result`, `post_hooks_running`, `yielded`, `succeeded`, `failed`, `canceled`, `timed_out`, and `blocked`.
