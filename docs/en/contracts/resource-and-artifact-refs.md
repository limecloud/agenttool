---
title: Resource and artifact refs
description: Agent Tool resource and artifact refs.
---

# Resource and Artifact Refs

Tool outputs often become resources or artifacts.

Use resource refs for context that can be fetched or subscribed to by a protocol such as MCP. Use artifact refs when the output becomes a durable deliverable with identity, versions, preview, export, or handoff semantics.

A tool result MAY include both. For example, a browser tool may return a screenshot resource and create a browser snapshot artifact.

Refs SHOULD include ids, URI or native ref, media type, digest when available, access constraints, and source relation.

