---
name: Context Analyzer
description: Analyzes the project environment (Legacy vs Green), identifies constraints, and determines the architectural tone.
---

# Skill: Context Analyzer (The Consultant)

## Purpose
To act as the initial "Grounding" layer. Before answering *how* to build something, this skill determines *where* it is being built. It prevents "Resume Driven Development" by forcing a reality check against the existing infrastructure (Legacy Oracle, Old PHP, Government Servers) or defining the freedom of a new stack (Go/Node).

## Context Compatibility (User: Lester Rodriguez)
This skill embodies Lester's ability to navigate between:
-   **Strict Enterprise/Gov Environments:** High constraints, Java/Oracle Legacy.
-   **Modern Full-Stack Ecosystem:** **React/Angular** frontends, **NestJS/Express** backends, Microservices.

## Inputs
1.  **Project Root File List:** To detect existing frameworks (composer.json, package.json, pom.xml).
2.  **User Statement:** The initial prompt (e.g., "Fix this bug" vs "Create a new app").
3.  **Environment Variables/Config:** `.env` examples, Dockerfiles.

## Process
1.  **Scan:** Read the root directory.
    -   *If `artisan` exists:* Context = Laravel.
    -   *If `nest-cli.json` exists:* Context = **NestJS** (Strict Architecture).
    -   *If `angular.json` exists:* Context = **Angular** (Component Structure).
    -   *If `vite.config` or `next.config` exists:* Context = **React** (Modern Frontend).
    -   *If `go.mod` exists:* Context = Go.
2.  **Classify Project Stage:**
    -   *Greenfield:* Empty folder or just initialized.
    -   *Brownfield:* Existing code, maintenance mode.
    -   *Migration:* Hybrid of old and new files.
3.  **Identify Constraints:**
    -   Look for "Oracle", "SOAP", "WSDL", "Fiscal", "Invoice". These trigger strict "Integrator" protocols.

## Outputs
1.  **Context Report (Ephemeral or File):**
    > **Context:** Legacy PHP Application (Laravel 5.8)
    > **Database:** Oracle 11g (Detected via config)
    > **Constraint:** Fiscal/Tax Logic detected (Factory HKA references)
    > **Recommended Interaction Mode:** Careful Refactor (Risk Averse).

## Sub-Skills Triggered
-   If `Greenfield` -> Trigger `02-idea-refiner`.
-   If `Brownfield` -> Trigger `11-knowledge-extractor`.
