// tsdx.config.js
module.exports = {
  // Other configuration options
  rollup(config) {
    config.output.manualChunks = undefined; // Remove manualChunks configuration

    config.plugins.push({
      name: 'copy-css-plugin',
      async writeBundle() {
        const fs = require('fs');
        const path = require('path');
        const sourcePath = path.resolve(__dirname, 'src', 'style.css');
        const outputDir = path.resolve(__dirname, 'dist');
        const outputPath = path.join(outputDir, 'style.css');

        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir);
        }

        fs.copyFileSync(sourcePath, outputPath);
      },
    });

    return config;
  },
};
