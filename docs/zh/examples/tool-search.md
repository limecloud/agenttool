---
title: 工具搜索
description: Agent Tool 工具搜索示例。
---

# 工具搜索

当 catalog 太大，无法全部放进模型上下文时，Tool search 很有用。

当前 surface 暴露一个小型 discovery tool。Discovery result 返回带 score 与 reason 的 candidate tool refs。之后的 surface 再加载被选中的 declarations。这样可以保持上下文小，并让工具选择可审计。
