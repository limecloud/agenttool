---
title: Specification
description: Latest Agent Tool draft specification.
---

# Specification

Agent Tool v0.2.0 is a portable standard for agent tool systems: declarations, scoped surfaces, input/output contracts, execution profiles, permission facts, permission decisions, lifecycle hooks, invocation records, scheduling semantics, progress, cancellation, result envelopes, result persistence, errors, resource refs, artifact refs, policy refs, evidence refs, and telemetry refs.

Agent Tool owns tool semantics. It does not own transport protocols, model APIs, runtime scheduling engines, policy decisions, UI rendering, evidence review, artifact storage, knowledge selection, or skill package authoring.

## Scope

Agent Tool standardizes these implementation concerns:

1. Tool declarations with stable identity, namespace, aliases, title, description, lifecycle, capabilities, schemas, annotations, search hints, safety hints, and external mappings.
2. Tool interfaces that separate model-facing schema, runtime schema, output schema, validation, permission matching, safety classification, path semantics, rendering hints, and result mapping.
3. Tool surfaces that define which tools are visible, blocked, deferred, loaded, feature-gated, role-scoped, or model-compatible in a turn, task, session, tenant, skill, peer-agent, or workspace context.
4. Input/output contracts using JSON Schema-compatible structures plus strictness, argument mode, media mode, sensitive fields, internal-only fields, and result-shape metadata.
5. Execution profiles for local, remote, browser, shell, MCP, API, native, model, peer-agent, and hybrid executors.
6. Permission profiles and permission decisions that expose risk facts, data access, write effects, network scope, credentials, sandbox state, approval requirements, rule sources, decision reasons, suggested updates, and classifier state.
7. Invocation envelopes with invocation ids, native call ids, actor refs, runtime refs, policy refs, evidence refs, telemetry refs, and status transitions.
8. Hooks and input mutation boundaries for pre-tool, post-tool, failure, additional-context, stop, and updated-input flows.
9. Progress, cancellation, timeout, retry, sibling failure, synthetic-result, partial-result, and yielded-result semantics.
10. Result envelopes for text, structured content, media, resources, artifacts, files, logs, diffs, handoff refs, persisted outputs, redaction state, and UI/search rendering boundaries.
11. Error taxonomy that separates protocol, validation, permission, approval, policy, setup, sandbox, execution, timeout, cancellation, rate-limit, dependency, result-size, and redaction failures.
12. Event classes for declaration, surface, invocation, hook, permission, scheduling, progress, result, persistence, error, and telemetry changes.

Agent Tool does **not** define a new RPC protocol, command-line interface, GUI component, workflow language, global task scheduler, authorization engine, tool marketplace, artifact store, or evidence archive.

## Core objects

| Object | Purpose |
| --- | --- |
| `tool_declaration` | Stable description of one callable capability. |
| `tool_interface` | Runtime contract for schemas, validation, permission hooks, safety hints, execution, result mapping, and display/search metadata. |
| `tool_surface` | Context-specific set of loaded, deferred, blocked, or discoverable tools exposed to an agent or model. |
| `tool_namespace` | Grouping and collision boundary for tools from one domain, server, skill, provider, or runtime. |
| `tool_input_contract` | Model-facing schema, runtime schema, validation, defaults, examples, sensitive fields, internal-only fields, and mutation policy. |
| `tool_output_contract` | Structured result schema, content types, media modes, result-size policy, rendering boundaries, and artifact/resource expectations. |
| `tool_execution_profile` | How the tool is executed and what lifecycle operations it supports. |
| `tool_permission_profile` | Risk, access, sandbox, approval, credential, redaction, and policy fact profile. |
| `tool_permission_decision` | Outcome of a permission check: allow, ask, deny, or passthrough with decision reason and optional updated input. |
| `tool_hook` | Pre-tool, post-tool, or failure extension point that can emit messages, progress, decisions, context, or updated input. |
| `tool_invocation` | One requested or executed tool call. |
| `tool_scheduler_policy` | Concurrency, ordering, interrupt, sibling failure, and yield policy for a set of invocations. |
| `deferred_tool_ref` | Discoverable tool identity whose full schema is not loaded yet. |
| `tool_progress` | Ordered progress update for an invocation. |
| `tool_result` | Structured result envelope for a completed, partial, rejected, or synthetic invocation. |
| `tool_result_persistence` | Decision to inline, redact, persist, preview, or link large or sensitive output. |
| `tool_error` | Structured failure reason and retry guidance. |
| `tool_event` | Lifecycle event envelope for declarations, surfaces, invocations, hooks, permissions, progress, results, and errors. |
| `tool_external_mapping` | Reference to native MCP, OpenAPI, provider, CLI, browser, A2A, or app operation ids. |

## Tool declaration

Every exported `tool_declaration` SHOULD include:

