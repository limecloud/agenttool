---
title: v0.2.0 规范
description: Agent Tool v0.2.0 规范快照。
---

# 规范

Agent Tool v0.2.0 是 Agent 工具系统的可移植标准：声明、上下文 tool surface、输入/输出契约、执行 profile、权限事实、权限决策、生命周期 hooks、调用记录、调度语义、进度、取消、结果 envelope、结果持久化、错误、resource refs、artifact refs、policy refs、evidence refs 与 telemetry refs。

Agent Tool 拥有工具语义。它不拥有传输协议、模型 API、runtime 调度引擎、policy decision、UI rendering、evidence review、artifact storage、knowledge selection 或 skill package authoring。

## 范围

Agent Tool 标准化以下实现问题：

1. 带稳定身份、namespace、aliases、title、description、lifecycle、capabilities、schemas、annotations、search hints、safety hints 与 external mappings 的工具声明。
2. 区分 model-facing schema、runtime schema、output schema、validation、permission matching、safety classification、path semantics、rendering hints 与 result mapping 的 tool interface。
3. 定义 turn、task、session、tenant、skill、peer-agent 或 workspace 中哪些工具可见、被阻塞、被延迟加载、已加载、受 feature gate 控制、受角色限制或受模型能力限制的 tool surface。
4. JSON Schema 兼容的 input/output contracts，并包含 strictness、argument mode、media mode、sensitive fields、internal-only fields 与 result-shape metadata。
5. local、remote、browser、shell、MCP、API、native、model、peer-agent 与 hybrid executors 的 execution profiles。
6. 暴露 risk facts、data access、write effects、network scope、credentials、sandbox state、approval requirements、rule sources、decision reasons、suggested updates 与 classifier state 的 permission profiles 与 permission decisions。
7. 带 invocation ids、native call ids、actor refs、runtime refs、policy refs、evidence refs、telemetry refs 与状态迁移的 invocation envelopes。
8. pre-tool、post-tool、failure、additional-context、stop 与 updated-input flows 的 hooks 和输入变更边界。
9. progress、cancellation、timeout、retry、sibling failure、synthetic-result、partial-result 与 yielded-result semantics。
10. text、structured content、media、resources、artifacts、files、logs、diffs、handoff refs、persisted outputs、redaction state 与 UI/search rendering boundaries 的 result envelopes。
11. 区分 protocol、validation、permission、approval、policy、setup、sandbox、execution、timeout、cancellation、rate-limit、dependency、result-size 与 redaction failures 的错误 taxonomy。
12. declaration、surface、invocation、hook、permission、scheduling、progress、result、persistence、error 与 telemetry changes 的 event classes。

Agent Tool **不**定义新的 RPC 协议、CLI、GUI 组件、workflow language、全局 task scheduler、authorization engine、tool marketplace、artifact store 或 evidence archive。

## 核心对象

| 对象 | 用途 |
| --- | --- |
| `tool_declaration` | 一个 callable capability 的稳定描述。 |
| `tool_interface` | schemas、validation、permission hooks、safety hints、execution、result mapping 与 display/search metadata 的 runtime 契约。 |
| `tool_surface` | 暴露给 agent 或 model 的上下文相关 loaded、deferred、blocked 或 discoverable 工具集合。 |
| `tool_namespace` | 来自 domain、server、skill、provider 或 runtime 的工具分组与冲突边界。 |
| `tool_input_contract` | model-facing schema、runtime schema、validation、defaults、examples、sensitive fields、internal-only fields 与 mutation policy。 |
| `tool_output_contract` | 结构化结果 schema、content types、media modes、result-size policy、rendering boundaries 与 artifact/resource expectations。 |
| `tool_execution_profile` | 工具如何执行，以及支持哪些 lifecycle operations。 |
| `tool_permission_profile` | risk、access、sandbox、approval、credential、redaction 与 policy fact profile。 |
| `tool_permission_decision` | permission check 的结果：allow、ask、deny 或 passthrough，并包含 decision reason 与可选 updated input。 |
| `tool_hook` | pre-tool、post-tool 或 failure 扩展点，可发出 messages、progress、decisions、context 或 updated input。 |
| `tool_invocation` | 一次被请求或已执行的 tool call。 |
| `tool_scheduler_policy` | 一组 invocation 的 concurrency、ordering、interrupt、sibling failure 与 yield policy。 |
| `deferred_tool_ref` | 完整 schema 尚未加载的可发现工具身份。 |
| `tool_progress` | invocation 的有序进度更新。 |
| `tool_result` | completed、partial、rejected 或 synthetic invocation 的结构化结果 envelope。 |
| `tool_result_persistence` | 对大输出或敏感输出执行 inline、redact、persist、preview 或 link 的决策。 |
| `tool_error` | 结构化失败原因与 retry guidance。 |
| `tool_event` | declaration、surface、invocation、hooks、permissions、progress、result 与 error 的 lifecycle event envelope。 |
| `tool_external_mapping` | 指向原生 MCP、OpenAPI、provider、CLI、browser、A2A 或 app operation ids 的引用。 |

