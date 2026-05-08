---
title: Tool interface
description: Runtime interface contract for Agent Tool.
---

# Tool Interface

A `tool_interface` describes how a declared tool behaves at runtime. It is deeper than a function signature: it tells an agent runtime how to validate, authorize, execute, stream, render, persist, and audit a tool call.

## Required partitions

| Partition | Fields |
| --- | --- |
| Identity | `tool_id`, `name`, `aliases`, `namespace`, `native_ids`, `user_facing_name`. |
| Discovery | `search_hint`, `description`, `capability_refs`, `schema_visibility`, `should_defer`, `always_load`. |
| Schemas | `model_input_schema`, `runtime_input_schema`, `output_schema`, `strict`. |
| Availability | `is_enabled`, `requires_setup`, `required_credentials`, `model_requirements`, `feature_gate_refs`. |
| Validation | `schema_validation`, `value_validation`, `io_preflight_validation`, `deny_before_io`. |
| Safety | `is_read_only`, `is_destructive`, `is_open_world`, `requires_user_interaction`, `sandbox_profile`, `classifier_input`. |
| Permission | `permission_profile_ref`, `permission_matcher`, `permission_channel`, `decision_ref`. |
| Execution | `execution_profile_ref`, `timeout_ms`, `abort_semantics`, `progress_schema`, `context_modifier_policy`. |
| Result | `result_mapper`, `max_inline_chars`, `persistence_policy_ref`, `empty_result_policy`, `redaction_policy_refs`. |
| Rendering | `ui_summary`, `activity_description`, `progress_render_hint`, `rejected_render_hint`, `error_render_hint`, `transcript_search_text`. |

## Fail-closed defaults

If an implementation supplies defaults, they SHOULD be conservative:

| Missing field | Safe default |
| --- | --- |
| `is_concurrency_safe` | `false` |
| `is_read_only` | `false` |
| `is_destructive` | `false` unless explicitly detected |
| `is_open_world` | `true` for network/browser/shell unless scoped otherwise |
| `requires_user_interaction` | `false` |
| `strict` | `true` for structured model-facing tools when provider supports it |
| `interrupt_behavior` | `block` |
| `classifier_input` | empty string; security-relevant tools must override |

A runtime MAY choose permissive defaults for internal trusted tools, but exported Agent Tool records should still say which facts were inferred.

## Model schema vs runtime schema

Model-facing schemas SHOULD include only fields the model may produce. Runtime schemas MAY include internal fields inserted by hooks, permission prompts, migration layers, or adapters. Internal-only fields MUST be marked with `visibility: "internal"` and a `mutation_source` when used.

## Rendering boundary

A tool interface may provide UI hints, but Agent Tool does not define the UI component. Keep these separate:

- model-facing result serialization.
- UI-facing progress or result projection.
- transcript/search text.
- persisted payload preview.
- artifact or resource refs.

This separation prevents a large result wrapper, UI-only label, or collapsed view from becoming the canonical tool output.
