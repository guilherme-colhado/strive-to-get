import { LoginProvider } from "./Login";
import { GroupsProvider } from "./groups";
import { SignUpProvider } from "./signUp";
import { HabitsProvider } from "./habits";
import { UserProvider } from "./usersFunctions";
import { ActivitiesProvider } from "./activities";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <SignUpProvider>
        <HabitsProvider>
          <GroupsProvider>
            <ActivitiesProvider>
              <UserProvider>
                {children}
              </UserProvider>
            </ActivitiesProvider>
          </GroupsProvider>
        </HabitsProvider>
      </SignUpProvider>
    </LoginProvider>
  );
};