## Tool declaration

每个导出的 `tool_declaration` SHOULD 包含：

| 字段 | 要求 |
| --- | --- |
| `schema_version` | 必填 Agent Tool schema version。本草案使用 `0.2.0`。 |
| `tool_id` | 必填稳定 id，作用域由 producer 决定。 |
| `namespace` | 必填冲突边界。 |
| `name` | 必填机器名。 |
| `aliases` | 可选的向后兼容名称。 |
| `search_hint` | 推荐 3-10 个词的能力短语，用于 discovery 和 deferred loading。 |
| `title` | 推荐的人类可读标题。 |
| `description` | 必填 model-facing 使用说明。 |
| `lifecycle` | 必填生命周期状态。 |
| `tool_kind` | 必填执行类型。 |
| `capability_refs` | 推荐的 capability keys 或 external capability refs。 |
| `input_contract` | 接收结构化参数的工具必填。 |
| `output_contract` | 结构化结果推荐填写。 |
| `interface_ref` | 当 runtime 行为单独描述时推荐填写。 |
| `execution_profile_ref` | 推荐。 |
| `permission_profile_ref` | 非平凡工具推荐填写。 |
| `external_mappings` | 当背后是 MCP、OpenAPI、provider tools、CLI、browser、A2A 或 native app APIs 时推荐填写。 |
| `annotations` | 可选的非可信 hints、display hints 与 model hints。 |

## Tool interface

`tool_interface` SHOULD 区分这些关注点：

| 关注点 | 必须区分 |
| --- | --- |
| Identity | `name`、`aliases`、`namespace`、`tool_id`、native ids 与稳定 display name。 |
| Schemas | `model_input_schema`、`runtime_input_schema`、`output_schema`、`strict` 与 schema visibility。 |
| Availability | `is_enabled`、setup state、feature gates、required credentials、model support 与 deferred state。 |
| Validation | side effect 之前的 schema parsing 与工具特定 value validation。 |
| Safety classification | `is_read_only`、`is_destructive`、`is_open_world`、`requires_user_interaction`、`sandbox_profile` 与 `classifier_input`。 |
| Permission matching | 基于 tool name、path、command、URL、resource 或 native operation ids 的 rule matchers。 |
| Execution | callable behavior、timeout、abort signal、progress callback、result mapper 与 context modifier support。 |
| Rendering | model-facing result mapping、UI-facing result projection、progress projection、rejection/error projection、grouped rendering 与 transcript search text。 |
| Persistence | 工具级 `max_inline_chars`、opt-out rules、durable refs、previews 与 redaction behavior。 |

在安全性不清楚时，默认 SHOULD fail-closed。工具不能因为没有声明就被视为 concurrency-safe、read-only、non-destructive 或 open-world-safe。

## Tool surface

`tool_surface` 捕获某个上下文中可用的工具。它 SHOULD 包含 `surface_id`、`scope`、`created_at`、`producer`、`tool_refs`、`loaded_tools`、`deferred_tools`、`blocked_tools`、`excluded_tools`、`selection_policy`、`default_tool_choice`、`capability_requirements`、`model_capabilities`、`role_constraints`、`policy_refs`、`runtime_refs` 与 `surface_reason`。

Tool surface SHOULD 小到适合当前任务。如果 catalog 很大，应暴露 discovery 或 tool search，而不是把所有工具 schema 都塞进模型上下文。

