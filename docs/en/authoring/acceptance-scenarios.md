---
title: Acceptance scenarios
description: Compatibility checks for Agent Tool.
---

# Acceptance Scenarios

A compatible implementation should pass these scenarios:

1. A tool declaration can be discovered without loading every tool into the model context.
2. Input arguments can be validated before execution.
3. Sensitive arguments are redacted from telemetry unless explicitly allowed.
4. A risky tool call can pause for approval and then resume with the same invocation id.
5. A long-running call emits ordered progress and can report cancellation support accurately.
6. A large result returns refs rather than embedding the full payload.
7. A tool result can create or link to an Agent Artifact.
8. Evidence can reconstruct which tool ran, with what native id, and why the result is trusted or not.
9. Policy can explain why a tool was allowed, denied, deferred, or waived.
10. MCP, OpenAPI, provider function calling, and peer-agent tools preserve their native ids.
