---
title: Errors and retries
description: Agent Tool errors and retries.
---

# Errors and Retries

Tool errors should be machine-readable and user-explainable.

Separate these cases:

- the tool does not exist.
- arguments failed validation.
- policy blocked the call.
- a human rejected approval.
- setup or credentials are missing.
- execution failed inside the tool.
- a dependency or network failed.
- the result is too large or redacted.
- the call timed out or was canceled.

Retry guidance should include whether retry is safe, whether arguments must change, whether approval is needed again, and any `retry_after` hint.

