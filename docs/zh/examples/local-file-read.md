---
title: 本地文件读取
description: Agent Tool 本地文件读取示例。
---

# 本地文件读取

本地文件读取工具在暴露前必须声明 scope 与 permission profile。

```json
{
  "tool_id": "tool_local_read_file",
  "namespace": "local.files",
  "name": "read_file",
  "tool_kind": "file_operation",
  "capability_refs": ["local_file_read"],
  "permission_profile_ref": "perm_read_workspace_files"
}
```

结果应包含 resource ref 或 embedded resource，并带 media type 与 redaction state。如果文件是私密的，返回摘要与受保护 resource ref，而不是直接返回原始字节。
