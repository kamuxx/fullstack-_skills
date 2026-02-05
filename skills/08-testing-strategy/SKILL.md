---
name: Testing Strategy
description: Defines and implements the verification layer (Unit, Integration, E2E) to guarantee reliability.
---

# Skill: Testing Strategy (The QA Lead)

## Purpose
To prove the code works before the user sees it. It shifts testing "Left" (Developers write tests). It ensures refactoring (Skill 05/12) is safe.

## Context Compatibility (User: Lester Rodriguez)
Essential for "Sistemas de Gestión de Beneficiarios" and "Facturación Electrónica" where errors have legal/social consequences. It validates the "Criterios de Aceptación".

## Inputs
1.  **User Stories & Acceptance Criteria:** (From Skill 03).
2.  **Source Code:** (From coding phase).

## Process
1.  **Unit Testing:** Isolate classes/functions (PHPUnit / Go Test / Jest).
    -   *Mocking:* Mock external APIs (Skill 06).
2.  **Integration Testing:** Test Database + API interactions.
3.  **E2E Testing:** (Optional) Cypress/Playwright for critical flows.

## Outputs
1.  **Test Suite:** Executable test files.
2.  **Coverage Report:** Metric of safety.
3.  **CI Gate Configuration:** Fails the build if tests fail.

## Sub-Skills Triggered
-   Trigger `09-deployment-devops` to run these tests automatically in CI.