| Field | Requirement |
| --- | --- |
| `schema_version` | Required Agent Tool schema version. Use `0.2.0` for this draft. |
| `tool_id` | Required stable id scoped by producer. |
| `namespace` | Required collision boundary. |
| `name` | Required machine-oriented name. |
| `aliases` | Optional backwards-compatible names. |
| `search_hint` | Recommended 3-10 word capability phrase for discovery and deferred loading. |
| `title` | Recommended human-readable title. |
| `description` | Required model-facing usage guidance. |
| `lifecycle` | Required lifecycle state. |
| `tool_kind` | Required execution kind. |
| `capability_refs` | Recommended capability keys or external capability refs. |
| `input_contract` | Required for tools that accept structured arguments. |
| `output_contract` | Recommended for structured results. |
| `interface_ref` | Recommended when runtime behavior is described separately. |
| `execution_profile_ref` | Recommended. |
| `permission_profile_ref` | Recommended for non-trivial tools. |
| `external_mappings` | Recommended when backed by MCP, OpenAPI, provider tools, CLI, browser, A2A, or native app APIs. |
| `annotations` | Optional untrusted hints, display hints, and model hints. |

## Tool interface

A `tool_interface` SHOULD separate these concerns:

| Concern | Required distinction |
| --- | --- |
| Identity | `name`, `aliases`, `namespace`, `tool_id`, native ids, and stable display name. |
| Schemas | `model_input_schema`, `runtime_input_schema`, `output_schema`, `strict`, and schema visibility. |
| Availability | `is_enabled`, setup state, feature gates, required credentials, model support, and deferred state. |
| Validation | Schema parsing and tool-specific value validation before permission checks and execution. |
| Safety classification | `is_read_only`, `is_destructive`, `is_open_world`, `requires_user_interaction`, `sandbox_profile`, and `classifier_input`. |
| Permission matching | Rule matchers over tool name, path, command, URL, resource, or native operation ids. |
| Execution | The callable behavior, timeout, abort signal, progress callback, result mapper, and context modifier support. |
| Rendering | Model-facing result mapping, UI-facing result projection, progress projection, rejection/error projection, grouped rendering, and transcript search text. |
| Persistence | Tool-specific `max_inline_chars`, opt-out rules, durable refs, previews, and redaction behavior. |

Defaults SHOULD be fail-closed where safety is unclear. A tool should not be treated as concurrency-safe, read-only, non-destructive, or open-world-safe unless it says so.

## Tool kinds

Initial `tool_kind` values:

- `function`
- `mcp_tool`
- `openapi_operation`
- `native_tool`
- `browser_action`
- `shell_command`
- `code_execution`
- `file_operation`
- `web_search`
- `retrieval`
- `model_task`
- `skill_tool`
- `peer_agent_tool`
- `policy_check`
- `artifact_operation`
- `evidence_export`
- `custom`

`custom` SHOULD be a compatibility fallback, not the default for domain tools.

## Lifecycle

Tool declarations SHOULD use these lifecycle states:

| State | Meaning |
| --- | --- |
| `draft` | Declaration is being designed. |
| `available` | Tool can be selected and invoked. |
| `disabled` | Tool exists but is not selectable in the current context. |
| `requires_setup` | Tool requires credentials, project binding, server startup, or other setup. |
| `deferred` | Tool is discoverable by name or search, but its full schema is not loaded into the active model context. |
| `deprecated` | Tool remains for compatibility but should not be newly selected. |
| `retired` | Tool identity is kept only for historical refs. |

## Tool surface

A `tool_surface` captures which tools are available in a context. It SHOULD include `surface_id`, `scope`, `created_at`, `producer`, `tool_refs`, `loaded_tools`, `deferred_tools`, `blocked_tools`, `excluded_tools`, `selection_policy`, `default_tool_choice`, `capability_requirements`, `model_capabilities`, `role_constraints`, `policy_refs`, `runtime_refs`, and `surface_reason`.

Tool surfaces SHOULD be small enough for the current task. If a catalog is large, implementations should expose discovery or tool search instead of loading every tool schema into a model prompt.

Blocked or excluded tools SHOULD carry machine-readable reasons such as `policy_blocked`, `credential_missing`, `setup_required`, `model_unsupported`, `recursive_tool_forbidden`, `role_not_allowed`, `feature_disabled`, or `deferred_until_discovered`.

## Input contract and mutation boundary

A tool call SHOULD distinguish four inputs:

| Input | Meaning |
| --- | --- |
| `model_input` | Arguments emitted by the model or caller. Preserve for audit and native call correlation. |
| `observable_input` | Derived or normalized copy visible to hooks, permission UI, SDK streams, and transcripts. |
| `permission_input` | Input evaluated by policy, approval, rules, classifiers, and permission prompts. |
| `call_input` | Final input passed to the executor after allowed hook or permission updates. |

