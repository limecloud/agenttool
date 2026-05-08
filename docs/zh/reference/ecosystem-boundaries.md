---
title: 生态边界
description: Agent Tool 生态边界。
---

# 生态边界

Agent Tool 应保持窄边界。

| 相邻层 | 边界 |
| --- | --- |
| Runtime | Runtime 执行与调度；Tool 记录 callable capability 与 call facts。 |
| Policy | Policy 做 decision；Tool 描述风险与权限需求。 |
| Evidence | Evidence 验证与审计；Tool 链接 invocation 与 result facts。 |
| Artifact | Artifact 拥有 durable deliverables；Tool 把结果链接到 artifacts。 |
| UI | UI 渲染与控制；Tool 提供机器可读状态。 |
| Knowledge | Knowledge 提供 source-grounded context；Tool 可以检索或引用它，但不拥有它。 |
| Skills | Skills 打包 instructions 与 workflows；Tool 暴露 executable capabilities。 |
| MCP/OpenAPI/provider APIs | 原生协议拥有 wire semantics；Tool 保留 mappings 并补 agent-specific lifecycle。 |
