import { LoginProvider } from "./Login";
import { GroupsProvider } from "./groups";
import { SignUpProvider } from "./signUp";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <SignUpProvider>
        <GroupsProvider>{children}</GroupsProvider>
      </SignUpProvider>
    </LoginProvider>
  );
};
