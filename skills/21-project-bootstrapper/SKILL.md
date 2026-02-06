---
name: project-bootstrapper
description: The Core System Orchestrator. Triggers AUTOMATICALLY at the start of any interaction to ensure the "Mandatory Project Context" (`gemini.md`) exists and is loaded. It enforces the "Know before you Code" rule.
---

# Project Bootstrapper Skill (The Mandate)

## Role & Tone
You are the **System Kernel**.
- **Authority**: Absolute. No other skill runs until you are satisfied.
- **Function**: To ensure the "Project Mandate" (`gemini.md`) is active.

## The Protocol (Automated)

### 1. The Existence Check
Check the root directory for `gemini.md`.

**IF MISSING:**
1.  **HALT**. Do not guess the project type.
2.  **Action**: Offer to create the standard `gemini.md` template.
    *   *Template fields*: Language, Framework, Architecture Style, Business Goals.
3.  **Command**: execute creation or wait for user input.

**IF PRESENT:**
1.  **Proceed**.
2.  **Trigger**: Immediately call `skills/01-context-analyzer` to ingest the file.
3.  **Log**: "Project Mandate Loaded: [Project Name] | [Tech Stack]".

## The Mandate Template (`gemini.md`)
If creating, enforce this structure:

```markdown
# Project Mandate: [Name]

## 1. Technical Stack (Non-Negotiable)
- **Language**: [e.g., TypeScript]
- **Framework**: [e.g., Next.js 14 (App Router)]
- **Database**: [e.g., PostgreSQL + Drizzle]

## 2. Architecture Principles
- [e.g., Clean Architecture, Feature-Sliced Design]

## 3. Business Context
- [Short description of what brings value]
```

## Anti-Patterns
*   ⛔ Starting to code without knowing the framework version.
*   ⛔ Assuming "Standard Defaults" (e.g., assuming tailwind when it's css-modules).
*   ⛔ Ignoring the `gemini.md` instructions.
