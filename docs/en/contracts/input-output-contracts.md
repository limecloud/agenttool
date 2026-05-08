---
title: Input and output contracts
description: Agent Tool input and output contracts.
---

# Input and Output Contracts

Input and output contracts are validation and interpretation hints. They do not replace the native protocol schema.

## Input contract

`tool_input_contract` SHOULD include:

- JSON Schema-compatible `schema`.
- `defaults` where safe.
- `examples` for model grounding.
- `sensitive_fields` for redaction and telemetry controls.
- `argument_mode`: `json`, `text`, `file`, `multipart`, `stream`, or `custom`.

## Output contract

`tool_output_contract` SHOULD include:

- `structured_schema` for structured content.
- `content_types` for text, image, audio, video, file, log, or resource refs.
- `artifact_expectations` when the tool should produce a durable deliverable.
- `max_inline_bytes` to prevent giant payloads entering prompts.
- `redaction_rules` and `fallback_summary` guidance.

If a native protocol already has schemas, Agent Tool should reference them and add agent-specific interpretation rather than copying everything.

