import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }, // 禁用图片优化以支持静态导出
});