## Input contract 与 mutation boundary

一次工具调用 SHOULD 区分四种输入：

| 输入 | 含义 |
| --- | --- |
| `model_input` | 模型或调用方给出的原始参数。用于 audit 与 native call correlation。 |
| `observable_input` | 给 hooks、permission UI、SDK streams 与 transcripts 观察的派生或规范化副本。 |
| `permission_input` | 给 policy、approval、rules、classifiers 与 permission prompts 评估的输入。 |
| `call_input` | 经过允许的 hook 或 permission 更新后传给 executor 的最终输入。 |

Internal-only fields MUST NOT 出现在 model-facing schemas 中。如果 hook 或 permission prompt 注入 internal fields，结果 MUST 记录 mutation source，并且不得悄悄改写原始 model input。

## Invocation lifecycle

`tool_invocation` SHOULD 经过显式状态：

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

实现可以跳过不适用的状态，但 SHOULD 保留 `invocation_id`、native call id、started/ended timestamps、actor refs、runtime refs、policy refs、evidence refs、telemetry refs 与 status transitions。

## Execution pipeline

兼容 runtime SHOULD 按以下阶段执行工具调用：

1. 在当前 surface 中按 primary name 或 alias 解析工具。
2. 使用 model-facing schema 解析 `model_input`。
3. 如果工具被 deferred 且 schema 尚未加载，产出 schema-not-sent 或 needs-discovery 错误。
4. 在 side effect 之前运行工具特定 value validation 与 IO preflight checks。
5. 创建 `observable_input`，不要改写 `model_input`。
6. 运行 pre-tool hooks；收集 progress、additional context、updated input、stop requests 或 permission results。
7. 解析 permission decisions；deny 或 rejection 作为正常 terminal tool result 记录。
8. 按 scheduler policy 排队或开始执行。
9. 使用 timeout、abort signal、progress callback、sandbox、credentials 与 native protocol refs 执行。
10. 将 executor output 映射为 model-facing result block；除非 post hooks 拥有协议特定输出更新，否则只映射一次。
11. 运行 post-tool 或 failure hooks。
12. 应用 result persistence、redaction、artifact/resource linking、telemetry 与 evidence refs。
13. 发出 terminal result 与 scheduler 允许的 context modifiers。

## Permission decisions

`tool_permission_decision` 记录一次决策，而不只是 profile。初始 behaviors：

- `allow`
- `ask`
- `deny`
- `passthrough`

Decision SHOULD 包含 `decision_id`、`invocation_id`、`behavior`、`mode`、`source`、`reason`、`rule_refs`、`policy_refs`、`updated_input`、`user_modified`、`suggested_updates`、`pending_classifier_check`、`blocked_path`、`content_blocks`、`accept_feedback`、`decided_at` 与必要时的 `expires_at`。

Permission profile 不是 decision。Agent Policy 拥有 policy evaluation。Agent Tool 记录工具事实以及附着在工具调用上的具体 decision facts。

## Scheduling 与 concurrency

`tool_scheduler_policy` SHOULD 说明：

- 针对当前输入，工具是否 `concurrency_safe`。
- read-only、write、destructive 或 open-world 工具是否可以并行。
- result 如何保序，同时 progress 如何尽早流出。
- interrupt behavior：`cancel` 或 `block`。
- sibling failure policy：`ignore`、`cancel_siblings` 或 `cancel_dependent`。
- concurrent tools 是否允许 context modifiers。
- user interruption、sibling error、fallback、timeout 或 discarded execution 如何创建 synthetic results。

Concurrency-safe 不等于 read-only。读工具如果会改写上下文、消耗独占 handle 或依赖独占进程状态，也可能不安全。写工具只有在实现证明隔离时才可能安全并发。

## Deferred loading 与 tool search

大 catalog SHOULD 支持 deferred loading。Deferred tool 可以被发现，但完整 schema 不一定已经进入活跃模型上下文。

`deferred_tool_ref` SHOULD 包含 `tool_id`、`name`、`namespace`、`search_hint`、`source`、`schema_visibility`、`loading_state`、`reason`、`pending_provider_or_server` 与 `selection_ref`。

Tool search SHOULD 至少支持：

