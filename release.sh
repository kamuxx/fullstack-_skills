#!/bin/bash

# Script automatizado de release para Antigravity Skills
# Uso: ./release.sh [patch|minor|major]

set -e

VERSION_TYPE=$1

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   🚀 Antigravity Skills - Automated Release Script       ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Validar argumento
if [ -z "$VERSION_TYPE" ]; then
    echo -e "${RED}❌ Error: Debes especificar el tipo de versión${NC}"
    echo ""
    echo -e "${YELLOW}Uso:${NC}"
    echo "  ./release.sh patch   # Para bug fixes (1.0.0 -> 1.0.1)"
    echo "  ./release.sh minor   # Para nuevas features (1.0.0 -> 1.1.0)"
    echo "  ./release.sh major   # Para breaking changes (1.0.0 -> 2.0.0)"
    echo ""
    exit 1
fi

if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
    echo -e "${RED}❌ Error: Tipo de versión inválido: $VERSION_TYPE${NC}"
    echo -e "${YELLOW}Debe ser: patch, minor, o major${NC}"
    exit 1
fi

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json no encontrado${NC}"
    echo "   Ejecuta este script desde la raíz del repositorio"
    exit 1
fi

# Obtener versión actual
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "${BLUE}📦 Versión actual: ${CURRENT_VERSION}${NC}"

# Verificar que no hay cambios sin commitear
if ! git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}⚠️  Hay cambios sin commitear${NC}"
    read -p "¿Quieres commitear los cambios ahora? (y/n): " do_commit
    if [ "$do_commit" = "y" ] || [ "$do_commit" = "Y" ]; then
        git add .
        read -p "Mensaje del commit: " commit_msg
        git commit -m "$commit_msg"
    else
        echo -e "${RED}❌ Abortando. Commitea tus cambios primero.${NC}"
        exit 1
    fi
fi

# Asegurar que estamos en main y actualizado
echo -e "${BLUE}🔄 Actualizando rama main...${NC}"
git checkout main
git pull origin main

# Incrementar versión y crear tag
echo -e "${GREEN}📈 Incrementando versión ($VERSION_TYPE)...${NC}"
npm version $VERSION_TYPE

# Obtener nueva versión
NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "${GREEN}✅ Nueva versión: ${NEW_VERSION}${NC}"

# Push con tags
echo -e "${BLUE}📤 Subiendo cambios a GitHub...${NC}"
git push origin main --tags

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✨ Release v${NEW_VERSION} completado exitosamente!${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Mostrar cómo instalar esta versión
echo -e "${CYAN}📦 Los usuarios pueden instalar esta versión con:${NC}"
echo -e "${BLUE}   npx github:kamuxx/fullstack-_skills#v${NEW_VERSION}${NC}"
echo ""

# Preguntar si publicar en NPM
read -p "¿Publicar en NPM? (y/n): " publish_npm
if [ "$publish_npm" = "y" ] || [ "$publish_npm" = "Y" ]; then
    echo -e "${BLUE}📦 Publicando en NPM...${NC}"
    
    # Verificar login
    if ! npm whoami > /dev/null 2>&1; then
        echo -e "${YELLOW}⚠️  No estás logueado en NPM${NC}"
        npm login
    fi
    
    npm publish --access public
    echo -e "${GREEN}✅ Publicado en NPM exitosamente!${NC}"
    echo -e "${CYAN}📦 Los usuarios también pueden instalar con:${NC}"
    echo -e "${BLUE}   npx @kamuxx/fullstack-skills@${NEW_VERSION}${NC}"
fi

# Sugerir crear un release en GitHub
echo ""
echo -e "${YELLOW}💡 Sugerencia: Crea un release en GitHub para mejor visibilidad${NC}"
echo -e "${BLUE}   https://github.com/kamuxx/fullstack-_skills/releases/new?tag=v${NEW_VERSION}${NC}"
echo ""

echo -e "${GREEN}🎉 ¡Todo listo!${NC}"
