---
title: Parallel read tools
description: Agent Tool 并行读取调度示例。
---

# Parallel Read Tools

读取工具通常可以一起运行，但 scheduler 仍需要 per-call facts 与有序 terminal results。

```json
{
  "schema_version": "0.2.0",
  "scheduler_policy_id": "sched_parallel_reads",
  "ordering_policy": "preserve_terminal_order",
  "yield_policy": "progress_immediate_results_ordered",
  "max_parallel": 10,
  "sibling_failure_policy": "ignore",
  "context_modifier_policy": "defer_until_batch_complete"
}
```

```json
[
  {
    "invocation_id": "inv_read_a",
    "tool_id": "tool_file_read",
    "status": "queued",
    "scheduler": {
      "is_concurrency_safe": true,
      "is_read_only": true,
      "interrupt_behavior": "cancel"
    }
  },
  {
    "invocation_id": "inv_read_b",
    "tool_id": "tool_file_read",
    "status": "queued",
    "scheduler": {
      "is_concurrency_safe": true,
      "is_read_only": true,
      "interrupt_behavior": "cancel"
    }
  }
]
```

Progress 可以立即为两个调用 stream。Terminal results 应按 invocation order yield，除非 surface 声明 unordered results。
