# Agent Tool

Agent Tool is a portable draft standard for agent tool surfaces: tool declarations, context-specific tool surfaces, input/output contracts, execution profiles, permission profiles, invocations, progress, cancellation, results, errors, resource refs, artifact refs, policy refs, evidence refs, and telemetry refs.

It interoperates with MCP, OpenAPI, function calling APIs, Agent Runtime, Agent UI, Agent Policy, Agent Evidence, Agent Artifact, Agent Knowledge, Agent Skills, telemetry, and peer-agent systems without taking ownership of those systems.

## What v0.1.0 defines

- Tool declarations with stable identity, namespace, lifecycle, kind, schemas, capability refs, and external mappings.
- Tool surfaces for scoped and deferred tool availability.
- Input and output contracts for structured arguments and results.
- Execution profiles and permission profiles.
- Invocation lifecycle, progress, cancellation, timeout, retry, and result envelopes.
- Error taxonomy and lifecycle events.
- Public JSON Schemas and LLM-friendly `llms.txt` / `llms-full.txt` entrypoints.

## Documentation

- [Specification](docs/en/specification.md)
- [Tool model](docs/en/concepts/tool-model.md)
- [Tool declaration](docs/en/contracts/tool-declaration.md)
- [Tool surface](docs/en/contracts/tool-surface.md)
- [Invocation lifecycle](docs/en/contracts/invocation-lifecycle.md)
- [Result envelope](docs/en/contracts/result-envelope.md)
- [JSON Schemas](docs/en/reference/json-schemas.md)
- [Research sources](docs/en/reference/research-sources.md)
- [中文规范](docs/zh/specification.md)

## LLM entrypoints

- [`llms.txt`](llms.txt): concise navigation index for AI clients.
- [`llms-full.txt`](llms-full.txt): concatenated current English documentation with source URLs.
- [`llm.txt`](llm.txt) and [`llm-full.txt`](llm-full.txt): compatibility aliases.

## Related Agent standards

- [Agent Knowledge](https://limecloud.github.io/agentknowledge/) - source-grounded knowledge packs.
- [Agent UI](https://limecloud.github.io/agentui/) - interaction surfaces for agent products.
- [Agent Runtime](https://limecloud.github.io/agentruntime/) - execution facts, controls, tasks, tools, and recovery.
- [Agent Evidence](https://limecloud.github.io/agentevidence/) - evidence, provenance, verification, review, replay, and export.
- [Agent Policy](https://limecloud.github.io/agentpolicy/) - policy decisions, approvals, permissions, risk, retention, waivers, and traces.
- [Agent Artifact](https://limecloud.github.io/agentartifact/) - durable deliverables, versions, parts, previews, exports, and handoff packages.
- [Agent Tool](https://limecloud.github.io/agenttool/) - tool declarations, surfaces, invocations, progress, results, permissions, and audit refs.
- [Agent Context](https://limecloud.github.io/agentcontext/) - context surfaces, items, source refs, selection, budgets, assembly, injection, compaction, and missing-context facts.

See the [Agent standards ecosystem](docs/en/reference/agent-ecosystem.md) page for the mutual-link map and future standard candidates.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated at `docs/.vitepress/dist`.
