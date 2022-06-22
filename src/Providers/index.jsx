import { GoalsProvider } from "./Providers/Groups";

export const Providers = ({ children }) => {
  return (
    <div>
      <GoalsProvider>{children}</GoalsProvider>
    </div>
  );
};
