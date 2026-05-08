---
title: Permission profile
description: Agent Tool Permission profile。
---

# Permission Profile

`tool_permission_profile` 为 policy system 和 human reviewer 提供足够事实，用来判断一次工具调用是否可以继续。

它 SHOULD 描述：

- risk level：`low`、`medium`、`high`、`critical`。
- access kinds：file read、file write、network、browser、credential、payment、external send、code execution。
- write effects：none、local draft、local persistent、remote mutation、irreversible。
- network scope 与 tenant scope。
- sandbox profile 与 credential refs。
- 是否需要 approval。
- redaction 与 retention hints。

Agent Policy 拥有 allow / deny / ask / defer / escalate。Agent Tool 拥有能让这个 decision 可解释的工具事实。
