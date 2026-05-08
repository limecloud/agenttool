---
title: Ecosystem boundaries
description: Boundaries between Agent Tool and adjacent systems.
---

# Ecosystem Boundaries

Agent Tool should stay narrow.

| Adjacent layer | Boundary |
| --- | --- |
| Runtime | Runtime executes and schedules. Tool records the callable capability and call facts. |
| Policy | Policy decides. Tool describes risk and required permissions. |
| Evidence | Evidence verifies and audits. Tool links invocation and result facts. |
| Artifact | Artifact owns durable deliverables. Tool links results to artifacts. |
| UI | UI renders and controls. Tool provides machine-readable state. |
| Knowledge | Knowledge provides source-grounded context. Tool may retrieve or cite it but does not own it. |
| Skills | Skills package instructions and workflows. Tool exposes executable capabilities. |
| MCP/OpenAPI/provider APIs | Native protocols own wire semantics. Tool preserves mappings and adds agent-specific lifecycle. |
