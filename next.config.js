const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  basePath: '/docs',
  assetPrefix: '/docs/',
  // 禁用图片优化以支持静态导出
  images: { unoptimized: true },
  // 页面路径映射
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir }) {
    return {
      "/": { page: "/" },
      "/another": { page: "/another" },
      "/advanced": { page: "/advanced" },
    };
  },
});
