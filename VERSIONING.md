# 🏷️ Sistema de Versionado con Tags - Antigravity Skills

## 📋 Introducción

Este repositorio utiliza **Semantic Versioning** (SemVer) y **Git Tags** para gestionar diferentes versiones de los skills. Esto permite a los usuarios instalar versiones específicas y a ti mantener múltiples versiones en paralelo.

---

## 🎯 Semantic Versioning (SemVer)

Usamos el formato: **MAJOR.MINOR.PATCH** (ej: `1.2.3`)

### Cuándo incrementar cada número:

- **MAJOR** (1.0.0 → 2.0.0): Cambios que rompen compatibilidad
  - Ejemplo: Cambiar la estructura de un skill completamente
  - Ejemplo: Eliminar un skill existente
  - Ejemplo: Cambiar nombres de archivos SKILL.md

- **MINOR** (1.0.0 → 1.1.0): Nuevas funcionalidades compatibles
  - Ejemplo: Agregar un nuevo skill (15-new-skill)
  - Ejemplo: Agregar nuevas secciones a un SKILL.md
  - Ejemplo: Mejorar el instalador con nuevas opciones

- **PATCH** (1.0.0 → 1.0.1): Correcciones de bugs
  - Ejemplo: Corregir typos en documentación
  - Ejemplo: Arreglar un bug en el instalador
  - Ejemplo: Mejorar descripciones de skills

---

## 🏷️ Crear y Gestionar Tags

### 1. Crear un Tag Local

```bash
cd C:\Users\nissa\.gemini\antigravity\scratch\fullstack-skills-repo

# Tag para un patch (bug fix)
git tag -a v1.0.1 -m "fix: Corregir typos en documentación"

# Tag para un minor (nueva feature)
git tag -a v1.1.0 -m "feat: Agregar skill 15-api-testing"

# Tag para un major (breaking change)
git tag -a v2.0.0 -m "BREAKING: Reestructurar todos los skills"
```

### 2. Subir Tags a GitHub

```bash
# Subir un tag específico
git push origin v1.0.1

# Subir todos los tags
git push origin --tags
```

### 3. Ver Todos los Tags

```bash
# Listar tags locales
git tag

# Listar tags con mensajes
git tag -n

# Ver detalles de un tag específico
git show v1.0.0
```

### 4. Eliminar un Tag (si te equivocaste)

```bash
# Eliminar tag local
git tag -d v1.0.1

# Eliminar tag remoto
git push origin --delete v1.0.1
```

---

## 📦 Cómo los Usuarios Instalan Versiones Específicas

### Desde NPM (si publicas en npm)

```bash
# Última versión
npx @kamuxx/fullstack-skills

# Versión específica
npx @kamuxx/fullstack-skills@1.0.0
npx @kamuxx/fullstack-skills@1.1.0
npx @kamuxx/fullstack-skills@2.0.0
```

### Desde GitHub (sin npm)

```bash
# Última versión (main branch)
npx github:kamuxx/fullstack-_skills

# Versión específica usando tag
npx github:kamuxx/fullstack-_skills#v1.0.0
npx github:kamuxx/fullstack-_skills#v1.1.0
npx github:kamuxx/fullstack-_skills#v2.0.0

# Desde una rama específica
npx github:kamuxx/fullstack-_skills#develop
npx github:kamuxx/fullstack-_skills#experimental
```

---

## 🔄 Workflow Completo de Versionado

### Escenario 1: Corregir un Bug (Patch)

```bash
# 1. Hacer cambios
# ... editar archivos ...

# 2. Commit
git add .
git commit -m "fix: Corregir error en 01-context-analyzer"

# 3. Incrementar versión en package.json
npm version patch  # 1.0.0 -> 1.0.1

# 4. Push (npm version ya crea el tag automáticamente)
git push origin main --tags
```

### Escenario 2: Agregar Nueva Funcionalidad (Minor)

```bash
# 1. Hacer cambios
# ... agregar nuevo skill 15-performance-optimizer ...

# 2. Commit
git add .
git commit -m "feat: Agregar skill 15-performance-optimizer"

# 3. Incrementar versión
npm version minor  # 1.0.1 -> 1.1.0

# 4. Push
git push origin main --tags
```

### Escenario 3: Cambio que Rompe Compatibilidad (Major)

```bash
# 1. Hacer cambios
# ... reestructurar completamente los skills ...

# 2. Commit
git add .
git commit -m "BREAKING: Reestructurar formato de todos los skills"

# 3. Incrementar versión
npm version major  # 1.1.0 -> 2.0.0

# 4. Push
git push origin main --tags
```

