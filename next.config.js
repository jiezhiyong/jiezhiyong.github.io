const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  assetPrefix: './',
  images: { unoptimized: true }, // 禁用图片优化以支持静态导出
});