Internal-only fields MUST NOT appear in model-facing schemas. If a hook or permission prompt injects internal fields, the result MUST record the mutation source and must not silently rewrite the original model input.

## Invocation lifecycle

A `tool_invocation` SHOULD progress through explicit states:

- `planned`
- `selected`
- `schema_parse_failed`
- `arguments_ready`
- `validation_failed`
- `pre_hooks_running`
- `awaiting_approval`
- `approved`
- `denied`
- `queued`
- `running`
- `needs_input`
- `partial_result`
- `post_hooks_running`
- `yielded`
- `succeeded`
- `failed`
- `canceled`
- `timed_out`
- `blocked`

An implementation MAY skip states that do not apply, but it SHOULD preserve `invocation_id`, native call id, started/ended timestamps, actor refs, runtime refs, policy refs, evidence refs, telemetry refs, and status transitions.

## Execution pipeline

A compatible runtime SHOULD execute tool calls through these phases:

1. Resolve the tool from the current surface by primary name or alias.
2. Parse `model_input` against the model-facing schema.
3. Produce a schema-not-sent or needs-discovery error if the tool was deferred and the schema was not loaded.
4. Run tool-specific value validation and IO preflight checks before side effects.
5. Create `observable_input` without mutating `model_input`.
6. Run pre-tool hooks; collect progress, additional context, updated input, stop requests, or permission results.
7. Resolve permission decisions; deny or rejection outcomes become normal terminal tool results.
8. Queue or start execution according to scheduler policy.
9. Execute with timeout, abort signal, progress callback, sandbox, credentials, and native protocol refs.
10. Map executor output into a model-facing result block exactly once unless post hooks own a protocol-specific output update.
11. Run post-tool or failure hooks.
12. Apply result persistence, redaction, artifact/resource linking, telemetry, and evidence refs.
13. Emit the terminal result and any context modifiers allowed by the scheduler.

## Permission decisions

A `tool_permission_decision` records a decision, not only a profile. Initial behaviors are:

- `allow`
- `ask`
- `deny`
- `passthrough`

Decisions SHOULD include `decision_id`, `invocation_id`, `behavior`, `mode`, `source`, `reason`, `rule_refs`, `policy_refs`, `updated_input`, `user_modified`, `suggested_updates`, `pending_classifier_check`, `blocked_path`, `content_blocks`, `accept_feedback`, `decided_at`, and `expires_at` when relevant.

The permission profile is not the decision. Agent Policy owns policy evaluation. Agent Tool records the tool facts and the concrete decision facts attached to a tool invocation.

## Scheduling and concurrency

A `tool_scheduler_policy` SHOULD state:

- whether the tool is `concurrency_safe` for this specific input.
- whether read-only, write, destructive, or open-world tools can run in parallel.
- how results preserve order while progress streams early.
- interrupt behavior: `cancel` or `block`.
- sibling failure policy: `ignore`, `cancel_siblings`, or `cancel_dependent`.
- whether context modifiers are allowed for concurrent tools.
- how synthetic results are created for user interruption, sibling error, fallback, timeout, or discarded execution.

Concurrency-safe is not the same as read-only. A read tool can be unsafe if it mutates context, consumes a scarce handle, or depends on exclusive process state. A write tool can be safe only if the implementation proves isolation.

## Deferred loading and tool search

Large catalogs SHOULD support deferred loading. A deferred tool is visible enough to be discovered, but its full schema is not necessarily in the active model context.

A `deferred_tool_ref` SHOULD include `tool_id`, `name`, `namespace`, `search_hint`, `source`, `schema_visibility`, `loading_state`, `reason`, `pending_provider_or_server`, and `selection_ref`.

Tool search SHOULD support at least:

- exact selection by tool name.
- keyword search over name, namespace, description, and search hints.
- pending provider/server reporting.
- no-match results that are still machine-readable.
- schema-not-sent errors that tell the caller to discover the tool first.

## Progress and cancellation

Tools that take noticeable time SHOULD emit progress updates. A `tool_progress` record SHOULD include `progress_id`, `invocation_id`, `sequence`, `status`, `message`, `percent`, `current_step`, `total_steps`, `elapsed_ms`, `bytes_read`, `bytes_written`, `line_count`, `partial_result_refs`, `artifact_refs`, and `timestamp` when known.

Cancellation SHOULD be explicit. If cancellation is unsupported, the execution profile must say so. A cancellation request should still create an event so UI, runtime, evidence, and policy systems can explain what happened.

## Result envelope

A `tool_result` SHOULD include:

