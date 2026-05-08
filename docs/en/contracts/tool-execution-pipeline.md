---
title: Tool execution pipeline
description: Agent Tool execution pipeline.
---

# Tool Execution Pipeline

A tool call should be explainable even when it fails before execution. Agent Tool therefore models the pipeline as a sequence of facts, not a single `call()` function.

## Phases

| Phase | Purpose | Terminal failures |
| --- | --- | --- |
| `resolve_tool` | Find a declaration by name or alias inside the current surface. | `unknown_tool`, `blocked_tool`, `schema_not_loaded`. |
| `parse_schema` | Validate `model_input` against the model-facing schema. | `schema_validation_failed`. |
| `validate_values` | Run tool-specific value and IO preflight checks. | `invalid_arguments`, `setup_required`, `sandbox_violation`. |
| `prepare_observable_input` | Build a normalized copy for hooks, permission UI, SDK streams, and transcripts. | `input_mutation_failed`. |
| `pre_hooks` | Let hooks add context, progress, updated input, stop requests, or permission results. | `hook_blocked`, `hook_failed`. |
| `permission` | Resolve allow/ask/deny/passthrough through policy, rules, classifiers, or human approval. | `permission_denied`, `approval_rejected`, `policy_blocked`. |
| `schedule` | Queue or run according to concurrency and ordering policy. | `canceled`, `sibling_canceled`. |
| `execute` | Call the native executor with timeout, abort signal, sandbox, credentials, and progress callback. | `execution_failed`, `timeout`, `dependency_unavailable`. |
| `map_result` | Convert native output into the model-facing result envelope. | `result_mapping_failed`. |
| `post_hooks` | Let hooks enrich context, emit audit messages, or update protocol-specific outputs. | `post_hook_failed`, `hook_blocked`. |
| `persist_result` | Inline, preview, persist, redact, or link result bytes. | `result_too_large`, `result_redacted`. |
| `emit_terminal` | Emit terminal result and events. | none; even errors should be represented. |

## Normal failures are results

Permission denial, user rejection, schema validation failure, missing tool, streaming fallback, and sibling cancellation SHOULD become terminal `tool_result` records with `is_error: true`. They should not disappear as exceptions that only the runtime can see.

## Result mapping once

Map a native result into a model-facing result exactly once before generic persistence. If a protocol-specific post hook owns output mutation, record that mutation and remap after the hook. Avoid repeatedly serializing the same output differently across retries or resume.

## Context modifiers

A tool MAY return a context modifier. The scheduler must say whether context modifiers are honored for concurrent tools. If a runtime cannot safely merge concurrent context changes, it SHOULD reject or defer those modifiers rather than apply them nondeterministically.
