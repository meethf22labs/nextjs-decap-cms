const fs = require('fs');
const path = require('path');

module.exports = {
    output: 'export',
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg
    },
    // Copy config.yml to root after build
    async rewrites() {
        return [];
    },
    // Custom webpack plugin to copy config.yml
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.plugins.push({
                apply: (compiler) => {
                    compiler.hooks.afterEmit.tap('CopyConfigPlugin', (compilation) => {
                        const sourcePath = path.join(__dirname, 'public/admin/config.yml');
                        const targetPath = path.join(__dirname, 'out/config.yml');
                        const targetDir = path.dirname(targetPath);
                        
                        if (fs.existsSync(sourcePath)) {
                            // Ensure the out directory exists
                            if (!fs.existsSync(targetDir)) {
                                fs.mkdirSync(targetDir, { recursive: true });
                            }
                            fs.copyFileSync(sourcePath, targetPath);
                            console.log('✅ Copied config.yml to out/');
                        }
                    });
                }
            });
        }
        
        config.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        );
        
        return config;
    }
}