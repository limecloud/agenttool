---
title: Parallel read tools
description: Agent Tool parallel read scheduling example.
---

# Parallel Read Tools

Read tools can often run together, but the scheduler still needs per-call facts and ordered terminal results.

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

Progress may stream immediately for both calls. Terminal results should be yielded in invocation order unless the surface declares unordered results.
