---
title: Progress and cancellation
description: Agent Tool progress and cancellation.
---

# Progress and Cancellation

Long-running tools need ordered progress that can survive UI reconnects.

A progress record SHOULD include sequence, status, message, percent, current step, total steps, partial result refs, artifact refs, and timestamp.

Cancellation has three separate facts:

1. `cancel_requested` - a caller asked to cancel.
2. `cancel_acknowledged` - the executor acknowledged the request.
3. `canceled` or `cancel_failed` - the execution reached a terminal outcome.

Do not imply cancellation support from a button in UI. The execution profile must declare it.

