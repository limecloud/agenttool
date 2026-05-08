---
title: Tool 模型
description: Agent Tool 的对象模型与身份边界。
---

# Tool 模型

Agent Tool 把经常被混成“工具”的概念拆成五层。

| 层 | 问题 | 示例 |
| --- | --- | --- |
| Declaration | 什么能力可以被调用？ | `get_weather`、`read_file`、`browser.click`、`generate_image`。 |
| Surface | 当前上下文可见哪些声明？ | turn tools、task tools、skill-activated tools、tenant-limited tools。 |
| Invocation | Agent 实际请求了什么？ | arguments、actor、policy refs、native call id、status。 |
| Execution | 它如何被执行？ | MCP server、本地原生命令、browser executor、API adapter、model task。 |
| Result | 返回了什么？ | text、structured JSON、resource refs、artifact refs、errors、telemetry refs。 |

可移植实现即使面对只暴露单一对象的 provider，也应该保留这些层次。

## 身份

`tool_id` 用于可移植声明，原生 id 放在 `external_mappings`。不要为了统一命名而丢失 MCP tool、OpenAPI operation、browser action 或 provider function 的原始身份。

## 选择

工具选择依赖上下文。一个工具可以存在于 catalog，但因为 policy、setup、模型能力、任务范围或用户授权而不进入当前 surface。

## 结果

工具结果可以是 final、partial、redacted、too large，或被转换成 durable artifact。Result envelope 应说明发生了哪一种情况，而不是只返回普通文本。
