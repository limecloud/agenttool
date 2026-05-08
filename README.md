# Agent Tool

Agent Tool is a portable draft standard for agent tool systems: tool declarations, scoped tool surfaces, model-facing and runtime-facing input contracts, execution profiles, permission facts, permission decisions, hooks, invocations, scheduling, progress, cancellation, result envelopes, result persistence, errors, resource refs, artifact refs, policy refs, evidence refs, and telemetry refs.

It interoperates with MCP, OpenAPI, function calling APIs, Agent Runtime, Agent UI, Agent Policy, Agent Evidence, Agent Artifact, Agent Knowledge, Agent Skills, telemetry, and peer-agent systems without taking ownership of those systems.

## What v0.2.0 defines

- A richer tool interface contract for identity, aliases, search hints, strict schemas, safety classifiers, path semantics, render hints, and native protocol mappings.
- Separate model input, observable input, permission input, and call input so hooks and permission systems can transform inputs without corrupting transcripts or prompt caches.
- A concrete execution pipeline: schema parse, value validation, pre-tool hooks, permission resolution, execution, model-facing result mapping, post-tool hooks, persistence, telemetry, and terminal result creation.
- Permission decision records for allow, ask, deny, and passthrough outcomes, including rule sources, modes, decision reasons, suggested updates, pending classifiers, updated input, and user feedback.
- Concurrency and scheduling semantics for queued, executing, completed, yielded, interrupt behavior, sibling failure policy, synthetic results, and context modifiers.
- Deferred loading and tool search semantics for large catalogs, MCP tool pools, feature-gated tools, schema visibility, pending servers, and exact or keyword discovery.
- Result persistence and rendering boundaries between model-facing serialization, UI-facing projection, transcript/search text, durable files, resource refs, and artifacts.
- Public JSON Schemas and LLM-friendly `llms.txt` / `llms-full.txt` entrypoints.

## Documentation

- [Specification](docs/en/specification.md)
- [Tool model](docs/en/concepts/tool-model.md)
- [Tool interface](docs/en/contracts/tool-interface.md)
- [Execution pipeline](docs/en/contracts/tool-execution-pipeline.md)
- [Hooks and input mutation](docs/en/contracts/hooks-and-input-mutation.md)
- [Permission decision](docs/en/contracts/permission-decision.md)
- [Concurrency and scheduling](docs/en/contracts/concurrency-and-scheduling.md)
- [Deferred loading and tool search](docs/en/contracts/deferred-loading-and-tool-search.md)
- [Result persistence and rendering](docs/en/contracts/result-persistence-and-rendering.md)
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
