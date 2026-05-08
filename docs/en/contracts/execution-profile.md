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
- resume
- retries
- partial results
- artifacts
- sandboxing
- credential delegation
- offline execution

If a capability is unsupported, say so explicitly. Silent fallback creates unsafe agent behavior.

