# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Sistema de versionado con soporte para tags
- Comando `--version` y `--help` en el instalador
- Script automatizado de release (`release.sh`)
- Documentación completa de versionado (`VERSIONING.md`)
- CHANGELOG.md para rastrear cambios

### Changed
- El instalador ahora muestra la versión dinámica desde package.json

## [1.0.0] - 2026-02-05

### Added
- Release inicial con 14 skills globales para Antigravity
- Skills incluidos:
  - 01-context-analyzer
  - 02-idea-refiner
  - 03-technical-documentation
  - 04-code-architect
  - 05-code-quality-auditor
  - 06-integration-api-designer
  - 07-database-schema-designer
  - 08-testing-strategy
  - 09-deployment-devops
  - 10-business-logic-validator
  - 11-knowledge-extractor
  - 12-migration-modernizer
  - 13-ui-ux-designer
  - 14-frontend-stylist
- Dependencia find-skills incluida
- CLI installer con interfaz visual
- Documentación completa (README.md, PUBLISHING.md)
- Script de publicación automatizado (publish.sh)
- Licencia MIT

### Infrastructure
- Configuración de package.json para npm
- Soporte para instalación vía npx desde GitHub
- Estructura de directorios optimizada

---

## Tipos de Cambios

- **Added**: Para nuevas funcionalidades
- **Changed**: Para cambios en funcionalidades existentes
- **Deprecated**: Para funcionalidades que serán eliminadas pronto
- **Removed**: Para funcionalidades eliminadas
- **Fixed**: Para corrección de bugs
- **Security**: Para vulnerabilidades de seguridad

---

[Unreleased]: https://github.com/kamuxx/fullstack-_skills/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/kamuxx/fullstack-_skills/releases/tag/v1.0.0
