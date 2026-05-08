---
title: Implementation quickstart
description: Quickstart for implementing Agent Tool.
---

# Implementation Quickstart

1. Inventory native tools and preserve their original ids.
2. Create `tool_declaration` records with namespace, kind, lifecycle, input contract, output contract, and mappings.
3. Create permission profiles for tools that read, write, access credentials, use network, run code, or mutate remote systems.
4. Build small `tool_surface` records per turn or task instead of exposing the whole catalog.
5. Wrap every call in a `tool_invocation` envelope.
6. Emit progress and terminal result events.
7. Link results to resources, artifacts, evidence, policy decisions, runtime events, and telemetry spans.
8. Keep native protocol payloads available by ref where possible.
