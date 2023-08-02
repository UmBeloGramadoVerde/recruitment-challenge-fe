import { Transaction } from "@/types/transactions";
import { useEffect, useState } from "react";

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/transactions`)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      });
  }, []);

  return {transactions, loading};
}
