---
title: 验收场景
description: Agent Tool 兼容性验收。
---

# 验收场景

兼容实现应通过以下场景：

1. 无需把所有工具加载到模型上下文，也能发现工具声明。
2. 执行前可以验证输入参数。
3. 敏感参数不会未经允许进入 telemetry。
4. 高风险工具调用可以暂停等待审批，并用同一个 invocation id 恢复。
5. 长时间运行的调用能发出有序进度，并准确说明是否支持取消。
6. 大结果通过 refs 返回，而不是内联完整 payload。
7. 工具结果可以创建或链接到 Agent Artifact。
8. Evidence 可以重建哪个工具以哪个 native id 运行，以及结果为何可信或不可信。
9. Policy 可以解释工具为何被允许、拒绝、延迟或豁免。
10. MCP、OpenAPI、provider function calling 与 peer-agent tools 都保留 native ids。
