---
title: 实现分析摘要
description: Agent Tool 实现分析摘要。
---

# 实现分析摘要

Agent Tool 存在的原因是：Agent 系统需要一个比 prompt-visible function list 更精确、又比某个产品 runtime 更可移植的工具层。

## 现有标准已经解决了什么

MCP 定义了强工具 discovery 与 invocation 协议，并包含 content blocks、structured content、resource links、annotations 与 tool-result error flags。OpenAPI 定义 API operations 与 schemas。Function calling APIs 定义 model-facing tool calls、strict schemas、tool choice、tool call ids 与 parallel-call options。A2A 定义 peer-agent skills、tasks、messages、streaming updates 与 artifacts。OpenTelemetry 定义工具调用如何进入 traces。CloudEvents 定义 portable event envelope。OAuth 与安全 schemes 定义 credential 与 scope patterns。

## Coding-agent runtime 增加了什么

现代 coding-agent runtime 的工具系统远不只是简单函数列表。对 CLI 与 agent-runtime 工具实现的分析显示出这些重复需求：

1. Tool identity 包含 primary names、aliases、search hints、human-facing names、native ids 与兼容名称。
2. 一个工具有多种 schema：model-facing schema、runtime schema、output schema，有时还有 native protocol schema。
3. 安全性依赖输入：read-only、destructive、open-world、sandbox override 与 concurrency safety 可能每次调用都不同。
4. Permission 是决策流：modes、rule sources、ask/allow/deny、user feedback、classifier checks 与 updated input 都重要。
5. Hooks 可以添加 context、发出 progress、停止 continuation、返回 permission decisions 或改写 inputs。
6. Tool input 不是单一可变对象；model input、observable input、permission input 与 call input 需要分开记录。
7. 并行执行需要明确的 queued/executing/completed/yielded states、interrupt behavior、sibling failure rules 与 synthetic results。
8. 大 catalog 需要 deferred loading 与 tool search，避免模型吞下所有 schema。
9. Tool results 需要 model-facing serialization、UI-facing rendering、transcript search text、telemetry refs 与 persisted payload refs。
10. Denials、validation failures、rejected approvals、sibling cancellations 与 streaming fallback 应是 terminal tool results，而不是不可见 exceptions。

## 设计结论

1. 保留 native ids 与原生协议，不替代它们。
2. 区分 catalog、surface、declaration、interface、invocation、permission decision、scheduling、execution、persistence 与 result。
3. 将 permission facts 与 policy decisions 分开，但记录具体 per-invocation decisions。
4. 把 hooks 与 input mutation 当作一等生命周期事实。
5. 把 progress、cancellation、timeout、sibling failure 与 partial result 作为一等事实。
6. 大结果或敏感结果优先使用 refs，并保持 rendering 与 model-facing result content 分离。
7. 将 tool results 链接到 Agent Artifact 与 Agent Evidence，而不是把所有审计数据塞进 tool result。
8. 大 catalog 中，tool search 与 deferred loading 是正常 surface 机制。
9. 错误结构要足够支持 retry、recovery、UI 与 evidence。
10. 当 concurrency、write effects 或 open-world behavior 未知时，默认 fail closed。
