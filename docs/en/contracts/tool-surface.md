---
title: Tool surface
description: Agent Tool tool surface.
---

# Tool Surface

A `tool_surface` is the set of tools visible in a context. It is not the global catalog.

Surfaces can be scoped to `turn`, `task`, `session`, `tenant`, `skill`, `peer_agent`, or `workspace`.

## Fields

| Field | Meaning |
| --- | --- |
| `surface_id` | Stable id for the surfaced set. |
| `scope` | Context in which the surface applies. |
| `tool_refs` | Tools that can be considered. |
| `deferred_tools` | Discoverable but not loaded tools. |
| `blocked_tools` | Tools hidden with machine-readable reasons. |
| `selection_policy` | How the model or runtime may select tools. |
| `default_tool_choice` | `auto`, `none`, `required`, or tool-specific hint. |
| `policy_refs` | Adjacent policy decisions or constraints. |

A surface should be regenerated when policy, credentials, workspace, active skill, peer agent, or model capability changes.

