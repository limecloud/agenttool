---
title: Input 与 output contracts
description: Agent Tool Input 与 output contracts。
---

# Input 与 Output Contracts

Input / output contracts 是 validation 与解释提示，不替代原生协议 schema。

## Input contract

`tool_input_contract` SHOULD 包含：

- JSON Schema 兼容的 `schema`。
- 安全的 `defaults`。
- 用于模型 grounding 的 `examples`。
- 用于 redaction 与 telemetry controls 的 `sensitive_fields`。
- `argument_mode`：`json`、`text`、`file`、`multipart`、`stream` 或 `custom`。

## Output contract

`tool_output_contract` SHOULD 包含：

- 结构化内容的 `structured_schema`。
- text、image、audio、video、file、log 或 resource refs 的 `content_types`。
- 当工具会产出 durable deliverable 时的 `artifact_expectations`。
- 防止巨大 payload 进入 prompt 的 `max_inline_bytes`。
- `redaction_rules` 与 `fallback_summary` guidance。

如果原生协议已经有 schema，Agent Tool 应引用它们，并补充 agent-specific 解释，而不是复制一整份。
