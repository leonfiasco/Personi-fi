export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

// Budget data
export const weeklyBudget = 5000;
export const currentSpending = 3200;

// Transactions data
export interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  icon: string;
  date: string;
  paymentMethod: string;
}

export const recentTransactions: Transaction[] = [
  {
    id: "1",
    name: "Grocery Store",
    category: "Food",
    amount: 320,
    icon: "shopping-cart",
    date: "Today",
    paymentMethod: "Cash",
  },
  {
    id: "2",
    name: "Taxi Ride",
    category: "Transport",
    amount: 85,
    icon: "taxi",
    date: "Today",
    paymentMethod: "Card",
  },
  {
    id: "3",
    name: "Coffee Shop",
    category: "Food",
    amount: 45,
    icon: "coffee",
    date: "Yesterday",
    paymentMethod: "Cash",
  },
  {
    id: "4",
    name: "Movie Tickets",
    category: "Entertainment",
    amount: 120,
    icon: "film",
    date: "Jun 10",
    paymentMethod: "Card",
  },
  {
    id: "5",
    name: "Book Store",
    category: "Shopping",
    amount: 250,
    icon: "book",
    date: "Jun 8",
    paymentMethod: "Cash",
  },
];

// Category spending data
export interface CategorySpending {
  name: string;
  amount: number;
  percentage: number;
  icon: string;
}

export const categorySpending: CategorySpending[] = [
  { name: "Shopping", amount: 498.5, percentage: 32, icon: "shopping-bag" },
  { name: "Gifts", amount: 344.45, percentage: 21, icon: "gift" },
  { name: "Food", amount: 230.5, percentage: 12, icon: "cutlery" },
  { name: "Transport", amount: 180.0, percentage: 7, icon: "bus" },
  { name: "Entertainment", amount: 150.0, percentage: 5, icon: "gamepad" },
];
