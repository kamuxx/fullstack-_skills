#!/usr/bin/env node

/**
 * Antigravity Skills Installer
 * Instala los 14 skills globales en la ubicación correcta de Antigravity
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Colores para la consola
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    red: '\x1b[31m',
    cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function getAntigravityPath() {
    const homeDir = os.homedir();

    // Detectar el sistema operativo
    if (process.platform === 'win32') {
        return path.join(homeDir, '.gemini', 'antigravity', 'skills');
    } else {
        // Linux/Mac
        return path.join(homeDir, '.gemini', 'antigravity', 'skills');
    }
}

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(
                path.join(src, childItemName),
                path.join(dest, childItemName)
            );
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

function main() {
    log('\n╔════════════════════════════════════════════════════════════╗', 'cyan');
    log('║   🚀 Antigravity Skills Installer v1.0.0                 ║', 'cyan');
    log('║   14 Global Skills for Senior Full-Stack Architecture    ║', 'cyan');
    log('╚════════════════════════════════════════════════════════════╝\n', 'cyan');

    const targetPath = getAntigravityPath();
    const sourcePath = path.join(__dirname, '..', 'skills');

    log(`📂 Target Directory: ${targetPath}`, 'blue');
    log(`📦 Source Directory: ${sourcePath}\n`, 'blue');

    // Verificar que existe el directorio de Antigravity
    const antigravityBase = path.dirname(targetPath);
    if (!fs.existsSync(antigravityBase)) {
        log('❌ ERROR: Antigravity no está instalado en este sistema.', 'red');
        log(`   Esperado en: ${antigravityBase}`, 'yellow');
        log('\n💡 Instala Antigravity primero antes de ejecutar este instalador.\n', 'yellow');
        process.exit(1);
    }

    // Crear el directorio de skills si no existe
    if (!fs.existsSync(targetPath)) {
        log('📁 Creando directorio de skills...', 'yellow');
        fs.mkdirSync(targetPath, { recursive: true });
    }

    // Copiar cada skill
    log('🔄 Instalando skills...\n', 'bright');

    const skills = [
        '01-context-analyzer',
        '02-idea-refiner',
        '03-technical-documentation',
        '04-code-architect',
        '05-code-quality-auditor',
        '06-integration-api-designer',
        '07-database-schema-designer',
        '08-testing-strategy',
        '09-deployment-devops',
        '10-business-logic-validator',
        '11-knowledge-extractor',
        '12-migration-modernizer',
        '13-ui-ux-designer',
        '14-frontend-stylist'
    ];

    let installed = 0;
    let skipped = 0;

    skills.forEach((skill, index) => {
        const skillSource = path.join(sourcePath, skill);
        const skillDest = path.join(targetPath, skill);

        if (fs.existsSync(skillSource)) {
            try {
                copyRecursiveSync(skillSource, skillDest);
                log(`   ✅ [${index + 1}/14] ${skill}`, 'green');
                installed++;
            } catch (error) {
                log(`   ⚠️  [${index + 1}/14] ${skill} - Error: ${error.message}`, 'yellow');
                skipped++;
            }
        } else {
            log(`   ⚠️  [${index + 1}/14] ${skill} - No encontrado`, 'yellow');
            skipped++;
        }
    });

    // Copiar el archivo SKILLS.md si existe
    const skillsDocSource = path.join(sourcePath, 'SKILLS.md');
    const skillsDocDest = path.join(targetPath, 'SKILLS.md');

    if (fs.existsSync(skillsDocSource)) {
        try {
            fs.copyFileSync(skillsDocSource, skillsDocDest);
            log('\n   ✅ SKILLS.md (Documentación maestra)', 'green');
        } catch (error) {
            log(`\n   ⚠️  SKILLS.md - Error: ${error.message}`, 'yellow');
        }
    }

    // Resumen final
    log('\n╔════════════════════════════════════════════════════════════╗', 'cyan');
    log(`║   ✨ Instalación Completada                               ║`, 'cyan');
    log(`║   📊 Skills instalados: ${installed}/14                              ║`, 'cyan');
    if (skipped > 0) {
        log(`║   ⚠️  Skills omitidos: ${skipped}                                  ║`, 'yellow');
    }
    log('╚════════════════════════════════════════════════════════════╝\n', 'cyan');

    log('🎯 Los skills están ahora disponibles globalmente en Antigravity.\n', 'green');
    log('📚 Para más información, visita:', 'blue');
    log('   https://github.com/kamuxx/fullstack-_skills\n', 'blue');
}

// Ejecutar el instalador
try {
    main();
} catch (error) {
    log(`\n❌ Error fatal: ${error.message}\n`, 'red');
    console.error(error);
    process.exit(1);
}
