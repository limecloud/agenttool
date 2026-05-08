---
title: Hooks and input mutation
description: Agent Tool hooks 与输入变更边界。
---

# Hooks and Input Mutation

Hooks 是工具调用周围的生命周期扩展点。它们可以添加 context、阻止执行、改变 permission behavior 或改写输入，因此 Agent Tool 要把这些效果显式记录。

## Hook events

初始 hook event kinds：

- `pre_tool_use`
- `post_tool_use`
- `post_tool_use_failure`
- `permission_request`
- `permission_decision`
- `result_persistence`

## Hook outputs

Hook MAY 发出：

| 输出 | 含义 |
| --- | --- |
| `message` | 对用户或 runtime 可见的附加消息。 |
| `progress` | native execution 前后发出的有序进度。 |
| `updated_input` | 替换 permission 或 execution 输入。 |
| `permission_result` | 给 permission resolver 的 allow、ask、deny 或 passthrough hint。 |
| `additional_context` | 追加到 conversation 或 invocation record 的上下文。 |
| `stop` | 停止 continuation 并产出 terminal tool result。 |
| `updated_output` | 协议特定输出更新，通常用于 remote tools。 |

## Mutation rule

不要原地改写 `model_input`。Hooks 如果需要 normalized paths、expanded URLs、parsed commands 或 internal fields，应操作 `observable_input`，或产出新的 `updated_input`。

每次输入变更 SHOULD 记录：

- `mutation_id`
- `invocation_id`
- `source_type`: `hook`、`permission_prompt`、`adapter`、`migration` 或 `runtime`
- `source_ref`
- `from_input_ref`
- `to_input_ref`
- `changed_fields`
- `reason`
- `created_at`

## Permission hook invariant

Hook 的 `allow` 不应自动绕过更高优先级的 deny 或 ask rules。兼容 runtime SHOULD 在 hook decision 之后仍解析 rule-based、policy-based 或 human-interaction constraints，除非可信 policy 明确说该 hook 具有最终权威。
