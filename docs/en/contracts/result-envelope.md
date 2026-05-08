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
- `handoff_ref`

Large, sensitive, or mutable outputs should be represented by refs with digests, access hints, and redaction state.

## Result status

Use `succeeded`, `partial_succeeded`, `failed`, `redacted`, `too_large`, `canceled`, or `timed_out`.

