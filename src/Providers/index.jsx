import { LoginProvider } from "./Login";
import { GroupsProvider } from "./groups";
import { SignUpProvider } from "./signUp";
import { HabitsProvider } from "./habits";
import { UserProvider } from "./usersFunctions";
import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./Goals";

export const Providers = ({ children }) => {
  return (
                <UserProvider>
    <SignUpProvider>
        <HabitsProvider>
          <GroupsProvider>
            <ActivitiesProvider>
              <GoalsProvider>
        <LoginProvider>
                  {children}
    </LoginProvider>
              </GoalsProvider>
            </ActivitiesProvider>
          </GroupsProvider>
        </HabitsProvider>
      </SignUpProvider>
                </UserProvider>
  );
};
