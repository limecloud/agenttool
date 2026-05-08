# Changelog

## v0.2.0 - 2026-05-08

Major Agent Tool depth release.

- Adds a complete tool interface model for aliases, search hints, strict schemas, safety flags, path semantics, classifier input, render hooks, and native mappings.
- Separates `model_input`, `observable_input`, `permission_input`, and `call_input` so hooks and permission systems can mutate safely.
- Adds a normative execution pipeline with schema parse, value validation, pre hooks, permission resolution, execution, result mapping, post hooks, persistence, telemetry, and terminal results.
- Adds permission decision, hook, scheduler, deferred loading, result persistence, and input mutation contracts.
- Adds concurrency semantics for safe parallel reads, exclusive write tools, sibling failure cancellation, interrupt behavior, yielded results, and synthetic errors.
- Adds deferred loading and tool search guidance for large catalogs and MCP-backed tools.
- Adds richer examples for shell sandboxing, deferred discovery, permission retry, large-result persistence, and parallel read tools.
- Expands public JSON Schemas, LLM entrypoints, source analysis, and version snapshots.

## v0.1.1 - 2026-05-08

- Adds Agent Context to the current standards ecosystem map.
- Refreshes README, LLM entrypoints, and version snapshots for Agent Context discovery.

## v0.1.0 - 2026-05-08

Initial public Agent Tool draft.

- Adds tool declarations, surfaces, input/output contracts, execution profiles, permission profiles, invocations, progress, results, errors, and events.
- Adds public JSON Schemas.
- Adds English and Chinese documentation.
- Adds LLM-friendly `llms.txt`, `llms-full.txt`, `llm.txt`, and `llm-full.txt`.
