---
title: Specification
description: Latest Agent Tool draft specification.
---

# Specification

Agent Tool latest draft is a portable standard for agent tool declarations, tool surfaces, input and output contracts, execution profiles, permission profiles, invocations, progress, cancellation, results, errors, resource refs, artifact refs, policy refs, evidence refs, and telemetry refs.

Agent Tool owns tool semantics. It does not own transport protocols, model APIs, runtime scheduling, policy decisions, UI rendering, evidence review, artifact storage, knowledge selection, or skill package authoring.

## Scope

Agent Tool standardizes these implementation concerns:

1. Tool declarations with stable identity, namespace, title, description, lifecycle, capabilities, schemas, annotations, and external mappings.
2. Tool surfaces that define which tools are visible in a turn, task, session, tenant, skill, or peer-agent context.
3. Input and output contracts using JSON Schema-compatible structures plus mode, media, and result-shape metadata.
4. Execution profiles for local, remote, browser, shell, MCP, API, native, model, and hybrid executors.
5. Permission profiles that describe risk, data access, write effects, network scope, credentials, sandbox, and approval requirements.
6. Invocation envelopes with invocation ids, call ids, actor refs, runtime refs, policy refs, evidence refs, telemetry refs, and native ids.
7. Progress, cancellation, timeout, retry, and partial-result semantics.
8. Result envelopes for text, structured content, media, resources, artifacts, files, logs, and handoff refs.
9. Error taxonomy that separates protocol, validation, permission, execution, timeout, rate-limit, dependency, and policy-block errors.
10. Event classes for tool lifecycle and invocation lifecycle changes.

Agent Tool does **not** define a new RPC protocol, command-line interface, GUI component, workflow language, task scheduler, authorization engine, or tool marketplace.

## Core objects

| Object | Purpose |
| --- | --- |
| `tool_declaration` | Stable description of one callable capability. |
| `tool_surface` | Context-specific set of tools exposed to an agent or model. |
| `tool_namespace` | Grouping and collision boundary for tools from one domain, server, skill, or provider. |
| `tool_input_contract` | Input schema, validation, defaults, examples, and sensitive fields. |
| `tool_output_contract` | Structured result schema, content types, media modes, and artifact/resource expectations. |
| `tool_execution_profile` | How the tool is executed and what lifecycle operations it supports. |
| `tool_permission_profile` | Risk, access, sandbox, approval, credential, and redaction requirements. |
| `tool_invocation` | One requested or executed tool call. |
| `tool_progress` | Ordered progress update for an invocation. |
| `tool_result` | Structured result envelope for a completed or partially completed invocation. |
| `tool_error` | Structured failure reason and retry guidance. |
| `tool_event` | Lifecycle event envelope for declarations, surfaces, invocations, progress, results, and errors. |
| `tool_external_mapping` | Reference to native MCP, OpenAPI, provider, CLI, browser, or app operation ids. |

## Tool declaration

Every exported `tool_declaration` SHOULD include:

| Field | Requirement |
| --- | --- |
| `schema_version` | Required Agent Tool schema version. |
| `tool_id` | Required stable id scoped by producer. |
| `namespace` | Required collision boundary. |
| `name` | Required machine-oriented name. |
| `title` | Recommended human-readable title. |
| `description` | Required model-facing usage guidance. |
| `lifecycle` | Required lifecycle state. |
| `tool_kind` | Required execution kind. |
| `capability_refs` | Recommended capability keys or external capability refs. |
| `input_contract` | Required for tools that accept structured arguments. |
| `output_contract` | Recommended for structured results. |
| `execution_profile_ref` | Recommended. |
| `permission_profile_ref` | Recommended for non-trivial tools. |
| `external_mappings` | Recommended when backed by MCP, OpenAPI, provider tools, CLI, browser, or native app APIs. |
| `annotations` | Optional untrusted hints, display hints, and model hints. |

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
| `deprecated` | Tool remains for compatibility but should not be newly selected. |
| `retired` | Tool identity is kept only for historical refs. |

## Tool surface

A `tool_surface` captures which tools are available in a context. It SHOULD include `surface_id`, `scope`, `created_at`, `producer`, `tool_refs`, `selection_policy`, `default_tool_choice`, `deferred_tools`, `blocked_tools`, `capability_requirements`, `policy_refs`, and `runtime_refs`.

