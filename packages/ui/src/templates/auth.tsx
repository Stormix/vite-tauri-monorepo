import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="container flex h-screen w-screen flex-col items-center justify-center">{children}</main>;
};

export default AuthLayout;
