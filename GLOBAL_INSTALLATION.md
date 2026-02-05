# 🌍 Instalación Global de Skills - Cómo Funciona

## ✅ **Respuesta Corta: SÍ, se instala en la ubicación global de Antigravity**

Cuando **cualquier usuario** ejecuta:

```bash
npx @kamuxx/fullstack-skills
```

Los skills se instalan **automáticamente** en:

```
~/.gemini/antigravity/skills/
```

Esta es la ubicación **global y estándar** que Antigravity usa para todos los agentes IA.

---

## 🔍 **Cómo Funciona el Instalador**

### 1. **Detección Automática del Sistema Operativo**

El instalador detecta automáticamente el sistema operativo y usa la ruta correcta:

```javascript
function getAntigravityPath() {
    const homeDir = os.homedir();  // Obtiene el directorio home del usuario
    
    // Detectar el sistema operativo
    if (process.platform === 'win32') {
        return path.join(homeDir, '.gemini', 'antigravity', 'skills');
    } else {
        // Linux/Mac
        return path.join(homeDir, '.gemini', 'antigravity', 'skills');
    }
}
```

### 2. **Rutas Específicas por Sistema**

| Sistema Operativo | Ruta de Instalación |
|-------------------|---------------------|
| **Windows** | `C:\Users\{usuario}\.gemini\antigravity\skills\` |
| **Linux** | `/home/{usuario}/.gemini/antigravity/skills/` |
| **macOS** | `/Users/{usuario}/.gemini/antigravity/skills/` |

### 3. **Verificación de Antigravity**

Antes de instalar, el script verifica que Antigravity esté instalado:

```javascript
// Verificar que existe el directorio de Antigravity
const antigravityBase = path.dirname(targetPath);
if (!fs.existsSync(antigravityBase)) {
    log('❌ ERROR: Antigravity no está instalado en este sistema.', 'red');
    log(`   Esperado en: ${antigravityBase}`, 'yellow');
    log('\n💡 Instala Antigravity primero antes de ejecutar este instalador.\n', 'yellow');
    process.exit(1);
}
```

---

## 🎯 **Escenarios de Uso**

### Escenario 1: Usuario en Windows con VS Code

```bash
# Usuario: Juan en Windows
npx github:kamuxx/fullstack-_skills

# Los skills se instalan en:
# C:\Users\Juan\.gemini\antigravity\skills\
```

### Escenario 2: Usuario en Linux con Cursor

```bash
# Usuario: María en Linux
npx github:kamuxx/fullstack-_skills

# Los skills se instalan en:
# /home/maria/.gemini/antigravity/skills/
```

### Escenario 3: Usuario en Mac con cualquier IDE

```bash
# Usuario: Carlos en macOS
npx github:kamuxx/fullstack-_skills

# Los skills se instalan en:
# /Users/carlos/.gemini/antigravity/skills/
```

---

## 🌐 **Disponibilidad Global**

Una vez instalados, los skills están disponibles para **TODOS** los agentes IA que usen Antigravity:

### ✅ **Funcionará en:**
- Google Gemini (Antigravity)
- Claude (si usa Antigravity)
- Cualquier IDE que use Antigravity
- Cualquier proyecto en cualquier directorio

### 🔄 **Cómo Antigravity los Detecta**

Según la documentación de Antigravity que vimos al inicio:

```
<skills>
Available skills:
- Business Logic Validator (C:\Users\nissa\.gemini\antigravity\skills\10-business-logic-validator\SKILL.md)
- Code Architect (C:\Users\nissa\.gemini\antigravity\skills\04-code-architect\SKILL.md)
...
</skills>
```

Antigravity **automáticamente** escanea `~/.gemini/antigravity/skills/` y carga todos los skills que encuentra.

---

## 📦 **Qué se Instala Exactamente**

Cuando ejecutas `npx @kamuxx/fullstack-skills`, se copian:

### 14 Skills Principales
```
~/.gemini/antigravity/skills/
├── 01-context-analyzer/
│   └── SKILL.md
├── 02-idea-refiner/
│   └── SKILL.md
├── 03-technical-documentation/
│   └── SKILL.md
├── 04-code-architect/
│   └── SKILL.md
├── 05-code-quality-auditor/
│   └── SKILL.md
├── 06-integration-api-designer/
│   └── SKILL.md
├── 07-database-schema-designer/
│   └── SKILL.md
├── 08-testing-strategy/
│   └── SKILL.md
├── 09-deployment-devops/
│   └── SKILL.md
├── 10-business-logic-validator/
│   └── SKILL.md
├── 11-knowledge-extractor/
│   └── SKILL.md
├── 12-migration-modernizer/
│   └── SKILL.md
├── 13-ui-ux-designer/
│   └── SKILL.md
├── 14-frontend-stylist/
│   └── SKILL.md
├── find-skills/
│   └── SKILL.md
└── SKILLS.md
```

---

## 🚀 **Proceso de Instalación Completo**

### Paso a Paso

1. **Usuario ejecuta el comando**:
   ```bash
   npx @kamuxx/fullstack-skills
   ```

2. **NPX descarga el paquete** desde GitHub o NPM

3. **El instalador se ejecuta automáticamente**:
   - Detecta el sistema operativo
   - Obtiene el directorio home del usuario
   - Construye la ruta: `{home}/.gemini/antigravity/skills/`
   - Verifica que Antigravity esté instalado
   - Crea el directorio si no existe
   - Copia los 14 skills + find-skills + SKILLS.md

4. **Antigravity detecta los nuevos skills**:
   - Al reiniciar o en la próxima conversación
   - Los skills aparecen en la sección `<skills>` del contexto

5. **Los skills están disponibles globalmente**:
   - En cualquier proyecto
   - En cualquier conversación
   - Para cualquier tarea

---

## 🔄 **Actualización de Skills**

### Instalar una Versión Específica

```bash
# Versión 1.0.0
npx github:kamuxx/fullstack-_skills#v1.0.0

