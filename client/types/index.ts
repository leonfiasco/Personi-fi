// navigation-tabs.interface.ts
export interface INavigationTabs {
  tabs: string[];
  initialActiveTab?: string;
  budget?: boolean; // fixed from Boolean
}

// icon-name.type.ts
export type IconName =
  | "cutlery"
  | "bus"
  | "shopping-bag"
  | "gamepad"
  | "ellipsis-h"
  | "percent"
  | "plus"
  | "filter"
  | "header"
  | "bold"
  | "medium"
  | "key"
  | "sort"
  | "map"
  | "at"
  | "search"
  | "repeat"
  | "anchor"
  | "meetup"
  | "shopping-cart"
  | "taxi"
  | "coffee"
  | "film"
  | "book"
  | "gift"
  | "car";

// category.interface.ts
export type ICategory = {
  id: string;
  name: string;
  icon: IconName;
  color: string;
};

export interface ITransaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  icon: IconName;
  date: string;
  paymentMethod?: string;
}

export interface ICategorySpending {
  name: string;
  amount: number;
  percentage: number;
  icon: IconName;
}

// Update the interface in your ProgressCircle component file
export interface IProgressCircle {
  weeklyBudget: number;
  currentSpending: number;
  timeFrame: "Week" | "Month" | "Year";
  setTimeFrame: (frame: "Week" | "Month" | "Year") => void;
}

export interface ICategoryBreakdown {
  categorySpending: ICategorySpending[];
}

export interface DateSelectorsProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  selectedWeek: string;
  setSelectedWeek: (week: string) => void;
  months: string[];
  weeks: string[];
}

export interface IRecentTransactionsProps {
  transactions: ITransaction[];
  weeklyBudget: number;

  showAllTransactions: boolean;
  setShowAllTransactions: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IBudgetModal {
  showBudgetModal: boolean;
  setShowBudgetModal: React.Dispatch<React.SetStateAction<boolean>>;
  weeklyBudget: number;
  setWeeklyBudget: React.Dispatch<React.SetStateAction<number>>;
}
