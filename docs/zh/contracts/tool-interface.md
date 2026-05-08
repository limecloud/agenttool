---
title: Tool interface
description: Agent Tool 的运行时接口契约。
---

# Tool Interface

`tool_interface` 描述一个已声明工具在运行时如何表现。它比 function signature 更深：它告诉 agent runtime 如何 validate、authorize、execute、stream、render、persist 与 audit 一次工具调用。

## 必须分区

| 分区 | 字段 |
| --- | --- |
| Identity | `tool_id`、`name`、`aliases`、`namespace`、`native_ids`、`user_facing_name`。 |
| Discovery | `search_hint`、`description`、`capability_refs`、`schema_visibility`、`should_defer`、`always_load`。 |
| Schemas | `model_input_schema`、`runtime_input_schema`、`output_schema`、`strict`。 |
| Availability | `is_enabled`、`requires_setup`、`required_credentials`、`model_requirements`、`feature_gate_refs`。 |
| Validation | `schema_validation`、`value_validation`、`io_preflight_validation`、`deny_before_io`。 |
| Safety | `is_read_only`、`is_destructive`、`is_open_world`、`requires_user_interaction`、`sandbox_profile`、`classifier_input`。 |
| Permission | `permission_profile_ref`、`permission_matcher`、`permission_channel`、`decision_ref`。 |
| Execution | `execution_profile_ref`、`timeout_ms`、`abort_semantics`、`progress_schema`、`context_modifier_policy`。 |
| Result | `result_mapper`、`max_inline_chars`、`persistence_policy_ref`、`empty_result_policy`、`redaction_policy_refs`。 |
| Rendering | `ui_summary`、`activity_description`、`progress_render_hint`、`rejected_render_hint`、`error_render_hint`、`transcript_search_text`。 |

## Fail-closed defaults

如果实现提供默认值，SHOULD 保守：

| 缺失字段 | 安全默认值 |
| --- | --- |
| `is_concurrency_safe` | `false` |
| `is_read_only` | `false` |
| `is_destructive` | `false`，除非明确检测到 |
| `is_open_world` | network/browser/shell 默认 `true`，除非有明确 scope |
| `requires_user_interaction` | `false` |
| `strict` | provider 支持时，结构化 model-facing tools 默认 `true` |
| `interrupt_behavior` | `block` |
| `classifier_input` | 空字符串；安全相关工具必须覆盖 |

内部可信工具可以使用更宽松默认值，但导出的 Agent Tool record 仍应说明哪些事实是推断出来的。

## Model schema vs runtime schema

Model-facing schema SHOULD 只包含模型可以生成的字段。Runtime schema MAY 包含由 hooks、permission prompts、migration layers 或 adapters 注入的内部字段。Internal-only fields MUST 标记 `visibility: "internal"`，使用时记录 `mutation_source`。

## Rendering boundary

Tool interface 可以提供 UI hints，但 Agent Tool 不定义 UI component。应区分：

- model-facing result serialization。
- UI-facing progress 或 result projection。
- transcript/search text。
- persisted payload preview。
- artifact 或 resource refs。

这种分离避免 large result wrapper、UI-only label 或 collapsed view 变成 canonical tool output。
