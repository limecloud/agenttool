# Agent Tool v0.2.0

Agent Tool v0.2.0 turns the draft from a simple declaration/result vocabulary into a practical tool-runtime contract.

## Highlights

- Rich tool interface: identity, aliases, search hints, strict schemas, read/write/destructive/open-world flags, classifier input, path matching, and render/search text boundaries.
- Safer input flow: model input, observable input, permission input, and call input are separate records.
- Execution pipeline: schema parse, validation, hooks, permission resolution, tool call, result mapping, post hooks, persistence, telemetry, and terminal result events.
- Permission decisions: allow, ask, deny, and passthrough with rule sources, decision reasons, suggested updates, classifier status, updated input, and user feedback.
- Concurrency and scheduling: queued/executing/completed/yielded states, safe parallel tools, exclusive tools, interrupts, sibling failure policy, and synthetic results.
- Deferred loading: schema visibility, discoverable tool refs, tool search, pending servers, exact selection, keyword search, and large catalog handling.
- Result persistence: model-facing output, UI-facing rendering, transcript search text, large result preview, durable refs, and artifact/resource links.

## Compatibility

- `schema_version` should be `0.2.0` for new records.
- v0.1.x records remain readable; consumers should tolerate unknown fields.
- Native MCP, OpenAPI, provider function calling, A2A, CLI, browser, and telemetry ids must be preserved in `external_mappings` or adjacent refs.
