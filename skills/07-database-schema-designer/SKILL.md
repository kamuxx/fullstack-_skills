---
name: Database Schema Designer
description: Designs optimized, normalized, and scalable data models (SQL/NoSQL).
---

# Skill: Database Schema Designer (The DBA)

## Purpose
To create the "Memory" of the system. It ensures data is stored efficiently, referring to constraints and relationships. It moves beyond "creating tables" to "designing persistence".

## Context Compatibility (User: Lester Rodriguez)
Reflects extensive experience with:
-   **Multi-DB Environments:** SQL Server, Oracle, MySQL, PostgreSQL.
-   **Heavy Data Processing:** "Optimización de consultas", "Control de recibos de nómina".
-   **Legacy:** PL/SQL, T-SQL usage.

## Inputs
1.  **Domain Entities:** (From Skill 04/02).
2.  **Performance Req:** "Must handle millions of invoices".

## Process
1.  **Normalization:** Ensure 3NF by default.
2.  **Indexing Strategy:** Define indexes based on query patterns (not just Primary Keys).
3.  **Migration Scripting:** Write versioned migrations (Laravel Migrations / Go Migrate) instead of manual SQL.

## Outputs
1.  **ER Diagram (Mermaid):** Visual representation.
2.  **Migration Files:** Code to create the schema.
3.  **Seeders:** Dummy data for development.

## Sub-Skills Triggered
-   Trigger `12-migration-modernizer` if migrating data from an old schema to a new one.
