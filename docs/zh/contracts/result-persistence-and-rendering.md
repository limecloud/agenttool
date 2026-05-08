---
title: Result persistence and rendering
description: Agent Tool 结果持久化与渲染边界。
---

# Result Persistence and Rendering

Tool output 会被模型、用户、transcripts、evidence systems、artifact stores 与 telemetry 消费。这些消费方需要不同表示。

## Representations

| 表示 | 要求 |
| --- | --- |
| `native_output` | 保留原生协议输出，或引用它。 |
| `model_facing_content` | 模型收到的内容。可以 compact、redact、preview 或 reference 化。 |
| `structured_content` | 可用时符合 `output_schema` 的机器可读结果。 |
| `ui_facing_rendering` | UI projection hints；不是 canonical output。 |
| `transcript_search_text` | 有意进入 transcript search 索引的文本。 |
| `persisted_payload_ref` | 大输出的 durable 或 session-scoped bytes。 |
| `artifact_refs` | 由 Agent Artifact 拥有的 durable deliverables。 |
| `resource_refs` | 原生协议或 resource systems 拥有的可获取资源。 |

## Persistence decision

`tool_result_persistence` SHOULD 包含 `decision_id`、`invocation_id`、`result_id`、`strategy`、`threshold`、`original_size_bytes`、`preview_size_bytes`、`persisted_ref`、`redaction_state`、`reason` 与 `created_at`。

初始 strategies：

- `inline`
- `preview_and_persist`
- `ref_only`
- `redact`
- `drop_with_reason`
- `never_persist`

## Empty output

工具可以合法地完成但没有 native output。兼容 runtime SHOULD 发出明确的 empty-result marker 或结构化 status，避免模型和 UI 把空输出误解为缺失输出。

## Circular result guard

有些工具应该 opt out of persistence。例如 read-file 工具可以通过 ranges 或 token limits 自我约束。如果把读取结果持久化成另一个文件，可能产生 read-persist-read 循环。
