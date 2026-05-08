---
title: Result persistence and rendering
description: Agent Tool result persistence and rendering boundaries.
---

# Result Persistence and Rendering

Tool output is consumed by models, users, transcripts, evidence systems, artifact stores, and telemetry. These consumers need different representations.

## Representations

| Representation | Requirement |
| --- | --- |
| `native_output` | Preserve native protocol output or reference it. |
| `model_facing_content` | What the model receives. May be compacted, redacted, previewed, or reference-based. |
| `structured_content` | Machine-readable result conforming to `output_schema` when available. |
| `ui_facing_rendering` | UI projection hints; not canonical output. |
| `transcript_search_text` | Text intentionally indexed for transcript search. |
| `persisted_payload_ref` | Durable or session-scoped bytes for large outputs. |
| `artifact_refs` | Durable deliverables owned by Agent Artifact. |
| `resource_refs` | Fetchable resources owned by native protocols or resource systems. |

## Persistence decision

A `tool_result_persistence` SHOULD include `decision_id`, `invocation_id`, `result_id`, `strategy`, `threshold`, `original_size_bytes`, `preview_size_bytes`, `persisted_ref`, `redaction_state`, `reason`, and `created_at`.

Initial strategies:

- `inline`
- `preview_and_persist`
- `ref_only`
- `redact`
- `drop_with_reason`
- `never_persist`

## Empty output

Tools can legitimately complete with no native output. A compatible runtime SHOULD emit an explicit empty-result marker or structured status so models and UIs do not confuse empty output with missing output.

## Circular result guard

Some tools should opt out of persistence. A read-file tool, for example, may self-bound by ranges or token limits. Persisting its output into another file can create a read-persist-read loop.