- `result_id`
- `invocation_id`
- `status`
- `is_error`
- `content`
- `structured_content`
- `model_facing_content`
- `ui_facing_summary`
- `resource_refs`
- `artifact_refs`
- `evidence_refs`
- `policy_refs`
- `telemetry_refs`
- `persistence_refs`
- `summary`
- `redaction_state`
- `created_at`

Result content may include text, structured JSON, images, audio, video, files, resource links, embedded resources, logs, diffs, persisted output refs, or artifact refs. Large or private payloads SHOULD be referenced, not embedded.

Denied permission, rejected approval, schema validation failure, missing tool, sibling cancellation, and streaming fallback SHOULD still produce terminal tool results so the conversation, evidence, and UI can explain what happened.

## Result persistence and rendering

A tool result may have multiple representations:

| Representation | Consumer |
| --- | --- |
| `model_facing_content` | Model or agent loop. May be compacted, previewed, or reference-based. |
| `ui_facing_rendering` | User interface projection, including progress, rejection, grouped results, and expanded views. |
| `transcript_search_text` | Text intentionally visible in transcript search. |
| `persisted_payload_ref` | Durable or session-scoped bytes for large outputs. |
| `artifact_refs` | Durable deliverables owned by Agent Artifact. |
| `resource_refs` | Fetchable resources owned by native protocols or resource systems. |

Implementations SHOULD avoid circular result loops. For example, a file-read result may opt out of persistence if persisting the result would create another file for the same read tool to read back indefinitely.

## Errors and retries

Tool errors SHOULD include stable `error_code`, `error_class`, `message`, `recoverability`, `retry_after`, `native_error_ref`, `policy_refs`, and `evidence_refs`.

Initial error classes:

- `unknown_tool`
- `invalid_arguments`
- `schema_validation_failed`
- `schema_not_loaded`
- `permission_denied`
- `approval_rejected`
- `policy_blocked`
- `hook_blocked`
- `capability_gap`
- `setup_required`
- `credential_missing`
- `sandbox_violation`
- `timeout`
- `rate_limited`
- `dependency_unavailable`
- `execution_failed`
- `partial_failure`
- `result_too_large`
- `result_redacted`
- `sibling_canceled`
- `streaming_fallback_discarded`
- `canceled`

## External mappings

Agent Tool SHOULD preserve native protocol ids instead of replacing them. Examples:

| Native source | Mapping fields |
| --- | --- |
| MCP | `server_id`, `mcp_session_id`, `mcp_protocol_version`, `method`, `tool_name`, `jsonrpc_request_id`, `structuredContent`, `isError`, `_meta`. |
| OpenAPI | `operation_id`, `method`, `path`, `server_url`, `security_scheme_refs`. |
| Function calling APIs | `tool_call_id`, `function_name`, `tool_choice`, `parallel_tool_calls`, `strict`, `defer_loading`. |
| A2A | `agent_card_url`, `agent_skill_id`, `task_id`, `context_id`, `message_id`, `artifact_id`. |
| CLI | `command_id`, `argv_ref`, `cwd_ref`, `env_policy_ref`, `exit_code`, `signal`, `sandbox_ref`. |
| Browser | `browser_session_id`, `page_id`, `action_id`, `observation_ref`, `screenshot_ref`. |
| Telemetry | `trace_id`, `span_id`, `tool_name`, `tool_call_id`, `request_id`, `duration_ms`, `result_size_bytes`. |

## Event classes

Compatible implementations SHOULD emit or export these event classes:

- `tool.declared`
- `tool.surface.created`
- `tool.surface.updated`
- `tool.deferred.discovered`
- `tool.deferred.loaded`
- `tool.invocation.planned`
- `tool.invocation.selected`
- `tool.invocation.arguments_ready`
- `tool.invocation.validation_failed`
- `tool.hook.pre.started`
- `tool.hook.pre.completed`
- `tool.permission.requested`
- `tool.permission.decided`
- `tool.invocation.queued`
- `tool.invocation.started`
- `tool.invocation.progress`
- `tool.invocation.partial_result`
- `tool.hook.post.started`
- `tool.hook.post.completed`
- `tool.result.persisted`
- `tool.invocation.yielded`
- `tool.invocation.succeeded`
- `tool.invocation.failed`
- `tool.invocation.canceled`
- `tool.invocation.timed_out`
- `tool.result.created`
- `tool.result.redacted`

## Fail-safe guidance

If a tool result is too large, private, expired, redacted, discarded, or canceled by a sibling failure, consumers should preserve the invocation envelope, status, error or redaction reason, resource/artifact refs, policy/evidence refs, and audit refs. Missing payload bytes should not erase the fact that the tool was selected and executed.

## Version compatibility

Version `0.2.0` is a draft. Implementations SHOULD include `schema_version: "0.2.0"` and tolerate unknown fields. Producers SHOULD preserve identity fields and add optional fields rather than changing tool identity, lifecycle semantics, native mappings, or result interpretation.
