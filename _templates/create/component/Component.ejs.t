---
to: src/<%= componentType %>/<%= componentName %>/<%= componentName %>.tsx
unless_exists: true
---
import * as React from 'react';
<% if(locals.hook){ -%>
import { use<%= componentName %> } from '.';
<% } -%>

interface <%= componentName %>Props {}

export const <%= componentName %>: React.FC = (props: <%= componentName %>Props) => {
<% if(locals.hook){ -%>
  use<%= componentName %>();
<% } -%>
  return (
    <>
      <h3>Hello World from <%= componentName %> component</h3>
    </>
  );
};
