---
title: Progress 与 cancellation
description: Agent Tool Progress 与 cancellation。
---

# Progress 与 Cancellation

长时间运行的工具需要可重放的有序进度，不能只依赖 UI 本地状态。

Progress record SHOULD 包含 sequence、status、message、percent、current step、total steps、partial result refs、artifact refs 与 timestamp。

Cancellation 有三个独立事实：

1. `cancel_requested`：调用方请求取消。
2. `cancel_acknowledged`：executor 确认收到取消请求。
3. `canceled` 或 `cancel_failed`：执行进入终态。

不要因为 UI 有一个取消按钮就暗示工具支持取消。Execution profile 必须明确声明。
