---
title: Errors and retries
description: Agent Tool errors and retries.
---

# Errors and Retries

Tool errors should be machine-readable and user-explainable.

Separate these cases:

- the tool does not exist.
- the tool exists but is not surfaced.
- the tool is deferred and its schema was not loaded.
- arguments failed schema validation.
- values failed tool-specific validation.
- a hook blocked or failed.
- policy blocked the call.
- a human rejected approval.
- setup or credentials are missing.
- a sandbox was violated.
- execution failed inside the tool.
- a dependency or network failed.
- a sibling failure canceled this call.
- the result is too large, redacted, or not persistable.
- the call timed out or was canceled.

Retry guidance should include whether retry is safe, whether arguments must change, whether discovery must happen first, whether approval is needed again, whether a sibling failure caused the error, and any `retry_after` hint.
