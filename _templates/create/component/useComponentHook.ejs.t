---
to: "<%= hook ? `src/${componentType}/${componentName}/hooks/use${componentName}.ts` : null %>"
---
export const use<%= componentName %> = () => {
  return {};
};
