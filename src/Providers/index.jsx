import { LoginProvider } from "./Login";
import { GroupsProvider } from "./groups";
import { SignUpProvider } from "./signUp";
import { HabitsProvider } from "./habits";
import { UserProvider } from "./usersFunctions";
import { ActivitiesProvider } from "./activities";
import { GoalsProvider } from "./Goals";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <SignUpProvider>
        <HabitsProvider>
          <GroupsProvider>
            <ActivitiesProvider>
              <GoalsProvider>
                <UserProvider>
                  {children}
                </UserProvider>
              </GoalsProvider>
            </ActivitiesProvider>
          </GroupsProvider>
        </HabitsProvider>
      </SignUpProvider>
    </LoginProvider>
  );
};
