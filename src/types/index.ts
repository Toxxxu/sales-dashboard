export interface Product {
  name: string;
  sales: number;
}

export interface Sale {
  date: string;
  sales: number;
}

export interface Profit {
  date: string;
  profit: number;
}

export interface SaleByCategory {
  category: string;
  sales: number;
}

export interface SaleLineGraph {
  date: string;
  sales: number;
}
