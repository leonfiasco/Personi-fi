import { useState, useEffect } from "react";
import axios from "axios";

interface Expense {
  id: string;
  transactionCategory: string;
  transactionAmount: number;
  transactionMerchant: string;
  createdAt: string; // or Date if you parse it
  // Add any other fields your Expense model has
}

interface ApiError {
  message: string;
  field?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: Expense[];
  errors?: ApiError[];
}

const API_BASE_URL = "http://localhost:2402"; // Should match your backend URL

export const useGetExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchExpenses = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get<ApiResponse>(
        `${API_BASE_URL}/expense/getExpenses`
      );

      if (response.data.success && response.data.data) {
        setExpenses(response.data.data);
      } else {
        throw new Error(response.data.message || "Failed to fetch expenses");
      }
    } catch (err) {
      let errorMessage = "An unexpected error occurred";

      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message || err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError({ message: errorMessage });
      console.error("Error fetching expenses:", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch expenses on initial load
  useEffect(() => {
    fetchExpenses();
  }, []);

  // Function to refresh expenses
  const refreshExpenses = () => {
    fetchExpenses();
  };

  return {
    expenses,
    isLoading,
    error,
    refreshExpenses: refreshExpenses,
  };
};
