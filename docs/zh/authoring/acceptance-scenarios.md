---
title: 验收场景
description: Agent Tool 兼容性检查。
---

# 验收场景

兼容实现应通过这些场景：

1. 不把所有工具加载进模型上下文，也能 discover 一个 tool declaration。
2. Deferred tool 可以按精确名称和关键词搜索找到，并在 invocation 前加载。
3. Input arguments 可以在 execution 前通过 schema validation。
4. 工具特定 validation 可以在 filesystem 或 network IO 之前拒绝不安全值。
5. Sensitive arguments 默认不进入 telemetry，除非明确允许并 redacted。
6. Hooks 与 permission prompts 之后，`model_input`、`observable_input`、`permission_input` 与 `call_input` 仍可区分。
7. 高风险工具调用可以暂停等待 approval，并用同一个 invocation id 继续。
8. Denied 或 rejected call 会产出 terminal error result，而不是消失。
9. 长任务发出有序 progress，并准确报告 cancellation support。
10. 并行 read tools 可以一起运行，exclusive write tools 保持顺序。
11. Sibling failure 可以用 synthetic result records 取消 dependent tools。
12. 大结果返回 refs 或 previews，而不是嵌入完整 payload。
13. 成功但空输出能与缺失输出区分。
14. Tool result 可以创建或链接到 Agent Artifact。
15. Evidence 可以重建哪个工具以什么 native id 运行，以及结果为什么可信或不可信。
16. Policy 可以解释工具为什么被 allowed、denied、deferred 或 waived。
17. MCP、OpenAPI、provider function calling、CLI、browser 与 peer-agent tools 保留原生 ids。
