---
title: Resource 与 artifact refs
description: Agent Tool Resource 与 artifact refs。
---

# Resource 与 Artifact Refs

工具输出经常会变成 resource 或 artifact。

当内容可以被 MCP 等协议读取或订阅时，使用 resource refs。当输出成为有身份、版本、预览、导出或 handoff 语义的 durable deliverable 时，使用 artifact refs。

同一个工具结果 MAY 同时包含二者。例如浏览器工具可以返回 screenshot resource，并创建 browser snapshot artifact。

Refs SHOULD 包含 id、URI 或 native ref、media type、可用时的 digest、access constraints 与 source relation。
