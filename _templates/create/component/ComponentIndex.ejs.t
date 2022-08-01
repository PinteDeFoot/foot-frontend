---
to: src/<%= componentType %>/<%= componentName %>/index.ts
unless_exists: true
---
export * from './<%= componentName %>';
<% if(locals.hook){ -%>
export * from './hooks/use<%= componentName %>';
<% } -%>