Tool surfaces SHOULD be small enough for the current task. If a catalog is large, implementations should expose discovery or tool search instead of loading every tool into a model prompt.

## Invocation lifecycle

A `tool_invocation` SHOULD progress through explicit states:

- `planned`
- `selected`
- `arguments_ready`
- `awaiting_approval`
- `approved`
- `running`
- `needs_input`
- `partial_result`
- `succeeded`
- `failed`
- `canceled`
- `timed_out`
- `blocked`

An implementation MAY skip states that do not apply, but it SHOULD preserve `invocation_id`, native call id, started/ended timestamps, actor refs, runtime refs, and status transitions.

## Progress and cancellation

Tools that take noticeable time SHOULD emit progress updates. A `tool_progress` record SHOULD include `progress_id`, `invocation_id`, `sequence`, `status`, `message`, `percent`, `current_step`, `total_steps`, `partial_result_refs`, `artifact_refs`, and `timestamp`.

Cancellation SHOULD be explicit. If cancellation is unsupported, the execution profile must say so. A cancellation request should still create an event so UI, runtime, evidence, and policy systems can explain what happened.

## Result envelope

A `tool_result` SHOULD include:

- `result_id`
- `invocation_id`
- `status`
- `content`
- `structured_content`
- `resource_refs`
- `artifact_refs`
- `evidence_refs`
- `policy_refs`
- `telemetry_refs`
- `summary`
- `redaction_state`
- `created_at`

Result content may include text, structured JSON, images, audio, video, files, resource links, embedded resources, logs, diffs, or artifact refs. Large or private payloads SHOULD be referenced, not embedded.

## Permission profile

A `tool_permission_profile` describes the risk and access requirements of a tool. It SHOULD include `risk_level`, `access_kinds`, `write_effects`, `network_scope`, `credential_refs`, `sandbox_profile`, `approval_required`, `approval_reason`, `data_sensitivity`, `retention_hint`, `redaction_required`, and `policy_refs`.

The permission profile is not the decision. Agent Policy owns the decision. Agent Tool only provides the facts a policy engine or human reviewer needs.

## Errors and retries

Tool errors SHOULD include stable `error_code`, `error_class`, `message`, `recoverability`, `retry_after`, `native_error_ref`, `policy_refs`, and `evidence_refs`.

Initial error classes:

- `unknown_tool`
- `invalid_arguments`
- `schema_validation_failed`
- `permission_denied`
- `approval_rejected`
- `policy_blocked`
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
- `canceled`

## External mappings

Agent Tool SHOULD preserve native protocol ids instead of replacing them. Examples:

| Native source | Mapping fields |
| --- | --- |
| MCP | `server_id`, `mcp_session_id`, `mcp_protocol_version`, `method`, `tool_name`, `jsonrpc_request_id`. |
| OpenAPI | `operation_id`, `method`, `path`, `server_url`, `security_scheme_refs`. |
| OpenAI-style function calling | `tool_call_id`, `function_name`, `tool_choice`, `parallel_tool_calls`, `strict`. |
| A2A | `agent_card_url`, `agent_skill_id`, `task_id`, `context_id`, `artifact_id`. |
| CLI | `command_id`, `argv_ref`, `cwd_ref`, `env_policy_ref`, `exit_code`. |
| Browser | `browser_session_id`, `page_id`, `action_id`, `observation_ref`. |

## Event classes

Compatible implementations SHOULD emit or export these event classes:

- `tool.declared`
- `tool.surface.created`
- `tool.surface.updated`
- `tool.invocation.planned`
- `tool.invocation.selected`
- `tool.invocation.arguments_ready`
- `tool.invocation.approval_requested`
- `tool.invocation.approved`
- `tool.invocation.started`
- `tool.invocation.progress`
- `tool.invocation.partial_result`
- `tool.invocation.succeeded`
- `tool.invocation.failed`
- `tool.invocation.canceled`
- `tool.invocation.timed_out`
- `tool.result.created`
- `tool.result.redacted`

## Fail-safe guidance

If a tool result is too large, private, expired, or redacted, consumers should preserve the invocation envelope, status, error or redaction reason, resource/artifact refs, and audit refs. Missing payload bytes should not erase the fact that the tool was selected and executed.

## Version compatibility

Version `0.1.0` is a draft. Implementations SHOULD include `schema_version: "0.1.0"` and tolerate unknown fields. Producers SHOULD preserve identity fields and add optional fields rather than changing tool identity or lifecycle semantics.
