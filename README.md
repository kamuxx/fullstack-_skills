# 🚀 Antigravity Full-Stack Skills

[![npm version](https://img.shields.io/npm/v/@kamuxx/fullstack-skills.svg)](https://www.npmjs.com/package/@kamuxx/fullstack-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**14 Global Skills** para el sistema **Antigravity Agent** - Un conjunto modular de capacidades de arquitectura Full-Stack de nivel Senior.

## 📋 ¿Qué es esto?

Este paquete contiene **14 skills especializados** que transforman a Antigravity en un arquitecto de software completo, capaz de:

- 🔍 Analizar contextos Legacy y Greenfield
- 🏗️ Diseñar arquitecturas escalables
- 🔌 Integrar sistemas complejos (REST, SOAP, Webhooks)
- ✅ Garantizar calidad y testing
- 🎨 Crear interfaces premium
- 🚀 Automatizar despliegues
- 🔧 Modernizar sistemas legacy

## 🎯 Skills Incluidos

### **Fase 1: Análisis y Planificación**
- `01-context-analyzer` - Diagnóstico de entorno (Laravel, NestJS, React, etc.)
- `02-idea-refiner` - Refinamiento de requisitos
- `03-technical-documentation` - Generación de PRDs y User Stories

### **Fase 2: Diseño Arquitectónico**
- `04-code-architect` - Definición de stack y patrones
- `07-database-schema-designer` - Diseño de esquemas de datos
- `13-ui-ux-designer` - Conceptualización de UX/UI

### **Fase 3: Integración**
- `06-integration-api-designer` - Diseño de APIs y contratos
- `10-business-logic-validator` - Validación de reglas de negocio

### **Fase 4: Calidad**
- `05-code-quality-auditor` - Auditoría de código
- `08-testing-strategy` - Estrategias de testing

### **Fase 5: Implementación Visual**
- `14-frontend-stylist` - CSS, Tailwind, Animaciones

### **Fase 6: Despliegue**
- `09-deployment-devops` - CI/CD, Docker, Linux

### **Fase 7: Mantenimiento**
- `11-knowledge-extractor` - Análisis de código legacy
- `12-migration-modernizer` - Estrategias de migración

## 📦 Instalación

### Opción 1: NPX (Recomendado)
```bash
npx @kamuxx/fullstack-skills
```

### Opción 2: Instalación Global
```bash
npm install -g @kamuxx/fullstack-skills
install-skills
```

### Opción 3: Instalación Local
```bash
npm install @kamuxx/fullstack-skills
npx install-skills
```

## 🛠️ Requisitos

- **Node.js** >= 14.0.0
- **Antigravity Agent** instalado en `~/.gemini/antigravity/`

## 📖 Uso

Una vez instalados, los skills estarán disponibles automáticamente en Antigravity. El agente los invocará según el contexto:

### Ejemplo: Proyecto Nuevo
```
Usuario: "Necesito crear un sistema de facturación"

Antigravity activará:
01-context-analyzer → 02-idea-refiner → 03-technical-documentation 
→ 04-code-architect → 07-database-schema-designer
```

### Ejemplo: Integración Legacy
```
Usuario: "Conectar con API de facturación electrónica"

Antigravity activará:
01-context-analyzer → 11-knowledge-extractor 
→ 06-integration-api-designer → 10-business-logic-validator
```

## 🔄 Flujos de Trabajo

### A. Proyecto Greenfield
```
01 → 02 → 13 → 03 → 04 → 07 → 14 → [Coding]
```

### B. Integración Brownfield
```
01 → 11 → 06 → 12 → 10
```

### C. Mejora de Calidad
```
05 → 08 → 09
```

## 📂 Estructura de un Skill

Cada skill contiene:

```
01-context-analyzer/
├── SKILL.md          # Instrucciones principales (YAML frontmatter + markdown)
├── examples/         # (Opcional) Ejemplos de uso
├── scripts/          # (Opcional) Scripts auxiliares
└── resources/        # (Opcional) Recursos adicionales
```

## 🧠 Filosofía del Sistema

Basado en el perfil de **Lester J. Rodríguez R.** (Senior Full-Stack Architect):

1. **Interoperabilidad First** - Los sistemas no existen en aislamiento
2. **Arquitectura Evolutiva** - Respeto al legacy + modernización
3. **Trazabilidad** - Cada línea responde a un requisito
4. **Strict Typing** - TypeScript para mantenibilidad empresarial

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingSkill`)
3. Commit tus cambios (`git commit -m 'Add: New skill for X'`)
4. Push a la rama (`git push origin feature/AmazingSkill`)
5. Abre un Pull Request

## 📄 Licencia

MIT © Lester J. Rodriguez R.

## 🔗 Enlaces

- [Repositorio GitHub](https://github.com/kamuxx/fullstack-_skills)
- [Documentación Completa](https://github.com/kamuxx/fullstack-_skills/wiki)
- [Reportar Issues](https://github.com/kamuxx/fullstack-_skills/issues)

## 👨‍💻 Autor

**Lester J. Rodriguez R.**
- GitHub: [@kamuxx](https://github.com/kamuxx)
- Especialización: Arquitectura Full-Stack, Integración de Sistemas, Facturación Electrónica

---

⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub
