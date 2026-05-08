---
title: Permission decision
description: Agent Tool permission decision contract.
---

# Permission Decision

A permission profile describes risk facts. A permission decision records what actually happened for one invocation.

## Behaviors

| Behavior | Meaning |
| --- | --- |
| `allow` | The call may proceed. May include `updated_input` and feedback. |
| `ask` | The runtime must ask a user, coordinator, policy tool, or external authority. |
| `deny` | The call must not execute. Produce a terminal error result. |
| `passthrough` | The tool delegates final permission resolution to another policy layer. |

## Decision reasons

Initial `reason.type` values:

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

Permission rules SHOULD preserve origin:

- `user_settings`
- `project_settings`
- `local_settings`
- `flag_settings`
- `policy_settings`
- `cli_arg`
- `command`
- `session`

## Suggested updates

An `ask` decision MAY include suggested updates such as adding allow/deny/ask rules, replacing rules, changing permission mode, or adding/removing scoped working directories. Suggested updates are not decisions until accepted by the authority that owns policy state.

## Classifier state

Automated safety classifiers SHOULD be represented as decision inputs, not hidden side effects. Record `pending_classifier_check`, `classifier_ref`, `confidence`, `classifier_reason`, and whether the classifier can approve, deny, or only recommend.
