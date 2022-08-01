import * as React from 'react';
import { useLogin } from '.';

export const Login: React.FC = () => {
  useLogin();
  return (
    <>
      <h3>Hello World from Login component</h3>
    </>
  );
};
