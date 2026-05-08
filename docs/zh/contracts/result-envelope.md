---
title: Result envelope
description: Agent Tool Result envelope。
---

# Result Envelope

`tool_result` 是 invocation 的可移植结果。它可以包含 inline content，也可以包含 refs。

## 内容类型

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

大体积、敏感或可变输出 SHOULD 使用带 digest、access hint 与 redaction state 的 refs。

## Result status

使用 `succeeded`、`partial_succeeded`、`failed`、`redacted`、`too_large`、`canceled` 或 `timed_out`。
