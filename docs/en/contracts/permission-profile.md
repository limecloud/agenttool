---
title: Permission profile
description: Agent Tool permission profile.
---

# Permission Profile

A `tool_permission_profile` gives policy systems and human reviewers enough information to decide whether a tool call can proceed.

It SHOULD describe:

- risk level: `low`, `medium`, `high`, `critical`.
- access kinds: file read, file write, network, browser, credential, payment, external send, code execution.
- write effects: none, local draft, local persistent, remote mutation, irreversible.
- network scope and tenant scope.
- sandbox profile and credential refs.
- whether approval is required.
- redaction and retention hints.

Agent Policy owns allow/deny/ask/defer/escalate. Agent Tool owns the tool facts that make that decision explainable.

