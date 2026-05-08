---
title: Permission profile
description: Agent Tool 权限 profile。
---

# Permission Profile

`tool_permission_profile` 为 policy systems 与 human reviewers 提供足够信息，用于判断工具调用能否继续。

它 SHOULD 描述：

- risk level: `low`、`medium`、`high`、`critical`。
- access kinds: file read、file write、network、browser、credential、payment、external send、code execution。
- write effects: none、local draft、local persistent、remote mutation、irreversible。
- network scope 与 tenant scope。
- sandbox profile 与 credential refs。
- 是否需要 approval。
- non-interactive mode 下是否应避免 permission prompts。
- rule matching fields，例如 path、command、URL、native operation id 或 resource id。
- redaction 与 retention hints。

Agent Policy 拥有 allow/deny/ask/defer/escalate。Agent Tool 拥有工具事实，以及让决策可解释的 per-invocation decision record。

参见 [Permission decision](./permission-decision.md) 了解具体 decision object。
