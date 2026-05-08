---
title: Tool model
description: Agent Tool tool model.
---

# Tool Model

Agent Tool separates ideas that are often collapsed into one word.

| Layer | Question | Examples |
| --- | --- | --- |
| Declaration | What can be called? | `get_weather`, `read_file`, `browser.click`, `generate_image`. |
| Interface | How does this tool validate, authorize, execute, stream, render, and persist? | strict schema, read-only classifier, progress mapper, result mapper. |
| Surface | Which declarations are visible now? | Turn tools, task tools, skill-activated tools, tenant-limited tools, deferred tools. |
| Invocation | What did the agent request? | Arguments, actor, policy refs, native call id, status. |
| Permission decision | Was this call allowed, denied, asked, or delegated? | Rule decision, classifier decision, human approval, passthrough. |
| Scheduling | When and with what concurrency can it run? | Parallel reads, exclusive writes, interrupt behavior, sibling failure policy. |
| Execution | How was it run? | MCP server, local native command, browser executor, API adapter, model task. |
| Result | What came back? | Text, structured JSON, resource refs, artifact refs, errors, telemetry refs. |
| Persistence/rendering | How is output shown and stored? | Inline result, persisted preview, UI card, transcript search text. |

A portable implementation should preserve these layers even when a provider exposes them as a single object.

## Identity

Use stable `tool_id` for the portable declaration and preserve native ids in `external_mappings`. Do not rename an MCP tool, OpenAPI operation, browser action, provider function, CLI command, or A2A task/artifact in a way that loses its original identity.

## Selection

Selection is context-specific. A tool may exist in a catalog but be absent from a surface because policy blocked it, setup is missing, the model lacks required capability, the current task should not see it, or the tool is deferred until discovered.

## Input boundary

Do not treat tool input as a single mutable object. Keep model-provided arguments separate from observable, permission, and final call input.

## Results

A tool result may be final, partial, denied, rejected, redacted, too large, synthetic, or converted into a durable artifact. The result envelope should explain which case occurred instead of hiding it behind plain text.
