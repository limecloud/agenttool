---
layout: home
hero:
  name: Agent Tool
  text: Portable tool surfaces for agent systems
  tagline: Declarations, capability refs, invocation lifecycle, progress, results, permissions, and audit links for tools used by agents.
  image:
    src: /logo.svg
    alt: Agent Tool logo
  actions:
    - theme: brand
      text: Read the specification
      link: /en/specification
    - theme: alt
      text: LLM full context
      link: ../llms-full.txt
features:
  - title: Declare tools clearly
    details: Stable ids, namespaces, input/output schemas, capability refs, risk scopes, and execution profiles.
  - title: Invoke tools safely
    details: Invocation ids, approval gates, progress events, cancellation, retries, timeouts, and structured errors.
  - title: Keep outputs portable
    details: Result envelopes link to resources, artifacts, evidence, policy decisions, runtime events, and telemetry spans.
---

# Agent Tool

Agent Tool is a portable standard for the tool layer in agent systems. It defines how tools are described, selected, invoked, monitored, constrained, and returned without replacing MCP, OpenAPI, function calling APIs, runtime executors, UI renderers, policy engines, evidence archives, or artifact stores.

Use Agent Tool when a product needs stable semantics for capabilities such as file access, web search, browser control, code execution, API calls, media generation, document extraction, tool search, and native application actions.
