---
layout: home
hero:
  name: Agent Tool
  text: Portable tool systems for agents
  tagline: Declarations, runtime interfaces, scoped surfaces, input mutation, permission decisions, scheduling, progress, results, persistence, and audit links for tools used by agents.
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
    details: Stable ids, aliases, namespaces, search hints, schemas, capability refs, risk scopes, and native mappings.
  - title: Execute tools safely
    details: Separate model input from observable, permission, and call input; preserve validation, hooks, permission decisions, and scheduling facts.
  - title: Keep outputs portable
    details: Result envelopes link model content, UI rendering, persisted payloads, resources, artifacts, evidence, policy, runtime events, and telemetry spans.
---

# Agent Tool

Agent Tool is a portable standard for the tool layer in agent systems. It defines how tools are described, selected, invoked, authorized, scheduled, streamed, monitored, constrained, persisted, rendered, and returned without replacing MCP, OpenAPI, function calling APIs, runtime executors, UI renderers, policy engines, evidence archives, or artifact stores.

Use Agent Tool when a product needs stable semantics for capabilities such as file access, web search, browser control, shell commands, code execution, API calls, media generation, document extraction, tool search, MCP servers, peer-agent calls, and native application actions.
