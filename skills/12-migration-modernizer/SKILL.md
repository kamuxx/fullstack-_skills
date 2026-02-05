---
name: Migration Modernizer
description: Defines the strategy for upgrading systems (Legacy -> Modern) reducing risk and downtime.
---

# Skill: Migration Modernizer (The Transformer)

## Purpose
To move from State A (Old) to State B (New) without killing the business. It avoids the "Big Bang Rewrite" trap. It prefers incremental strangulation.

## Context Compatibility (User: Lester Rodriguez)
The culmination of the profile:
-   PHP Vanilla -> Laravel.
-   Monolith -> Microservices (Go).
-   On-Premise -> Cloud.

## Inputs
1.  **Legacy Analysis:** (From Skill 11).
2.  **Target Architecture:** (From Skill 04).

## Process
1.  **Strategy Selection:**
    -   *Strangler Fig:* Replace one route at a time.
    -   *Database First:* Share DB, write new app on top.
    -   *UI First:* New Frontend, Old Backend.
2.  **Dual Running:** Run both systems in parallel to verify parity.
3.  **Cutover:** Switch DNS/Routing.

## Outputs
1.  **Migration Roadmap:** Phases and milestones.
2.  **Data Migration Scripts:** ETL (Extract, Transform, Load).
3.  **Fallback Plan:** "Panic Button" to revert.

## Sub-Skills Triggered
-   Trigger `07-database-schema-designer` for the new schema.
-   Trigger `06-integration-api-designer` to facade the old system.
