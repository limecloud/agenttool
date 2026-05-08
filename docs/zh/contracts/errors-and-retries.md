---
title: Errors and retries
description: Agent Tool 错误与重试。
---

# Errors and Retries

Tool errors 应该机器可读且用户可解释。

区分这些情况：

- 工具不存在。
- 工具存在但不在当前 surface 中。
- 工具被 deferred，schema 尚未加载。
- arguments 未通过 schema validation。
- values 未通过工具特定 validation。
- hook 阻止或失败。
- policy 阻止调用。
- human 拒绝 approval。
- setup 或 credentials 缺失。
- sandbox 被违反。
- 工具内部执行失败。
- dependency 或 network 失败。
- sibling failure 取消了本调用。
- result 过大、被 redacted 或不可 persist。
- 调用 timed out 或 canceled。

Retry guidance 应说明 retry 是否安全、arguments 是否必须改变、是否需要先 discovery、是否需要重新 approval、是否由 sibling failure 导致，以及 `retry_after` hint。
