---
title: Invocation lifecycle
description: Agent Tool Invocation lifecycle。
---

# Invocation Lifecycle

`tool_invocation` 记录一次被请求或已执行的工具调用。

## 必要引用

- `invocation_id`
- `tool_id`
- 可用时的 `surface_id`
- `actor_ref`
- `runtime_refs`
- `arguments` 或 `arguments_ref`
- `status`
- `created_at`

## 推荐引用

- `native_call_id`
- `policy_refs`
- `evidence_refs`
- `telemetry_refs`
- `artifact_refs`
- `approval_request_ref`

即使结果被 redacted 或 payload 过期，invocation 仍应可见。
