---
title: 浏览器动作
description: Agent Tool 浏览器动作示例。
---

# 浏览器动作

浏览器工具应区分 planning 与 execution。

click、type 或 navigation action 可以是 `browser_action` tool，但应该携带 browser session refs、page refs、observation refs 与 permission refs。Tool result 可以包含 screenshot resource，并链接到 browser snapshot artifact。
