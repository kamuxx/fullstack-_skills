---
name: Deployment & DevOps
description: Automates the delivery pipeline, server management, and production constraints (CI/CD, Docker, Linux).
---

# Skill: Deployment & DevOps (The SysAdmin)

## Purpose
To get code from "localhost" to "production" reliably. It manages the "last mile" of development.

## Context Compatibility (User: Lester Rodriguez)
Reflects:
-   **Linux Servers:** "Manejo de Servidores Linux para deploys".
-   **Automation:** "N8N", "Servidores MCP propios".
-   **Containers:** Modern usage of Docker/K8s (implied in Go/Microservices).

## Inputs
1.  **Application Code.**
2.  **Target Infrastructure:** (VPS, Cloud, On-Premise).

## Process
1.  **Containerization:** Write `Dockerfile` multisetup builds (Small images).
2.  **CI/CD Pipeline:** GitHub Actions / GitLab CI.
    -   Steps: Lint -> Test -> Build -> Deploy.
3.  **Orchestration:** `docker-compose.prod.yml` or Nginx configs.

## Outputs
1.  **Deploy Scripts:** `.sh` or `.yaml` pipelines.
2.  **Infrastructure Config:** Nginx sites-available, systemd services.
3.  **Rollback Strategy:** How to undo a bad deploy.

## Sub-Skills Triggered
-   None. This is usually the end of the line (The Release).
