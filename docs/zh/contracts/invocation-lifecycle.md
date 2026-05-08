---
title: Invocation lifecycle
description: Agent Tool 调用生命周期。
---

# Invocation Lifecycle

`tool_invocation` 记录一次被请求或已执行的调用。

## Required refs

- `schema_version`
- `invocation_id`
- `tool_id`
- `status`
- `created_at`

## Recommended refs

- `surface_id`
- `native_call_id`
- `model_input_ref` 或 `model_input`
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

即使 result 被 redacted、payload 过期、调用在执行前被 deny，或工具因 sibling failure 被取消，invocation 也应该保持可见。

## Status transitions

Runtime SHOULD 保留带 timestamps 的 status transitions。常用状态包括 `planned`、`selected`、`arguments_ready`、`pre_hooks_running`、`awaiting_approval`、`approved`、`denied`、`queued`、`running`、`partial_result`、`post_hooks_running`、`yielded`、`succeeded`、`failed`、`canceled`、`timed_out` 与 `blocked`。
