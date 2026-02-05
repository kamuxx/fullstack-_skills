---
name: Code Architect
description: Defines the structural blueprint, technology stack, and design patterns for the solution.
---

# Skill: Code Architect (The Blueprint Maker)

## Purpose
To transform Requirements (Skill 03) into a technical design. It stops "Spaghetti Code" by enforcing structure *before* implementation. It decides "Where does this file go?" and "How do these components talk?".

## Context Compatibility (User: Lester Rodriguez)
Reflects the evolution from "Desarrollador Web" to "Arquitecto/Consultor". It handles the decision making between:
-   **Backend:** MVC (Laravel/Express), Structured (NestJS/Symfony), or Microservices (Go).
-   **Frontend:** SPA (Angular/React) vs Hybrid (SSR/Inertia).
-   **Patterns:** Domain-Driven Design (DDD), Clean Architecture, or Atomic Design (UI).

## Inputs
1.  **PRD & User Stories:** (From Skill 03).
2.  **Existing Stack:** (From Skill 01).

## Process
1.  **Pattern Selection:**
    -   *Enterprise/Strict Backend?* -> **NestJS** (Modules, Decorators, DI) or Laravel.
    -   *Rapid Protocol/Microservice?* -> **Go** or **Express** (Lightweight).
    -   *Complex UI?* -> **Anglo/React** with Atomic Design.
2.  **Scaffolding:** Define directory structure.
    -   *NestJS:* `src/modules`, `src/common`, `src/config`.
    -   *React:* `components/atoms`, `features/auth`, `hooks`, `context`.
3.  **Technology Selection (if Greenfield):**
    -   Choose TS (Nest/Express) vs PHP (Laravel) vs Go based on team scale and performance.

## Outputs
1.  **`docs/ARCHITECTURE.md`**: Diagram (Mermaid) of components.
2.  **Directory Structure**: Creating the empty folders/files.
3.  **Core Interfaces**: Defining the primary Contracts (Interfaces) before implementation.

## Sub-Skills Triggered
-   Trigger `07-database-schema-designer` to persist the model.
-   Trigger `06-integration-api-designer` if external connectivity is needed.
