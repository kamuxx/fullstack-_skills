---
name: Technical Documentation
description: Generates the "Single Source of Truth" artifacts (PRD, Stories, RTM) ensuring traceability and professional standards.
---

# Skill: Technical Documentation (The Scribe)

## Purpose
To create professional, auditable documentation. In high-level engineering (especially Government and FinTech roles like Factory HKA), code without specs is non-compliant. This skill ensures every feature is traceable to a requirement.

## Context Compatibility (User: Lester Rodriguez)
Aligned with the "Software Engineering" root (UNEFA 2014) and the strict documentation needs of "Metodología de Desarrollo" in corporate environments. It bridges the "Analyst" and "Developer" roles.

## Inputs
1.  **Concept Definition:** (From Skill 02).
2.  **Technical Stack:** (From Skill 04 Decision).

## Process
1.  **Draft PRD (Product Requirements Document):** The high-level master plan.
2.  **Breakdown to User Stories:**
    -   Format: `As a <role>, I want <feature>, so that <value>`.
    -   *Acceptance Criteria:* Boolean conditions for success.
3.  **Traceability Matrix (RTM):** Mapping ID <-> Story <-> File.

## Outputs
1.  **`docs/PRD.md`**: The master document.
2.  **`docs/USER_STORIES.md`**: The backlog.
3.  **`docs/ARCHITECTURE_DECISION_RECORDS.md`**: Why we chose X over Y.

## Sub-Skills Triggered
-   Trigger `04-code-architect` to implement the stories.
-   Trigger `08-testing-strategy` to write tests for the Acceptance Criteria.
