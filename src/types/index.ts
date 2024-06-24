export interface Product {
  name: string;
  sales: number;
}

export interface Sales {
  dateRange: string[];
  totalSalesUnites: number;
  totalSalesValue: number;
  topProducts: Product[];
  salesOverTime: { date: string; sales: number }[];
  salesByCategory: { category: string; sales: number }[];
  profitsOvertTime: { date: string; profit: number }[];
  insights: string[];
  recommendations: string;
}
