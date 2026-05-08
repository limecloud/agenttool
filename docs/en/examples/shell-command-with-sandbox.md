---
title: Shell command with sandbox
description: Agent Tool shell command example with sandbox, classifier, and progress semantics.
---

# Shell Command with Sandbox

Shell tools need more than a command string. They need command classification, sandbox facts, permission matching, progress, timeouts, and large-output policy.

```json
{
  "schema_version": "0.2.0",
  "tool_id": "tool_shell_exec",
  "namespace": "local.shell",
  "name": "shell.exec",
  "search_hint": "run local shell commands",
  "tool_kind": "shell_command",
  "input_contract": {
    "strict": true,
    "model_input_schema": {
      "type": "object",
      "properties": {
        "command": { "type": "string" },
        "timeout_ms": { "type": "integer", "minimum": 1000 },
        "run_in_background": { "type": "boolean" },
        "description": { "type": "string" }
      },
      "required": ["command"],
      "additionalProperties": false
    },
    "runtime_input_schema": {
      "type": "object",
      "properties": {
        "sandbox_override_ref": { "type": "string" },
        "simulated_edit_ref": { "type": "string" }
      }
    },
    "internal_only_fields": ["sandbox_override_ref", "simulated_edit_ref"]
  },
  "tool_interface": {
    "is_read_only": "classifier:command_read_only",
    "is_concurrency_safe": "same_as:is_read_only",
    "is_destructive": "classifier:command_destructive",
    "is_open_world": true,
    "classifier_input": "input.command",
    "permission_matcher": "shell_pattern",
    "interrupt_behavior": "cancel",
    "max_inline_chars": 30000
  },
  "execution_profile": {
    "execution_kind": "shell",
    "supports_progress": true,
    "supports_cancel": true,
    "supports_background": true,
    "sandboxed": true
  },
  "permission_profile": {
    "risk_level": "high",
    "access_kinds": ["file_read", "file_write", "network", "code_execution"],
    "write_effects": ["local_persistent", "remote_mutation"],
    "approval_required": true,
    "sandbox_profile": "workspace_shell_sandbox"
  }
}
```

## Progress shape

Progress for shell tools SHOULD include elapsed time, stdout/stderr byte counts, line counts, timeout, background task id, and exit code when known.
