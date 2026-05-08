---
title: 快速开始
description: Agent Tool 实现快速开始。
---

# 快速开始

1. 盘点原生工具，并保留它们的原始 id。
2. 创建 `tool_declaration`，包含 namespace、kind、lifecycle、input contract、output contract 与 mappings。
3. 为会读取、写入、访问凭证、使用网络、运行代码或修改远端系统的工具创建 permission profiles。
4. 按 turn 或 task 构建小型 `tool_surface`，不要暴露整个 catalog。
5. 每次调用都包进 `tool_invocation` envelope。
6. 发出 progress 与 terminal result events。
7. 将结果链接到 resources、artifacts、evidence、policy decisions、runtime events 与 telemetry spans。
8. 尽可能通过 ref 保留原生协议 payload。
