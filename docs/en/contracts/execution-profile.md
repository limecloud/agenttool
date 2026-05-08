---
title: Execution profile
description: Agent Tool execution profile.
---

# Execution Profile

A `tool_execution_profile` describes how a tool is run.

## Execution kinds

Initial execution kinds:

- `mcp_server`
- `http_api`
- `native_app`
- `local_process`
- `shell`
- `browser`
- `model_service`
- `peer_agent`
- `embedded_runtime`
- `hybrid`

## Capabilities

Profiles SHOULD state support for:

- streaming progress
- cancellation
- timeout
- resume
- retries
- partial results
- background tasks
- result persistence
- artifacts
- sandboxing
- credential delegation
- offline execution
- context modifiers

If a capability is unsupported, say so explicitly. Silent fallback creates unsafe agent behavior.

## Shell and local process profiles

Shell-like tools SHOULD declare command parsing strategy, working directory policy, environment policy, sandbox profile, background execution support, timeout behavior, exit-code interpretation, and classifier input.

## Remote profiles

Remote tools SHOULD preserve native request ids, session ids, protocol versions, server names, retry semantics, and protocol-level error distinctions.
