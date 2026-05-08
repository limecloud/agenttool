---
title: Input and output contracts
description: Agent Tool 输入输出契约。
---

# Input and Output Contracts

Input 与 output contracts 是 validation 与 interpretation hints。它们不替代原生协议 schema。

## Input contract

`tool_input_contract` SHOULD 包含：

- JSON Schema 兼容的 `model_input_schema`。
- 可选的 `runtime_input_schema`，用于内部字段。
- provider/runtime 可强制 schema 时的 `strict`。
- 安全的 `defaults`。
- 用于模型 grounding 的 `examples`。
- 用于 redaction 与 telemetry controls 的 `sensitive_fields`。
- 不得由模型生成的 `internal_only_fields`。
- `argument_mode`: `json`、`text`、`file`、`multipart`、`stream` 或 `custom`。
- `mutation_policy`: hooks 或 permission prompts 是否可以替换输入。

## Input variants

保持 `model_input`、`observable_input`、`permission_input` 与 `call_input` 分离。这能避免 path normalization、permission UI edits 或 internal fields 污染模型原始参数。

## Output contract

`tool_output_contract` SHOULD 包含：

- 结构化内容的 `structured_schema`。
- text、image、audio、video、file、log 或 resource refs 的 `content_types`。
- 工具应生成 durable deliverable 时的 `artifact_expectations`。
- 防止大 payload 进入 prompt 的 `max_inline_bytes` 或 `max_inline_chars`。
- preview、persist、redaction 与 never-persist rules 的 `persistence_policy_ref`。
- 区分 model content、UI rendering 与 transcript search text 的 `rendering_boundary`。
- `redaction_rules` 与 `fallback_summary` guidance。

如果原生协议已有 schemas，Agent Tool 应引用它们，并补充 agent-specific interpretation，而不是复制一切。