# Versión 1.1.0 (cuando esté disponible)
npx github:kamuxx/fullstack-_skills#v1.1.0

# Última versión
npx github:kamuxx/fullstack-_skills
```

### Sobrescribir Skills Existentes

Si ya tienes skills instalados y ejecutas el comando de nuevo:
- Los skills existentes se **sobrescriben**
- Esto permite actualizar a nuevas versiones fácilmente

---

## 🎨 **Ejemplo Visual del Flujo**

```
┌─────────────────────────────────────────────────────────────┐
│  Usuario ejecuta:                                           │
│  npx github:kamuxx/fullstack-_skills                        │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  NPX descarga el paquete desde GitHub                       │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Instalador detecta:                                        │
│  - Sistema: Windows                                         │
│  - Home: C:\Users\Juan                                      │
│  - Target: C:\Users\Juan\.gemini\antigravity\skills\       │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Verifica que Antigravity esté instalado                    │
│  ✅ C:\Users\Juan\.gemini\antigravity\ existe               │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Copia 14 skills + find-skills + SKILLS.md                  │
│  ✅ 01-context-analyzer                                     │
│  ✅ 02-idea-refiner                                         │
│  ✅ ...                                                     │
│  ✅ 14-frontend-stylist                                     │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  ✨ Skills disponibles globalmente en Antigravity           │
│  Cualquier IDE, cualquier proyecto, cualquier conversación  │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ **Verificación de Instalación**

### Verificar que los Skills se Instalaron

```bash
# Windows
dir C:\Users\{tu-usuario}\.gemini\antigravity\skills\

# Linux/Mac
ls -la ~/.gemini/antigravity/skills/
```

Deberías ver:
```
01-context-analyzer/
02-idea-refiner/
03-technical-documentation/
04-code-architect/
05-code-quality-auditor/
06-integration-api-designer/
07-database-schema-designer/
08-testing-strategy/
09-deployment-devops/
10-business-logic-validator/
11-knowledge-extractor/
12-migration-modernizer/
13-ui-ux-designer/
14-frontend-stylist/
find-skills/
SKILLS.md
```

---

## 🌟 **Ventajas de la Instalación Global**

### ✅ **Una Sola Instalación**
- Instalas una vez
- Disponible en todos los proyectos
- No necesitas reinstalar por proyecto

### ✅ **Consistencia**
- Todos los proyectos usan los mismos skills
- Misma versión en todo el sistema
- Fácil de actualizar globalmente

### ✅ **Compatibilidad**
- Funciona en cualquier IDE que use Antigravity
- Funciona en cualquier sistema operativo
- Funciona para cualquier lenguaje de programación

### ✅ **Mantenimiento Simple**
- Actualizar: volver a ejecutar `npx @kamuxx/fullstack-skills`
- Cambiar versión: `npx github:kamuxx/fullstack-_skills#v1.1.0`
- Eliminar: borrar la carpeta `~/.gemini/antigravity/skills/`

---

## 📝 **Resumen**

| Pregunta | Respuesta |
|----------|-----------|
| **¿Dónde se instalan los skills?** | `~/.gemini/antigravity/skills/` |
| **¿Es global para todos los IDEs?** | ✅ Sí |
| **¿Es global para todos los proyectos?** | ✅ Sí |
| **¿Funciona en Windows/Linux/Mac?** | ✅ Sí, en todos |
| **¿Necesito reinstalar por proyecto?** | ❌ No, una sola vez |
| **¿Puedo actualizar fácilmente?** | ✅ Sí, volver a ejecutar npx |
| **¿Puedo tener versiones diferentes?** | ✅ Sí, especificando el tag |

---

**¡Exacto!** 🎯 Los skills se instalan en la ubicación global de Antigravity y están disponibles para **todos** los agentes IA que lo usen, sin importar el IDE o el proyecto.

---

*Ubicación global: `~/.gemini/antigravity/skills/`*
*Comando de instalación: `npx @kamuxx/fullstack-skills`*
