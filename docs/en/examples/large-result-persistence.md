---
title: Large result persistence
description: Agent Tool large result persistence example.
---

# Large Result Persistence

Large outputs should not flood prompts. Persist the full payload, send a preview to the model, and keep refs for audit.

```json
{
  "schema_version": "0.2.0",
  "decision_id": "persist_grep_01",
  "invocation_id": "inv_grep_big",
  "result_id": "result_grep_big",
  "strategy": "preview_and_persist",
  "threshold": { "max_inline_chars": 50000 },
  "original_size_bytes": 481204,
  "preview_size_bytes": 2048,
  "persisted_ref": {
    "uri": "agent-runtime://session/tool-results/inv_grep_big.txt",
    "media_type": "text/plain",
    "digest": "sha256:example"
  },
  "reason": "result_exceeded_inline_limit",
  "created_at": "2026-05-08T00:00:00Z"
}
```

```json
{
  "schema_version": "0.2.0",
  "result_id": "result_grep_big",
  "invocation_id": "inv_grep_big",
  "status": "succeeded",
  "model_facing_content": [
    {
      "type": "text",
      "text": "Output too large. Full output saved to persisted_ref. Preview: ..."
    }
  ],
  "persistence_refs": ["persist_grep_01"],
  "created_at": "2026-05-08T00:00:01Z"
}
```
