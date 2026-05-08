---
title: Concurrency and scheduling
description: Agent Tool concurrency and scheduling contract.
---

# Concurrency and Scheduling

Agent Tool does not own the global runtime scheduler, but tool records must say enough for a scheduler to run calls safely.

## Per-call classification

Concurrency safety is input-dependent. A shell command that only reads files can be safe, while the same shell tool running a write command is not. A file read is usually safe, but may be unsafe if it updates shared context or blocks on exclusive resources.

Record these facts per invocation:

- `is_concurrency_safe`
- `is_read_only`
- `is_destructive`
- `is_open_world`
- `requires_exclusive_context`
- `context_modifier_policy`
- `resource_locks`

## Queue states

Initial scheduler states:

- `queued`
- `executing`
- `completed`
- `yielded`
- `discarded`

Progress may be yielded immediately. Terminal results SHOULD preserve model-visible ordering unless the surface explicitly allows unordered results.

## Interrupt behavior

A tool declares one of:

- `cancel`: stop the tool and emit a canceled or synthetic error result.
- `block`: keep the tool running and block the next user turn or dependent tool.

If omitted, use `block`.

## Sibling failure

When multiple tools run together, one failure may or may not cancel siblings. `sibling_failure_policy` values:

- `ignore`: sibling failures do not affect this invocation.
- `cancel_siblings`: a failure cancels other in-flight tools in the batch.
- `cancel_dependent`: only calls that depend on the failed invocation are canceled.

A canceled sibling SHOULD receive a synthetic result with `abort_reason`, not disappear.
