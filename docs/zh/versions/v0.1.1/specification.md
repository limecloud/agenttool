---
title: 规范
description: 最新 Agent Tool 草案规范。
---

# 规范

Agent Tool 最新草案是工具声明、工具面、输入输出契约、执行 profile、权限 profile、调用、进度、取消、结果、错误、resource refs、artifact refs、policy refs、evidence refs 与 telemetry refs 的可移植标准。

Agent Tool 拥有工具语义。它不拥有传输协议、模型 API、runtime 调度、policy decision、UI rendering、evidence review、artifact storage、knowledge selection 或 skill package authoring。

## 范围

Agent Tool 标准化以下实现问题：

1. 带稳定身份、namespace、title、description、lifecycle、capabilities、schemas、annotations 与 external mappings 的工具声明。
2. 定义某个 turn、task、session、tenant、skill 或 peer-agent context 中可见工具集合的 tool surface。
3. 使用 JSON Schema 兼容结构，加上 mode、media 与 result-shape metadata 的 input / output contracts。
4. local、remote、browser、shell、MCP、API、native、model 与 hybrid executors 的 execution profiles。
5. 描述 risk、data access、write effects、network scope、credentials、sandbox 与 approval requirements 的 permission profiles。
6. 带 invocation ids、call ids、actor refs、runtime refs、policy refs、evidence refs、telemetry refs 与 native ids 的 invocation envelopes。
7. progress、cancellation、timeout、retry 与 partial-result semantics。
8. text、structured content、media、resources、artifacts、files、logs 与 handoff refs 的 result envelopes。
9. 区分 protocol、validation、permission、execution、timeout、rate-limit、dependency 与 policy-block 的错误 taxonomy。
10. 工具 lifecycle 与 invocation lifecycle 的 event classes。

Agent Tool **不**定义新的 RPC 协议、CLI、GUI 组件、workflow language、task scheduler、authorization engine 或 tool marketplace。

## 核心对象

| 对象 | 用途 |
| --- | --- |
| `tool_declaration` | 一个 callable capability 的稳定描述。 |
| `tool_surface` | 暴露给 agent 或 model 的上下文相关工具集合。 |
| `tool_namespace` | 来自某个 domain、server、skill 或 provider 的工具分组与冲突边界。 |
| `tool_input_contract` | 输入 schema、validation、defaults、examples 与 sensitive fields。 |
| `tool_output_contract` | 结构化结果 schema、content types、media modes 与 artifact/resource expectations。 |
| `tool_execution_profile` | 工具如何执行，以及支持哪些 lifecycle operations。 |
| `tool_permission_profile` | risk、access、sandbox、approval、credential 与 redaction requirements。 |
| `tool_invocation` | 一次被请求或已执行的 tool call。 |
| `tool_progress` | invocation 的有序进度更新。 |
| `tool_result` | 已完成或部分完成 invocation 的结构化结果 envelope。 |
| `tool_error` | 结构化失败原因与 retry guidance。 |
| `tool_event` | declaration、surface、invocation、progress、result 与 error 的 lifecycle event envelope。 |
| `tool_external_mapping` | 指向原生 MCP、OpenAPI、provider、CLI、browser 或 app operation ids 的引用。 |

## Tool declaration

每个导出的 `tool_declaration` SHOULD 包含：

| 字段 | 要求 |
| --- | --- |
| `schema_version` | 必填 Agent Tool schema version。 |
| `tool_id` | 必填稳定 id，作用域由 producer 决定。 |
| `namespace` | 必填冲突边界。 |
| `name` | 必填机器名。 |
| `title` | 推荐的人类可读标题。 |
| `description` | 必填 model-facing 使用说明。 |
| `lifecycle` | 必填生命周期状态。 |
| `tool_kind` | 必填执行类型。 |
| `capability_refs` | 推荐的 capability keys 或 external capability refs。 |
| `input_contract` | 接收结构化参数的工具必填。 |
| `output_contract` | 结构化结果推荐填写。 |
| `execution_profile_ref` | 推荐。 |
| `permission_profile_ref` | 非平凡工具推荐填写。 |
| `external_mappings` | 当背后是 MCP、OpenAPI、provider tools、CLI、browser 或 native app APIs 时推荐填写。 |
| `annotations` | 可选的非可信 hints、display hints 与 model hints。 |

## Tool kinds

初始 `tool_kind`：

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

`custom` SHOULD 只作为兼容兜底，不应成为 domain tools 的默认值。

## Invocation lifecycle

`tool_invocation` SHOULD 经过显式状态：

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

实现可以跳过不适用的状态，但 SHOULD 保留 `invocation_id`、native call id、started/ended timestamps、actor refs、runtime refs 与 status transitions。

## Result envelope

`tool_result` SHOULD 包含 `result_id`、`invocation_id`、`status`、`content`、`structured_content`、`resource_refs`、`artifact_refs`、`evidence_refs`、`policy_refs`、`telemetry_refs`、`summary`、`redaction_state` 与 `created_at`。

结果内容可以是 text、structured JSON、images、audio、video、files、resource links、embedded resources、logs、diffs 或 artifact refs。大 payload 或私密 payload SHOULD 使用引用，而不是直接嵌入。

## Permission profile

`tool_permission_profile` 描述工具的风险和访问要求。它 SHOULD 包含 `risk_level`、`access_kinds`、`write_effects`、`network_scope`、`credential_refs`、`sandbox_profile`、`approval_required`、`approval_reason`、`data_sensitivity`、`retention_hint`、`redaction_required` 与 `policy_refs`。

Permission profile 不是 decision。Agent Policy 拥有 decision。Agent Tool 只提供 policy engine 或 human reviewer 所需的事实。

## 外部映射

Agent Tool SHOULD 保留原生协议 id，而不是替代它们。示例：MCP 的 `server_id`、`mcp_session_id`、`method`、`tool_name`、`jsonrpc_request_id`；OpenAPI 的 `operation_id`、`method`、`path`；function calling 的 `tool_call_id`、`function_name`、`tool_choice`；A2A 的 `agent_skill_id`、`task_id`、`context_id`、`artifact_id`。

## 版本兼容

`0.1.0` 是草案。实现 SHOULD 包含 `schema_version: "0.1.0"` 并容忍未知字段。Producer SHOULD 保留身份字段，优先增加可选字段，而不是改变 tool identity 或 lifecycle semantics。
