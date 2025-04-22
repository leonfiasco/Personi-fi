// BudgetContext.tsx
import React, { createContext, useContext, useState } from "react";

interface BudgetContextType {
  weeklyBudget: number;
  monthlyBudget: number;
  yearlyBudget: number;
  setWeeklyBudget: (amount: number) => void;
  setMonthlyBudget: (amount: number) => void;
  setYearlyBudget: (amount: number) => void;
  currentSpending: number;
  setCurrentSpending: (amount: number) => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [weeklyBudget, setWeeklyBudget] = useState(500);
  const [monthlyBudget, setMonthlyBudget] = useState(2000);
  const [yearlyBudget, setYearlyBudget] = useState(24000);
  const [currentSpending, setCurrentSpending] = useState(0);

  return (
    <BudgetContext.Provider
      value={{
        weeklyBudget,
        monthlyBudget,
        yearlyBudget,
        setWeeklyBudget,
        setMonthlyBudget,
        setYearlyBudget,
        currentSpending,
        setCurrentSpending,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }
  return context;
};
