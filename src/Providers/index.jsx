import { LoginProvider } from "./Login";
import { GroupsProvider } from "./groups";
import { SignUpProvider } from "./signUp";
import { HabitsProvider } from "./habits";
import { UserProvider } from "./usersFunctions";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <SignUpProvider>
        <HabitsProvider>
          <GroupsProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </GroupsProvider>
        </HabitsProvider>
      </SignUpProvider>
    </LoginProvider>
  );
};
