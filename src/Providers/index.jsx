import { LoginProvider } from "./Login";
import { GroupsProvider } from "./groups";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <GroupsProvider>{children}</GroupsProvider>
    </LoginProvider>
  );
};
