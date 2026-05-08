---
title: Hooks and input mutation
description: Agent Tool hooks and input mutation boundary.
---

# Hooks and Input Mutation

Hooks are lifecycle extension points around a tool call. They are powerful because they can add context, block execution, change permission behavior, or rewrite inputs. Agent Tool makes those effects explicit.

## Hook events

Initial hook event kinds:

- `pre_tool_use`
- `post_tool_use`
- `post_tool_use_failure`
- `permission_request`
- `permission_decision`
- `result_persistence`

## Hook outputs

A hook MAY emit:

| Output | Meaning |
| --- | --- |
| `message` | Additional user-visible or runtime-visible message. |
| `progress` | Ordered progress emitted before or after native execution. |
| `updated_input` | Replacement input for permission or execution. |
| `permission_result` | Allow, ask, deny, or passthrough hint for the permission resolver. |
| `additional_context` | Context to append to the conversation or invocation record. |
| `stop` | Stop continuation and produce a terminal tool result. |
| `updated_output` | Protocol-specific output update, typically for remote tools. |

## Mutation rule

Never mutate `model_input` in place. Hooks that need normalized paths, expanded URLs, parsed commands, or internal fields should operate on `observable_input` or produce a fresh `updated_input`.

Every input mutation SHOULD record:

- `mutation_id`
- `invocation_id`
- `source_type`: `hook`, `permission_prompt`, `adapter`, `migration`, or `runtime`
- `source_ref`
- `from_input_ref`
- `to_input_ref`
- `changed_fields`
- `reason`
- `created_at`

## Permission hook invariant

A hook `allow` should not automatically bypass higher-priority deny or ask rules. A compatible runtime SHOULD still resolve rule-based, policy-based, or human-interaction constraints after hook decisions unless a trusted policy explicitly says the hook is authoritative.
