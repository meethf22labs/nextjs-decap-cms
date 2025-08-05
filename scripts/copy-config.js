const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '../public/admin/config.yml');
const targetPath = path.join(__dirname, '../out/config.yml');
const targetDir = path.dirname(targetPath);

if (fs.existsSync(sourcePath)) {
    // Ensure the out directory exists
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
        console.log('📁 Created out directory');
    }
    fs.copyFileSync(sourcePath, targetPath);
    console.log('✅ Copied config.yml to out/');
} else {
    console.error('❌ Source config.yml not found at:', sourcePath);
} 