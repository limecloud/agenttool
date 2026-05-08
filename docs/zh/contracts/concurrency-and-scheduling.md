---
title: Concurrency and scheduling
description: Agent Tool 并发与调度契约。
---

# Concurrency and Scheduling

Agent Tool 不拥有全局 runtime scheduler，但工具记录必须提供足够事实，让 scheduler 安全运行调用。

## Per-call classification

Concurrency safety 依赖输入。同一个 shell tool 执行只读命令可能安全，执行写命令就不安全。File read 通常安全，但如果会更新共享 context 或阻塞独占资源，也可能不安全。

每次 invocation 记录这些事实：

- `is_concurrency_safe`
- `is_read_only`
- `is_destructive`
- `is_open_world`
- `requires_exclusive_context`
- `context_modifier_policy`
- `resource_locks`

## Queue states

初始 scheduler states：

- `queued`
- `executing`
- `completed`
- `yielded`
- `discarded`

Progress 可以立即 yield。Terminal results SHOULD 保持模型可见顺序，除非 surface 明确允许 unordered results。

## Interrupt behavior

工具声明以下之一：

- `cancel`: 停止工具并发出 canceled 或 synthetic error result。
- `block`: 工具继续运行，并阻塞下一个 user turn 或 dependent tool。

如果缺失，使用 `block`。

## Sibling failure

多个工具一起运行时，一个失败可能会也可能不会取消 siblings。`sibling_failure_policy` values：

- `ignore`: sibling failures 不影响本 invocation。
- `cancel_siblings`: 一个失败会取消 batch 中其它 in-flight tools。
- `cancel_dependent`: 只取消依赖该失败 invocation 的调用。

被取消的 sibling SHOULD 收到带 `abort_reason` 的 synthetic result，而不是消失。
