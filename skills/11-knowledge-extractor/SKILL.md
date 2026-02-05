---
name: Knowledge Extractor
description: Analyzes legacy or undocumented codebases to understand "How it works properly" before changing it.
---

# Skill: Knowledge Extractor (The Archaeologist)

## Purpose
To understand the "Chesterton's Fence". Before removing or changing code, this skill understands *why* it was put there. It reads old configurations, comments, and commit logs.

## Context Compatibility (User: Lester Rodriguez)
Reflects the reality of working with:
-   **Legacy Systems:** Oracle Weblogic, Old Laravel versions, Vanilla PHP.
-   **Inherited Projects:** "Desarrollo y mantenimiento a ERP Jirehweb (PHP Vanilla)".

## Inputs
1.  **Legacy Codebase.**
2.  **Database Dumps.**
3.  **Old Logs.**

## Process
1.  **Tracer Bullets:** Follow a request from Route -> Controller -> DB to map the flow.
2.  **Dependency Mapping:** What external services does this rely on?
3.  **Implicit Logic Detection:** Finding "Magic Numbers" or hardcoded IDs.

## Outputs
1.  **System Map:** "How it works today".
2.  **Risk Register:** "If we touch X, Y might break".
3.  **Glossary:** Terms used in the code ("Beneficiario", "Candidato").

## Sub-Skills Triggered
-   Trigger `01-context-analyzer` to update the context report.
-   Trigger `12-migration-modernizer` to plan the exit.
