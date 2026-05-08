---
title: Result envelope
description: Agent Tool 结果 envelope。
---

# Result Envelope

`tool_result` 是 invocation 的可移植结果。它可以包含 inline content 与 refs。

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

大输出、敏感输出、可变输出或不适合 replay 的输出，应该用带 digest、access hints 与 redaction state 的 refs 表示。

## Result status

使用 `succeeded`、`partial_succeeded`、`failed`、`denied`、`rejected`、`redacted`、`too_large`、`canceled`、`timed_out`、`synthetic_error` 或 `discarded`。

## Error results

Denied permissions、rejected approvals、missing tools、schema failures、sibling cancellations 与 fallback discards 仍应产出 result envelopes。结果应包含 `is_error: true`、`error_class`，并保留原始 `invocation_id`。
