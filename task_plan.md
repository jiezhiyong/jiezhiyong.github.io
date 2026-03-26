# Nextra Upgrade Task Plan

## Current State Analysis
- Next.js: ^13.5.6 (Current latest: 15.x)
- Nextra: ^2.13.4 (Current latest: 3.x)
- TailwindCSS: ^3.4.4 (Current latest: 4.x)
- Project structure: Uses `pages/` directory (Nextra 2.x pattern)
- Static export configuration for GitHub Pages

## Upgrade Strategy
1. **Next.js**: 13.5.6 → 15.x (check compatibility first)
2. **Nextra**: 2.13.4 → 3.x (major breaking changes expected)
3. **Tailwind CSS**: 3.4.4 → 4.x (config format changes)
4. **shadcn/ui**: Check if used and update accordingly

## Breaking Changes to Handle
### Nextra 3.x
- Configuration changes in next.config.js
- Theme config updates
- Possible migration from pages/ to app/ directory
- MDX processing changes

### Tailwind CSS 4.x
- Configuration moves from tailwind.config.js to CSS imports
- PostCSS configuration changes
- Some utility class changes

## Success Criteria
- `pnpm build` completes successfully
- All pages render correctly
- Static export still works for GitHub Pages