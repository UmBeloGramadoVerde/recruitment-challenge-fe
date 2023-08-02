"use client";

const TransactionTable = React.lazy(
  () => import("@/components/TransactionTable/TransactionTable")
);
const TransactionSummaryTable = React.lazy(
  () => import("@/components/TransactionSummaryTable/TransactionSummaryTable")
);
import { useTransactions } from "@/hooks/useTransactions";
import { useEurRates } from "@/hooks/useEurRates";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import Loader from "@/components/Loader/Loader";
import React, { Suspense } from "react";

export default function HomePage() {
  const { data: transactionsData, isLoading: loadingTransactions } =
    useTransactions();
  const transactions = transactionsData ?? [];
  const { data: eurRatesData, isLoading: loadingEurRates } = useEurRates();
  const eurRates = eurRatesData ?? {};
  const centeredLoaderElement = (
    <div className="flex justify-center">
      <Loader />
    </div>
  );
  return (
    <div>
      <div className="absolute right-5 top-3">
        <ThemeSwitcher />
      </div>
      <div className="p-5 gap-5 flex flex-col">
        <h1 className="text-2xl">Swissborg Challenge Frontend</h1>
        <section className="gap-3 flex flex-col">
          <h2 className="text-xl">Transactions Table</h2>
          <div className="px-5 py-3 border border-dark dark:border-light rounded-md">
            {loadingTransactions || loadingEurRates ? (
              centeredLoaderElement
            ) : (
              <Suspense fallback={centeredLoaderElement}>
                <TransactionTable
                  transactions={transactions}
                  eurRates={eurRates}
                />
              </Suspense>
            )}
          </div>
        </section>
        <section className="gap-3 flex flex-col">
          <h2 className="text-xl">Transactions Summary Table</h2>
          <div className="px-5 py-3 border border-dark dark:border-light rounded-md">
            {loadingTransactions || loadingEurRates ? (
              centeredLoaderElement
            ) : (
              <Suspense fallback={centeredLoaderElement}>
                <TransactionSummaryTable
                  transactions={transactions}
                  eurRates={eurRates}
                />
              </Suspense>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
