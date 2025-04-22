// IncomeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface Income {
  id: string;
  source: string;
  amount: number;
  merchant: string;
  date: string;
  isRecurring: boolean;
  recurrencePattern?: string;
  notes?: string;
  paymentMethod?: string;
  createdAt: string;
}

interface ApiError {
  message: string;
  field?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: Income[];
  errors?: ApiError[];
}

interface IncomeContextType {
  incomes: Income[];
  addIncome: (income: Omit<Income, "id" | "createdAt">) => Promise<void>;
  // updateIncome: (id: string, updates: Partial<Income>) => Promise<void>;
  // deleteIncome: (id: string) => Promise<void>;
  isLoading: boolean;
  error: ApiError | null;
  refreshIncomes: () => Promise<void>;
  totalIncome: number;
}

const IncomeContext = createContext<IncomeContextType | undefined>(undefined);

export const IncomeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const API_BASE_URL = "http://localhost:2402";

  const fetchIncomes = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get<ApiResponse>(
        `${API_BASE_URL}/income/getIncome`
      );
      if (response.data.success && response.data.data) {
        setIncomes(response.data.data);
      } else {
        throw new Error(response.data.message || "Failed to fetch incomes");
      }
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const addIncome = async (incomeData: Omit<Income, "id" | "createdAt">) => {
    setIsLoading(true);
    try {
      const response = await axios.post<ApiResponse>(
        `${API_BASE_URL}/income/addIncome`,
        incomeData
      );
      if (response.data.success) {
        await fetchIncomes(); // Refresh the list
      } else {
        throw new Error(response.data.message || "Failed to add income");
      }
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // const updateIncome = async (id: string, updates: Partial<Income>) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.put<ApiResponse>(
  //       `${API_BASE_URL}/income/updateIncome/${id}`,
  //       updates
  //     );
  //     if (response.data.success) {
  //       await fetchIncomes(); // Refresh the list
  //     } else {
  //       throw new Error(response.data.message || "Failed to update income");
  //     }
  //   } catch (err) {
  //     handleError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const deleteIncome = async (id: string) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.delete<ApiResponse>(
  //       `${API_BASE_URL}/income/deleteIncome/${id}`
  //     );
  //     if (response.data.success) {
  //       await fetchIncomes(); // Refresh the list
  //     } else {
  //       throw new Error(response.data.message || "Failed to delete income");
  //     }
  //   } catch (err) {
  //     handleError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleError = (err: unknown) => {
    let errorMessage = "An unexpected error occurred";
    if (axios.isAxiosError(err)) {
      errorMessage = err.response?.data?.message || err.message;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }
    setError({ message: errorMessage });
    console.error("Income context error:", errorMessage);
  };

  // Calculate total income
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);

  // Initial fetch
  useEffect(() => {
    fetchIncomes();
  }, []);

  return (
    <IncomeContext.Provider
      value={{
        incomes,
        addIncome,
        // updateIncome,
        // deleteIncome,
        isLoading,
        error,
        refreshIncomes: fetchIncomes,
        totalIncome,
      }}
    >
      {children}
    </IncomeContext.Provider>
  );
};

export const useIncome = () => {
  const context = useContext(IncomeContext);
  if (!context) {
    throw new Error("useIncome must be used within an IncomeProvider");
  }
  return context;
};

// Custom hook that uses the context
export const useGetIncome = () => {
  const incomeContext = useIncome();
  return {
    income: incomeContext.incomes,
    isLoading: incomeContext.isLoading,
    error: incomeContext.error,
    refreshIncome: incomeContext.refreshIncomes,
    totalIncome: incomeContext.totalIncome,
  };
};
