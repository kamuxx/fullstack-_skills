# 📦 Guía de Publicación - Antigravity Full-Stack Skills

## 🚀 Paso 1: Preparar el Repositorio en GitHub

### 1.1 Verificar el contenido local
```bash
cd C:\Users\nissa\.gemini\antigravity\scratch\fullstack-skills-repo
ls -la
```

Deberías ver:
- ✅ `skills/` (con 14 skills + find-skills + SKILLS.md)
- ✅ `bin/install.js`
- ✅ `package.json`
- ✅ `README.md`
- ✅ `LICENSE`
- ✅ `.gitignore`

### 1.2 Inicializar Git y hacer commit
```bash
cd C:\Users\nissa\.gemini\antigravity\scratch\fullstack-skills-repo

# Configurar Git (si no lo has hecho)
git config user.name "kamuxx"
git config user.email "tu-email@example.com"

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "feat: Initial release - 14 Full-Stack Skills for Antigravity"

# Conectar con el repositorio remoto
git remote add origin https://github.com/kamuxx/fullstack-_skills.git

# Verificar la rama principal
git branch -M main

# Subir al repositorio
git push -u origin main
```

---

## 📝 Paso 2: Publicar en NPM (Opcional pero Recomendado)

### 2.1 Crear cuenta en NPM
Si no tienes cuenta:
1. Ve a https://www.npmjs.com/signup
2. Crea tu cuenta
3. Verifica tu email

### 2.2 Login en NPM desde la terminal
```bash
npm login
```

Ingresa:
- Username: `kamuxx` (o tu username de npm)
- Password: tu contraseña
- Email: tu email

### 2.3 Publicar el paquete
```bash
cd C:\Users\nissa\.gemini\antigravity\scratch\fullstack-skills-repo

# Publicar (primera vez)
npm publish --access public
```

**Nota:** Si el nombre `@kamuxx/fullstack-skills` no está disponible, puedes:
- Cambiar el nombre en `package.json` a algo como `@kamuxx/antigravity-skills`
- O publicar sin scope: `fullstack-skills-antigravity`

---

## 🎯 Paso 3: Usar el Paquete

### Opción A: Desde NPM (después de publicar)
```bash
# Instalación directa con npx
npx @kamuxx/fullstack-skills

# O instalación global
npm install -g @kamuxx/fullstack-skills
install-skills
```

### Opción B: Desde GitHub (sin publicar en NPM)
```bash
# Instalación directa desde GitHub
npx github:kamuxx/fullstack-_skills

# O con npm
npm install -g github:kamuxx/fullstack-_skills
install-skills
```

---

## 🔄 Paso 4: Actualizar el Paquete (Futuras versiones)

### 4.1 Hacer cambios en los skills
```bash
cd C:\Users\nissa\.gemini\antigravity\scratch\fullstack-skills-repo

# Editar archivos según necesites
# ...

# Agregar cambios
git add .
git commit -m "feat: Agregar nueva funcionalidad X"
```

### 4.2 Incrementar la versión
```bash
# Versión patch (1.0.0 -> 1.0.1) - Para bugs o cambios menores
npm version patch

# Versión minor (1.0.0 -> 1.1.0) - Para nuevas features
npm version minor

# Versión major (1.0.0 -> 2.0.0) - Para breaking changes
npm version major
```

### 4.3 Publicar la actualización
```bash
# Subir a GitHub
git push origin main --tags

# Publicar en NPM (si lo publicaste)
npm publish
```

---

## 🧪 Paso 5: Probar Localmente (Antes de Publicar)

### 5.1 Instalar localmente
```bash
cd C:\Users\nissa\.gemini\antigravity\scratch\fullstack-skills-repo

# Crear un enlace simbólico global
npm link

# Ahora puedes ejecutar
install-skills
```

### 5.2 Probar en otro directorio
```bash
cd ~
npx install-skills
```

Esto debería copiar los skills a `~/.gemini/antigravity/skills/`

---

## 📊 Verificación Final

Después de la instalación, verifica que los skills estén en:
```bash
ls ~/.gemini/antigravity/skills/
```

Deberías ver:
- ✅ 01-context-analyzer/
- ✅ 02-idea-refiner/
- ✅ 03-technical-documentation/
- ✅ 04-code-architect/
- ✅ 05-code-quality-auditor/
- ✅ 06-integration-api-designer/
- ✅ 07-database-schema-designer/
- ✅ 08-testing-strategy/
- ✅ 09-deployment-devops/
- ✅ 10-business-logic-validator/
- ✅ 11-knowledge-extractor/
- ✅ 12-migration-modernizer/
- ✅ 13-ui-ux-designer/
- ✅ 14-frontend-stylist/
- ✅ find-skills/
- ✅ SKILLS.md

---

## 🎨 Badges para el README (Opcional)

Después de publicar, agrega estos badges al README.md:

```markdown
[![npm version](https://badge.fury.io/js/%40kamuxx%2Ffullstack-skills.svg)](https://www.npmjs.com/package/@kamuxx/fullstack-skills)
[![Downloads](https://img.shields.io/npm/dm/@kamuxx/fullstack-skills.svg)](https://www.npmjs.com/package/@kamuxx/fullstack-skills)
[![GitHub stars](https://img.shields.io/github/stars/kamuxx/fullstack-_skills.svg)](https://github.com/kamuxx/fullstack-_skills/stargazers)
```

---

## 🆘 Troubleshooting

### Error: "Package name already exists"
Cambia el nombre en `package.json`:
```json
{
  "name": "@kamuxx/antigravity-fullstack-skills"
}
```

### Error: "Permission denied"
En Windows, ejecuta como administrador o verifica permisos de npm:
```bash
npm config get prefix
```

### Los skills no se copian
Verifica la ruta de Antigravity:
```bash
echo $HOME/.gemini/antigravity/skills
```

---

## ✅ Checklist Final

- [ ] Todos los skills están en `skills/`
- [ ] `package.json` tiene la información correcta
- [ ] README.md está completo
- [ ] LICENSE está incluido
- [ ] `.gitignore` está configurado
- [ ] Git commit inicial hecho
- [ ] Subido a GitHub
- [ ] (Opcional) Publicado en NPM
- [ ] Probado localmente con `npx`

---

**¡Listo!** Ahora tus skills están disponibles para instalar con un simple comando. 🎉
