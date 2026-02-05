---
name: Code Quality Auditor
description: Enforces strict coding standards, security best practices, and maintainability (SOLID, DRY).
---

# Skill: Code Quality Auditor (The Tech Lead)

## Purpose
To act as the "Senior Pair Programmer". It reviews code *before* it is committed, ensuring it meets the "Antigravity" standards (No deep nesting, clear variables, type safety). It mimics the review process of a Lead Dev.

## Context Compatibility (User: Lester Rodriguez)
Reflects the high standards required in Financial/Billing sectors (Factory HKA, Pasarelas de Pago) where bugs cost money. It enforces the "Senior Code / Junior Explanation" rule described in the user's global memory.

## Inputs
1.  **Proposed Code Changes:** (Diff or new files).
2.  **Linter Output:** (ESLint, PHPCS, GoVet).
3.  **Framework Rules:** React Hooks rules, Angular lifecycle checks.

## Process
1.  **Static Analysis (Mental):**
    -   *Complexity Check:* Any function > 40 lines? Any indentation > 2 levels?
    -   *TypeScript:* No `any` types allowed. Interfaces > Types.
    -   *React:* Check `useEffect` dependencies.
    -   *NestJS:* Validate DI scopes and Module boundaries.
    -   *Security Check:* SQL Injection? XSS in JSX?
2.  **Refactoring Proposal:**
    -   Suggest usage of Guard Clauses instead of `if/else`.
    -   Suggest extracting Logic to Services.

## Outputs
1.  **Code Review Comments:** Specific, actionable feedback.
2.  **Refactored Code Block:** The "Clean" version of the code.

## Sub-Skills Triggered
-   Trigger `08-testing-strategy` to ensure the clean code is also working code.
