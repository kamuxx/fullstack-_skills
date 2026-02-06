#!/usr/bin/env node

/**
 * Antigravity Skills Installer
 * Instala los 14 skills globales en la ubicación correcta de Antigravity
 *
 * Uso:
 *   npx @kamuxx/fullstack-skills              # Instala la última versión
 *   npx @kamuxx/fullstack-skills --version    # Muestra la versión
 *   npx @kamuxx/fullstack-skills -v           # Muestra la versión
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Leer la versión del package.json
const packageJson = require('../package.json');
const VERSION = packageJson.version;

// Colores para la consola
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function showVersion() {
    log('\n╔════════════════════════════════════════════════════════════╗', 'cyan');
    log(`║   Antigravity Skills Installer v${VERSION.padEnd(24)}║`, 'cyan');
    log('╚════════════════════════════════════════════════════════════╝\n', 'cyan');
}

function showHelp() {
    showVersion();
    log('Uso:', 'bright');
    log('  npx @kamuxx/fullstack-skills              # Instalar TODOS los skills', 'blue');
    log('  npx @kamuxx/fullstack-skills add <name>   # Instalar skill específico', 'blue');
    log('  npx @kamuxx/fullstack-skills --version    # Mostrar versión', 'blue');
    log('  npx @kamuxx/fullstack-skills --help       # Mostrar ayuda', 'blue');
    log('\nEjemplos:', 'bright');
    log('  npx @kamuxx/fullstack-skills add 15-commiter', 'cyan');
    log('  npx @kamuxx/fullstack-skills add 16-changelog-generator', 'cyan');
    log('\nInstalación desde versión específica:', 'bright');
    log('  npx @kamuxx/fullstack-skills@1.1.0        # Versión específica', 'blue');
    log('\nMás información:', 'bright');
    log('  https://github.com/kamuxx/fullstack-_skills\n', 'cyan');
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
    log(`║   🚀 Antigravity Skills Installer v${VERSION.padEnd(21)}║`, 'cyan');
    log('║   22 Global Skills for Senior Full-Stack Architecture    ║', 'cyan');
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
        '14-frontend-stylist',
        '15-commiter',
        '16-changelog-generator',
        '17-project-estimator',
        '18-growth-hacker',
        '19-security-sentinel',
        '20-startup-validator',
        '21-project-bootstrapper',
        '22-reality-check'
    ];

    // Filtrar skills si se especificaron argumentos
    const args = process.argv.slice(2);
    let skillsToInstall = skills;

    if (args.length > 0 && args[0] === 'add') {
        const requestedSkill = args[1];
        if (!requestedSkill) {
            log('❌ Error: Debes especificar el nombre del skill a instalar.', 'red');
            log('   Ejemplo: npx @kamuxx/fullstack-skills add 15-commiter', 'yellow');
            process.exit(1);
        }

        // Búsqueda aproximada o exacta
        const match = skills.find(s => s.includes(requestedSkill));
        if (match) {
            skillsToInstall = [match];
            log(`🎯 Modo: Instalando solo '${match}'...`, 'magenta');
        } else {
            log(`❌ Error: No se encontró ningún skill que coincida con '${requestedSkill}'`, 'red');
            log('   Lista disponible:', 'yellow');
            skills.forEach(s => log(`   - ${s}`, 'cyan'));
            process.exit(1);
        }
    }

    let installed = 0;
    let skipped = 0;

    skillsToInstall.forEach((skill, index) => {
        const skillSource = path.join(sourcePath, skill);
        const skillDest = path.join(targetPath, skill);

        if (fs.existsSync(skillSource)) {
            try {
                copyRecursiveSync(skillSource, skillDest);
                log(`   ✅ [${index + 1}/${skillsToInstall.length}] ${skill}`, 'green');
                installed++;
            } catch (error) {
                log(`   ⚠️  [${index + 1}/${skillsToInstall.length}] ${skill} - Error: ${error.message}`, 'yellow');
                skipped++;
            }
        } else {
            log(`   ⚠️  [${index + 1}/${skillsToInstall.length}] ${skill} - No encontrado`, 'yellow');
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
    log(`║   📊 Skills instalados: ${installed}/${skillsToInstall.length}                              ║`, 'cyan');
    if (skipped > 0) {
        log(`║   ⚠️  Skills omitidos: ${skipped}                                  ║`, 'yellow');
    }
    log('╚════════════════════════════════════════════════════════════╝\n', 'cyan');

    log('🎯 Los skills están ahora disponibles globalmente en Antigravity.\n', 'green');
    log('📚 Para más información, visita:', 'blue');
    log('   https://github.com/kamuxx/fullstack-_skills\n', 'blue');
}

// Procesar argumentos de línea de comandos
const args = process.argv.slice(2);
if (args.includes('--version') || args.includes('-v')) {
    showVersion();
    process.exit(0);
}
if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    process.exit(0);
}

// Ejecutar el instalador
try {
    main();
} catch (error) {
    log(`\n❌ Error fatal: ${error.message}\n`, 'red');
    console.error(error);
    process.exit(1);
}
