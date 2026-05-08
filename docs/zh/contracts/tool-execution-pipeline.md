---
title: Tool execution pipeline
description: Agent Tool 执行管线。
---

# Tool Execution Pipeline

一次工具调用即使在执行前失败，也应能被解释。因此 Agent Tool 把 pipeline 建模成一组连续事实，而不是单个 `call()` 函数。

## 阶段

| 阶段 | 用途 | 终止失败 |
| --- | --- | --- |
| `resolve_tool` | 在当前 surface 中按 name 或 alias 找到 declaration。 | `unknown_tool`、`blocked_tool`、`schema_not_loaded`。 |
| `parse_schema` | 用 model-facing schema 校验 `model_input`。 | `schema_validation_failed`。 |
| `validate_values` | 执行工具特定 value validation 与 IO preflight。 | `invalid_arguments`、`setup_required`、`sandbox_violation`。 |
| `prepare_observable_input` | 为 hooks、permission UI、SDK streams 与 transcripts 创建规范化副本。 | `input_mutation_failed`。 |
| `pre_hooks` | 允许 hooks 添加 context、progress、updated input、stop requests 或 permission results。 | `hook_blocked`、`hook_failed`。 |
| `permission` | 通过 policy、rules、classifiers 或 human approval 解析 allow/ask/deny/passthrough。 | `permission_denied`、`approval_rejected`、`policy_blocked`。 |
| `schedule` | 按 concurrency 与 ordering policy 排队或运行。 | `canceled`、`sibling_canceled`。 |
| `execute` | 使用 timeout、abort signal、sandbox、credentials 与 progress callback 调用 native executor。 | `execution_failed`、`timeout`、`dependency_unavailable`。 |
| `map_result` | 将 native output 转成 model-facing result envelope。 | `result_mapping_failed`。 |
| `post_hooks` | 让 hooks enrich context、发出 audit messages 或更新协议特定输出。 | `post_hook_failed`、`hook_blocked`。 |
| `persist_result` | inline、preview、persist、redact 或 link result bytes。 | `result_too_large`、`result_redacted`。 |
| `emit_terminal` | 发出 terminal result 与 events。 | 无；即使错误也应被表示。 |

## 常规失败也是结果

Permission denial、user rejection、schema validation failure、missing tool、streaming fallback 与 sibling cancellation SHOULD 变成带 `is_error: true` 的 terminal `tool_result` records，而不是只存在于 runtime 的 exception。

## Result mapping 只做一次

在通用 persistence 之前，将 native result 映射为 model-facing result。若协议特定 post hook 拥有输出变更，记录 mutation 并在 hook 之后重新映射。避免同一输出在 retry 或 resume 时被反复序列化成不同形状。

## Context modifiers

工具 MAY 返回 context modifier。Scheduler 必须说明 concurrent tools 的 context modifiers 是否被执行。如果 runtime 不能安全合并并发上下文变更，SHOULD 拒绝或延后这些 modifier，而不是非确定性应用。
