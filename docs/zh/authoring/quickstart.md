---
title: 快速开始
description: Agent Tool 实现快速开始。
---

# 快速开始

1. 盘点 native tools，并保留原始 ids。
2. 创建带 namespace、aliases、search hints、kind、lifecycle、input contract、output contract 与 mappings 的 `tool_declaration` records。
3. 创建描述 validation、safety classification、permission matching、result mapping 与 persistence boundaries 的 `tool_interface` records。
4. 为会 read、write、access credentials、use network、run code、mutate remote systems 或 require user interaction 的工具创建 permission profiles。
5. 按 turn 或 task 构建小的 `tool_surface`，不要暴露整个 catalog。
6. 对大 catalog 使用 `deferred_tool_ref` records 并暴露 tool search。
7. 每次调用都包进 `tool_invocation` envelope。
8. 分别保留 `model_input`、`observable_input`、`permission_input` 与 `call_input`。
9. 发出 hook、permission、scheduler、progress、persistence 与 terminal result events。
10. 将结果链接到 resources、artifacts、evidence、policy decisions、runtime events 与 telemetry spans。
11. 尽可能用 ref 保留 native protocol payloads。
