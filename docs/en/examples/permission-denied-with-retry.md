---
title: Permission denied with retry
description: Agent Tool permission denial as a terminal result with retry guidance.
---

# Permission Denied with Retry

Permission denial should be represented as a normal tool result so the agent can explain, retry safely, or ask for updated scope.

```json
{
  "schema_version": "0.2.0",
  "decision_id": "perm_01HZ",
  "invocation_id": "inv_write_secret",
  "behavior": "deny",
  "mode": "default",
  "source": "project_settings",
  "reason": {
    "type": "rule",
    "rule_ref": "rule_deny_secrets_dir",
    "message": "Writes under .secrets are denied by project policy."
  },
  "blocked_path": "/workspace/.secrets/token.txt",
  "decided_at": "2026-05-08T00:00:00Z"
}
```

```json
{
  "schema_version": "0.2.0",
  "result_id": "result_write_secret",
  "invocation_id": "inv_write_secret",
  "status": "denied",
  "is_error": true,
  "error": {
    "error_class": "permission_denied",
    "recoverability": "change_arguments_or_policy",
    "retry_after": null
  },
  "policy_refs": ["policy:project-file-access"],
  "created_at": "2026-05-08T00:00:01Z"
}
```
