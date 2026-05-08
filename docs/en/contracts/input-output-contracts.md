---
title: Input and output contracts
description: Agent Tool input and output contracts.
---

# Input and Output Contracts

Input and output contracts are validation and interpretation hints. They do not replace the native protocol schema.

## Input contract

`tool_input_contract` SHOULD include:

- JSON Schema-compatible `model_input_schema`.
- Optional `runtime_input_schema` for internal fields.
- `strict` when the provider/runtime can enforce schemas.
- `defaults` where safe.
- `examples` for model grounding.
- `sensitive_fields` for redaction and telemetry controls.
- `internal_only_fields` that must not be model-generated.
- `argument_mode`: `json`, `text`, `file`, `multipart`, `stream`, or `custom`.
- `mutation_policy`: whether hooks or permission prompts may replace input.

## Input variants

Keep these separate: `model_input`, `observable_input`, `permission_input`, and `call_input`. This prevents path normalization, permission UI edits, or internal fields from corrupting the original model-provided arguments.

## Output contract

`tool_output_contract` SHOULD include:

- `structured_schema` for structured content.
- `content_types` for text, image, audio, video, file, log, or resource refs.
- `artifact_expectations` when the tool should produce a durable deliverable.
- `max_inline_bytes` or `max_inline_chars` to prevent giant payloads entering prompts.
- `persistence_policy_ref` for preview, persist, redaction, and never-persist rules.
- `rendering_boundary` to separate model content, UI rendering, and transcript search text.
- `redaction_rules` and `fallback_summary` guidance.

If a native protocol already has schemas, Agent Tool should reference them and add agent-specific interpretation rather than copying everything.
