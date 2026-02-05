---
name: Business Logic Validator
description: Isolates and validates the core business rules, ensuring they are decoupled from frameworks and UI.
---

# Skill: Business Logic Validator (The Domain Expert)

## Purpose
To protect the "Crown Jewels" of the software: The Business Rules. It prevents logic from leaking into Controllers or Views. It ensures that "Calculating a Tax" works the same whether called from an API, a CLI, or a Delayed Job.

## Context Compatibility (User: Lester Rodriguez)
Critical for:
-   **Payroll (Nómina):** Complex calculations based on laws.
-   **Billing (Facturación):** Tax rules, retention, exemptions.
-   **Voting (Electoral):** Strict validation of candidacy eligibility.

## Inputs
1.  **User Stories:** Specific "Given/When/Then" criteria.
2.  **Legal/Compliance Docs:** "Ley del Trabajo", "Reglamento Fiscal".

## Process
1.  **Isolation:** Extract logic to `Domain Services` or `Entities`.
    -   *Bad:* Calculating tax in a Controller.
    -   *Good:* `TaxCalculatorService->calculate($invoice)`.
2.  **Boundary Testing:** Test edge cases (Zero values, Negative values, Max limits).
3.  **Invariant Checking:** Ensure state validatity (e.g., "An invoice cannot be paid if it is cancelled").

## Outputs
1.  **Clean Domain Classes:** POPOs (Plain Old PHP Objects) / Structs.
2.  **Validation Rules:** Reusable validation logic.

## Sub-Skills Triggered
-   Trigger `08-testing-strategy` to unit test these rules heavily.
