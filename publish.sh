#!/bin/bash

# Script de publicación rápida para Antigravity Skills
# Autor: Lester J. Rodriguez R.

set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   📦 Antigravity Skills - Quick Publish Script           ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado"
    echo "   Ejecuta este script desde la raíz del repositorio"
    exit 1
fi

# Verificar Git
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositorio Git..."
    git init
    git branch -M main
fi

# Verificar configuración de Git
if ! git config user.name > /dev/null 2>&1; then
    echo "⚙️  Configurando Git..."
    read -p "Ingresa tu nombre: " git_name
    read -p "Ingresa tu email: " git_email
    git config user.name "$git_name"
    git config user.email "$git_email"
fi

# Agregar archivos
echo "📝 Agregando archivos al staging..."
git add .

# Commit
echo ""
read -p "📝 Mensaje del commit (Enter para usar mensaje por defecto): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="feat: Update skills $(date +%Y-%m-%d)"
fi

git commit -m "$commit_msg" || echo "⚠️  No hay cambios para commitear"

# Verificar remote
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Configurando remote origin..."
    git remote add origin https://github.com/kamuxx/fullstack-_skills.git
fi

# Push a GitHub
echo ""
read -p "🚀 ¿Subir a GitHub? (y/n): " push_github
if [ "$push_github" = "y" ] || [ "$push_github" = "Y" ]; then
    echo "📤 Subiendo a GitHub..."
    git push -u origin main --tags || git push origin main --tags
    echo "✅ Subido a GitHub exitosamente"
fi

# Publicar en NPM
echo ""
read -p "📦 ¿Publicar en NPM? (y/n): " publish_npm
if [ "$publish_npm" = "y" ] || [ "$publish_npm" = "Y" ]; then
    echo "🔐 Verificando login en NPM..."
    if ! npm whoami > /dev/null 2>&1; then
        echo "⚠️  No estás logueado en NPM"
        read -p "¿Hacer login ahora? (y/n): " do_login
        if [ "$do_login" = "y" ] || [ "$do_login" = "Y" ]; then
            npm login
        else
            echo "❌ Cancelando publicación en NPM"
            exit 0
        fi
    fi
    
    echo "📦 Publicando en NPM..."
    npm publish --access public
    echo "✅ Publicado en NPM exitosamente"
fi

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   ✨ Proceso completado exitosamente                     ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "📚 Para instalar:"
echo "   npx @kamuxx/fullstack-skills"
echo ""
echo "🔗 Repositorio:"
echo "   https://github.com/kamuxx/fullstack-_skills"
echo ""
