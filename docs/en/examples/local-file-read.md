---
title: Local file read
description: Agent Tool example.
---

# Local File Read

A local file read tool should declare its scope and permission profile before it is exposed.

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

The result should include a resource ref or embedded resource with media type and redaction state. If the file is private, return a summary plus a protected resource ref instead of raw bytes.

