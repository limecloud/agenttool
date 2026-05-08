---
title: Tool surface
description: Agent Tool tool surface.
---

# Tool Surface

A `tool_surface` is the set of tools visible in a context. It is not the global catalog.

Surfaces can be scoped to `turn`, `task`, `session`, `tenant`, `skill`, `peer_agent`, `workspace`, `role`, or `model_request`.

## Fields

| Field | Meaning |
| --- | --- |
| `surface_id` | Stable id for the surfaced set. |
| `scope` | Context in which the surface applies. |
| `tool_refs` | Tools that can be considered. |
| `loaded_tools` | Tools whose schemas are visible now. |
| `deferred_tools` | Discoverable but not fully loaded tools. |
| `blocked_tools` | Tools hidden with machine-readable reasons. |
| `excluded_tools` | Tools removed by role, recursion, feature, model, or policy filters. |
| `selection_policy` | How the model or runtime may select tools. |
| `default_tool_choice` | `auto`, `none`, `required`, or tool-specific hint. |
| `role_constraints` | Agent type, coordinator mode, background worker, or human role constraints. |
| `model_capabilities` | Provider support for strict schemas, parallel calls, deferred refs, media, etc. |
| `policy_refs` | Adjacent policy decisions or constraints. |
| `runtime_refs` | Runtime, session, task, or sandbox refs. |

A surface should be regenerated when policy, credentials, workspace, active skill, peer agent, model capability, feature gates, or runtime mode changes.

## Filtering

Surface filters SHOULD record reasons. Examples:

- recursive agent tool blocked inside subagents.
- human-interaction tool blocked in non-interactive mode.
- write tool blocked by permission mode.
- MCP tool deferred until discovered.
- browser tool excluded because no browser session exists.
- shell tool excluded by sandbox or platform policy.
