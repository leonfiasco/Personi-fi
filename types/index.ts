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
