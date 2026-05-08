---
title: 实现分析摘要
description: Agent Tool 实现分析摘要。
---

# 实现分析摘要

Agent Tool 存在的原因是：Agent 系统需要一个比 prompt-visible function list 更精确、又比某个产品 runtime 更可移植的工具层。

## 现有标准已经解决了什么

MCP 定义了强工具 discovery 与 invocation 协议，并包含 content blocks 与 resource links。OpenAPI 定义 API operations 与 schemas。Function calling APIs 定义 model-facing tool calls 与 tool outputs。A2A 定义 peer-agent skills、tasks 与 artifacts。OpenTelemetry 定义工具调用如何进入 traces。CloudEvents 定义 portable event envelope。OAuth 与安全 schemes 定义 credential 与 scope patterns。

## Agent 产品额外增加了什么

Agent 产品会把这些能力组合在一个 surface 中。一个任务可能同时暴露本地文件工具、远端 MCP 工具、浏览器控制、shell 命令、API adapters、tool search、媒体生成任务与 peer-agent capabilities。这些工具还需要 policy、approval、progress、cancellation、artifact refs、evidence refs 与 telemetry refs。原生协议并不会用同一种方式描述这些 agent-specific 关系。

## 设计结论

1. 保留 native ids 与原生协议，不替代它们。
2. 区分 catalog、surface、declaration、invocation、execution 与 result。
3. 将 permission facts 与 policy decisions 分开。
4. 把 progress、cancellation、timeout 与 partial result 作为一等事实。
5. 大结果或敏感结果优先使用 refs。
6. 将 tool results 链接到 Agent Artifact 与 Agent Evidence，而不是把所有审计数据塞进 tool result。
7. 大 catalog 中，tool search 与 deferred loading 是正常 surface 机制。
8. 错误结构要足够支持 retry、recovery、UI 与 evidence。
