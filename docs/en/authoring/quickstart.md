---
title: Implementation quickstart
description: Quickstart for implementing Agent Tool.
---

# Implementation Quickstart

1. Inventory native tools and preserve their original ids.
2. Create `tool_declaration` records with namespace, aliases, search hints, kind, lifecycle, input contract, output contract, and mappings.
3. Create `tool_interface` records for validation, safety classification, permission matching, result mapping, and persistence boundaries.
4. Create permission profiles for tools that read, write, access credentials, use network, run code, mutate remote systems, or require user interaction.
5. Build small `tool_surface` records per turn or task instead of exposing the whole catalog.
6. Mark large catalogs with `deferred_tool_ref` records and expose tool search.
7. Wrap every call in a `tool_invocation` envelope.
8. Preserve `model_input`, `observable_input`, `permission_input`, and `call_input` separately.
9. Emit hook, permission, scheduler, progress, persistence, and terminal result events.
10. Link results to resources, artifacts, evidence, policy decisions, runtime events, and telemetry spans.
11. Keep native protocol payloads available by ref where possible.
