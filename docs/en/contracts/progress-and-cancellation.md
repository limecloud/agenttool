---
title: Progress and cancellation
description: Agent Tool progress and cancellation.
---

# Progress and Cancellation

Long-running tools need ordered progress that can survive UI reconnects and runtime replay.

A progress record SHOULD include sequence, status, message, percent, current step, total steps, elapsed time, byte or line counters, partial result refs, artifact refs, and timestamp.

## Progress classes

Initial `status` values:

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

Cancellation has separate facts:

1. `cancel_requested` - a caller asked to cancel.
2. `cancel_acknowledged` - the executor acknowledged the request.
3. `abort_reason` - user interruption, sibling error, timeout, fallback, or runtime shutdown.
4. `canceled` or `cancel_failed` - the execution reached a terminal outcome.

Do not imply cancellation support from a button in UI. The execution profile must declare it.
