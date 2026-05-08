---
title: 带 sandbox 的 shell command
description: 带 sandbox、classifier 与 progress 语义的 Agent Tool shell command 示例。
---

# 带 Sandbox 的 Shell Command

Shell 工具不只是 command string。它需要 command classification、sandbox facts、permission matching、progress、timeouts 与 large-output policy。

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

Shell tools 的 progress SHOULD 包含 elapsed time、stdout/stderr byte counts、line counts、timeout、background task id 与已知时的 exit code。
