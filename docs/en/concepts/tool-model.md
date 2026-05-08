---
title: Tool model
description: Agent Tool tool model.
---

# Tool Model

Agent Tool separates five ideas that are often collapsed into one word.

| Layer | Question | Examples |
| --- | --- | --- |
| Declaration | What can be called? | `get_weather`, `read_file`, `browser.click`, `generate_image`. |
| Surface | Which declarations are visible now? | Turn tools, task tools, skill-activated tools, tenant-limited tools. |
| Invocation | What did the agent request? | Arguments, actor, policy refs, native call id, status. |
| Execution | How was it run? | MCP server, local native command, browser executor, API adapter, model task. |
| Result | What came back? | Text, structured JSON, resource refs, artifact refs, errors, telemetry refs. |

A portable implementation should preserve these layers even when a provider exposes them as a single object.

## Identity

Use stable `tool_id` for the portable declaration and preserve native ids in `external_mappings`. Do not rename an MCP tool, OpenAPI operation, browser action, or provider function in a way that loses its original identity.

## Selection

Selection is context-specific. A tool may exist in a catalog but be absent from a surface because policy blocked it, setup is missing, the model lacks required capability, or the current task should not see it.

## Results

A tool result may be final, partial, redacted, too large, or converted into a durable artifact. The result envelope should explain which case occurred instead of hiding it behind plain text.

