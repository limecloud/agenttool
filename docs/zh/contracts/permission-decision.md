---
title: Permission decision
description: Agent Tool 权限决策契约。
---

# Permission Decision

Permission profile 描述风险事实。Permission decision 记录某次 invocation 实际发生了什么。

## Behaviors

| Behavior | 含义 |
| --- | --- |
| `allow` | 调用可以继续。可包含 `updated_input` 与 feedback。 |
| `ask` | Runtime 必须询问用户、coordinator、policy tool 或外部权威。 |
| `deny` | 调用不得执行。应产出 terminal error result。 |
| `passthrough` | 工具把最终 permission resolution 委托给另一层 policy。 |

## Decision reasons

初始 `reason.type` values：

- `rule`
- `mode`
- `policy`
- `hook`
- `classifier`
- `working_dir`
- `sandbox_override`
- `safety_check`
- `permission_prompt_tool`
- `async_agent`
- `subcommand_results`
- `other`

## Rule sources

Permission rules SHOULD 保留来源：

- `user_settings`
- `project_settings`
- `local_settings`
- `flag_settings`
- `policy_settings`
- `cli_arg`
- `command`
- `session`

## Suggested updates

`ask` decision MAY 包含 suggested updates，例如增加 allow/deny/ask rules、替换 rules、改变 permission mode，或增删 scoped working directories。Suggested updates 只有被 policy state 的拥有者接受后才成为决策。

## Classifier state

自动安全 classifier SHOULD 被表示为 decision inputs，而不是隐藏副作用。记录 `pending_classifier_check`、`classifier_ref`、`confidence`、`classifier_reason`，以及 classifier 能 approve、deny 还是只能 recommend。
