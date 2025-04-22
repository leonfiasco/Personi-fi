// hooks/useGetIncome.ts (or wherever you want to place it)
import { useIncome } from "../../context/IncomeContext"; // adjust path if needed

export const useGetIncome = () => {
  const { incomes, isLoading, error, refreshIncomes, totalIncome } =
    useIncome();

  return {
    income: incomes,
    isLoading,
    error,
    refreshIncome: refreshIncomes,
    totalIncome,
  };
};
