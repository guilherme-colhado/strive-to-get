import { SignUpProvider } from "./SignUp";

export const Providers = ({ children }) => {
  return (
    <div>
      <SignUpProvider>{children}</SignUpProvider>
    </div>
  );
};
