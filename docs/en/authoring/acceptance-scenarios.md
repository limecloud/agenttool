---
title: Acceptance scenarios
description: Compatibility checks for Agent Tool.
---

# Acceptance Scenarios

A compatible implementation should pass these scenarios:

1. A tool declaration can be discovered without loading every tool into the model context.
2. A deferred tool can be found by exact name and keyword search, then loaded before invocation.
3. Input arguments can be schema-validated before execution.
4. Tool-specific validation can reject unsafe values before filesystem or network IO.
5. Sensitive arguments are redacted from telemetry unless explicitly allowed.
6. `model_input`, `observable_input`, `permission_input`, and `call_input` remain distinguishable after hooks and permission prompts.
7. A risky tool call can pause for approval and then resume with the same invocation id.
8. A denied or rejected call produces a terminal error result instead of disappearing.
9. A long-running call emits ordered progress and can report cancellation support accurately.
10. Parallel read tools can run together while exclusive write tools preserve order.
11. A sibling failure can cancel dependent tools with synthetic result records.
12. A large result returns refs or previews rather than embedding the full payload.
13. Empty successful output is distinguishable from missing output.
14. A tool result can create or link to an Agent Artifact.
15. Evidence can reconstruct which tool ran, with what native id, and why the result is trusted or not.
16. Policy can explain why a tool was allowed, denied, deferred, or waived.
17. MCP, OpenAPI, provider function calling, CLI, browser, and peer-agent tools preserve their native ids.