---

## 📊 Ejemplo de Historial de Versiones

```
v1.0.0 - Initial release (14 skills)
v1.0.1 - fix: Corregir typos en documentación
v1.0.2 - fix: Mejorar instalador para Windows
v1.1.0 - feat: Agregar skill 15-performance-optimizer
v1.1.1 - fix: Corregir bug en find-skills
v1.2.0 - feat: Agregar soporte para configuración personalizada
v2.0.0 - BREAKING: Nueva estructura de skills con subcarpetas
```

---

## 🎨 Crear Releases en GitHub

Después de crear un tag, puedes crear un **Release** en GitHub para mejor visibilidad:

### Opción 1: Desde la Web

1. Ve a: https://github.com/kamuxx/fullstack-_skills/releases/new
2. Selecciona el tag (ej: v1.0.1)
3. Título: "Release v1.0.1 - Bug Fixes"
4. Descripción:
   ```markdown
   ## 🐛 Bug Fixes
   - Corregir typos en documentación de skills
   - Mejorar mensajes de error del instalador
   
   ## 📦 Instalación
   ```bash
   npx github:kamuxx/fullstack-_skills#v1.0.1
   ```
   ```
5. Click en "Publish release"

### Opción 2: Desde la CLI (con GitHub CLI)

```bash
# Instalar GitHub CLI si no lo tienes
# https://cli.github.com/

# Crear release
gh release create v1.0.1 \
  --title "Release v1.0.1 - Bug Fixes" \
  --notes "Correcciones menores de bugs y documentación"
```

---

## 🔍 Ver Diferencias Entre Versiones

```bash
# Comparar dos tags
git diff v1.0.0 v1.1.0

# Ver qué cambió en un skill específico
git diff v1.0.0 v1.1.0 -- skills/01-context-analyzer/

# Ver commits entre dos versiones
git log v1.0.0..v1.1.0 --oneline
```

---

## 📝 Buenas Prácticas

### 1. **Siempre usa mensajes descriptivos en los tags**
```bash
# ❌ Malo
git tag v1.0.1

# ✅ Bueno
git tag -a v1.0.1 -m "fix: Corregir instalador en Windows"
```

### 2. **Actualiza el CHANGELOG.md**
Crea un archivo `CHANGELOG.md` para documentar cambios:

```markdown
# Changelog

## [1.1.0] - 2026-02-05
### Added
- Nuevo skill 15-performance-optimizer
- Soporte para --version en el instalador

### Fixed
- Bug en find-skills que causaba error en Linux

## [1.0.0] - 2026-02-05
### Added
- Release inicial con 14 skills
```

### 3. **Prueba antes de crear el tag**
```bash
# Probar localmente
npm link
install-skills

# Verificar que todo funciona
# ... pruebas ...

# Luego crear el tag
npm version patch
```

### 4. **Mantén sincronizado package.json**
El comando `npm version` actualiza automáticamente `package.json` y crea el tag.

---

## 🚀 Script Automatizado de Release

Puedes crear un script para automatizar el proceso:

```bash
#!/bin/bash
# release.sh

VERSION_TYPE=$1  # patch, minor, o major

if [ -z "$VERSION_TYPE" ]; then
    echo "Uso: ./release.sh [patch|minor|major]"
    exit 1
fi

echo "🚀 Creando release $VERSION_TYPE..."

# 1. Asegurar que estamos en main y actualizado
git checkout main
git pull origin main

# 2. Incrementar versión y crear tag
npm version $VERSION_TYPE

# 3. Push con tags
git push origin main --tags

# 4. (Opcional) Publicar en NPM
read -p "¿Publicar en NPM? (y/n): " publish_npm
if [ "$publish_npm" = "y" ]; then
    npm publish --access public
fi

echo "✅ Release completado!"
```

Uso:
```bash
chmod +x release.sh
./release.sh patch   # Para 1.0.0 -> 1.0.1
./release.sh minor   # Para 1.0.0 -> 1.1.0
./release.sh major   # Para 1.0.0 -> 2.0.0
```

---

## 📚 Recursos Adicionales

- **Semantic Versioning**: https://semver.org/
- **Git Tagging**: https://git-scm.com/book/en/v2/Git-Basics-Tagging
- **GitHub Releases**: https://docs.github.com/en/repositories/releasing-projects-on-github

---

**Versión actual del repositorio**: v1.0.0  
**Última actualización**: 2026-02-05
