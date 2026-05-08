---
title: Progress and cancellation
description: Agent Tool 进度与取消。
---

# Progress and Cancellation

长时间运行的工具需要有序 progress，并且能经受 UI reconnects 与 runtime replay。

Progress record SHOULD 包含 sequence、status、message、percent、current step、total steps、elapsed time、byte 或 line counters、partial result refs、artifact refs 与 timestamp。

## Progress classes

初始 `status` values：

- `queued`
- `started`
- `running`
- `waiting_for_permission`
- `waiting_for_input`
- `backgrounded`
- `partial_result`
- `completed`
- `failed`
- `canceled`

## Cancellation facts

Cancellation 有几个独立事实：

1. `cancel_requested` - caller 请求取消。
2. `cancel_acknowledged` - executor 确认收到取消。
3. `abort_reason` - user interruption、sibling error、timeout、fallback 或 runtime shutdown。
4. `canceled` 或 `cancel_failed` - execution 到达终态。

不要因为 UI 上有按钮就暗示支持取消。Execution profile 必须声明是否支持。
