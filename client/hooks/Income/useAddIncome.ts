import { useState } from "react";
import axios from "axios";

interface IncomeData {
  source: string;
  amount: number;
  merchant: string;
  date: Date;
  isRecurring: boolean;
  recurrencePattern: string | undefined;
  notes: string;
  paymentMethod: string | undefined;
}

interface ApiError {
  field?: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  errors?: ApiError[];
}

const API_BASE_URL = "http://localhost:2402"; // Replace with your actual backend URL

export const useAddIncome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [success, setSuccess] = useState(false);

  const addIncome = async (incomeData: IncomeData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Convert currency string to plain number string if needed
      const amount = incomeData.amount;

      const response = await axios.post<ApiResponse>(
        `${API_BASE_URL}/income/addIncome`,
        {
          ...incomeData,
          amount: amount,
        }
      );

      if (response.data.success) {
        setSuccess(true);
        return response.data;
      } else {
        throw new Error(response.data.message || "Failed to add income");
      }
    } catch (err) {
      let errorMessage = "An unexpected error occurred";

      if (axios.isAxiosError(err)) {
        // Handle axios errors
        if (err.response?.data?.errors) {
          // Handle validation errors from backend
          const firstError = err.response.data.errors[0];
          setError({
            field: firstError.field,
            message: firstError.message,
          });
          errorMessage = firstError.message;
        } else {
          errorMessage = err.response?.data?.message || err.message;
          setError({ message: errorMessage });
        }
      } else if (err instanceof Error) {
        setError({ message: err.message });
        errorMessage = err.message;
      }

      console.error("Error adding income:", errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addIncome,
    isLoading,
    error,
    success,
    reset: () => {
      setError(null);
      setSuccess(false);
    },
  };
};
