---
title: Result envelope
description: Agent Tool result envelope.
---

# Result Envelope

A `tool_result` is the portable result of an invocation. It may contain inline content and refs.

## Content classes

- `text`
- `structured_content`
- `image`
- `audio`
- `video`
- `file`
- `resource_link`
- `embedded_resource`
- `log`
- `diff`
- `artifact_ref`
- `persisted_output_ref`
- `handoff_ref`

Large, sensitive, mutable, or replay-hostile outputs should be represented by refs with digests, access hints, and redaction state.

## Result status

Use `succeeded`, `partial_succeeded`, `failed`, `denied`, `rejected`, `redacted`, `too_large`, `canceled`, `timed_out`, `synthetic_error`, or `discarded`.

## Error results

Denied permissions, rejected approvals, missing tools, schema failures, sibling cancellations, and fallback discards should still produce result envelopes. The result should say `is_error: true`, include `error_class`, and preserve the original `invocation_id`.
