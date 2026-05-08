---
title: Errors 与 retries
description: Agent Tool Errors 与 retries。
---

# Errors 与 Retries

工具错误应该既机器可读，又能解释给用户。

至少要区分：

- 工具不存在。
- 参数校验失败。
- policy 阻断调用。
- 人类拒绝审批。
- setup 或 credential 缺失。
- 工具内部执行失败。
- 依赖或网络失败。
- 结果过大或被 redacted。
- 调用超时或被取消。

Retry guidance 应说明重试是否安全、是否必须修改参数、是否需要重新审批，以及是否有 `retry_after` hint。