- 按工具名精确选择。
- 基于 name、namespace、description 与 search hints 的关键词搜索。
- pending provider/server 报告。
- no-match 结果也保持机器可读。
- schema-not-sent 错误提示调用方先 discover 工具。

## Progress 与 cancellation

长时间运行的工具 SHOULD 发出进度。`tool_progress` record SHOULD 在已知时包含 `progress_id`、`invocation_id`、`sequence`、`status`、`message`、`percent`、`current_step`、`total_steps`、`elapsed_ms`、`bytes_read`、`bytes_written`、`line_count`、`partial_result_refs`、`artifact_refs` 与 `timestamp`。

取消 SHOULD 是显式事实。如果不支持取消，execution profile 必须说明。即使取消不成功，也应创建事件，方便 UI、runtime、evidence 与 policy 解释发生了什么。

## Result envelope

`tool_result` SHOULD 包含：

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

结果内容可以是 text、structured JSON、images、audio、video、files、resource links、embedded resources、logs、diffs、persisted output refs 或 artifact refs。大 payload 或私密 payload SHOULD 使用引用，而不是直接嵌入。

Permission denied、approval rejected、schema validation failure、missing tool、sibling cancellation 与 streaming fallback SHOULD 仍产出 terminal tool results，以便 conversation、evidence 与 UI 能解释发生了什么。

## Result persistence 与 rendering

工具结果可以有多种表示：

| 表示 | 消费方 |
| --- | --- |
| `model_facing_content` | Model 或 agent loop。可以被 compact、preview 或 reference 化。 |
| `ui_facing_rendering` | 用户界面投影，包括 progress、rejection、grouped results 与 expanded views。 |
| `transcript_search_text` | 有意进入 transcript search 的可见文本。 |
| `persisted_payload_ref` | 大输出的 durable 或 session-scoped bytes。 |
| `artifact_refs` | 由 Agent Artifact 拥有的 durable deliverables。 |
| `resource_refs` | 原生协议或 resource 系统拥有的可获取资源。 |

实现 SHOULD 避免循环结果。例如，file-read result 可以选择不持久化；否则会产生另一个文件，导致同一个 read 工具反复读回自己的结果。

## Errors 与 retries

Tool errors SHOULD 包含稳定的 `error_code`、`error_class`、`message`、`recoverability`、`retry_after`、`native_error_ref`、`policy_refs` 与 `evidence_refs`。

初始 error classes：

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

## 外部映射

Agent Tool SHOULD 保留原生协议 id，而不是替代它们。示例：

| 原生来源 | 映射字段 |
| --- | --- |
| MCP | `server_id`、`mcp_session_id`、`mcp_protocol_version`、`method`、`tool_name`、`jsonrpc_request_id`、`structuredContent`、`isError`、`_meta`。 |
| OpenAPI | `operation_id`、`method`、`path`、`server_url`、`security_scheme_refs`。 |
| Function calling APIs | `tool_call_id`、`function_name`、`tool_choice`、`parallel_tool_calls`、`strict`、`defer_loading`。 |
| A2A | `agent_card_url`、`agent_skill_id`、`task_id`、`context_id`、`message_id`、`artifact_id`。 |
| CLI | `command_id`、`argv_ref`、`cwd_ref`、`env_policy_ref`、`exit_code`、`signal`、`sandbox_ref`。 |
| Browser | `browser_session_id`、`page_id`、`action_id`、`observation_ref`、`screenshot_ref`。 |
| Telemetry | `trace_id`、`span_id`、`tool_name`、`tool_call_id`、`request_id`、`duration_ms`、`result_size_bytes`。 |

## Event classes

兼容实现 SHOULD 发出或导出这些 event classes：

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

如果工具结果过大、私密、过期、被 redacted、被 discard，或因 sibling failure 被取消，consumer 应保留 invocation envelope、status、error 或 redaction reason、resource/artifact refs、policy/evidence refs 与 audit refs。payload bytes 缺失不应抹掉工具曾被选择和执行的事实。

## 版本兼容

`0.2.0` 是草案。实现 SHOULD 包含 `schema_version: "0.2.0"` 并容忍未知字段。Producer SHOULD 保留身份字段，优先增加可选字段，而不是改变 tool identity、lifecycle semantics、native mappings 或 result interpretation。
