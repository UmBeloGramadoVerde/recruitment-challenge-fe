import { EurRates, Transaction } from "@/types/transactions";
import { useEffect } from "react";
import { applyPrecision } from "@/utils";
import { DynamicTable } from "@/components/DynamicTable/DynamicTable";
import { useSummary } from "@/hooks/useSummary";

interface TransactionSummaryTableProps {
  transactions: Transaction[];
  eurRates: EurRates;
}

const TransactionSummaryTable: React.FC<TransactionSummaryTableProps> = ({
  transactions,
  eurRates,
}) => {
  const { summaryArray } = useSummary(transactions, eurRates);

  const cols = [
    {
      header: "Currency",
      dataKey: "currency",
    },
    {
      header: "Completed Withdrawals",
      dataKey: "completedWithdrawals",
    },
    {
      header: "Completed Deposits",
      dataKey: "completedDeposits",
    },
    {
      header: "Pending Withdrawals",
      dataKey: "pendingWithdrawals",
    },
    {
      header: "Pending Deposits",
      dataKey: "pendingDeposits",
    },
    {
      header: "Balance",
      dataKey: "",
      render: (summary: any) =>
        `${applyPrecision(summary.totalBalance)} ${summary.currency}`,
    },
    {
      header: "Balance EUR Equiv",
      dataKey: "",
      render: (summary: any) => {
        return summary.balanceEurEquiv
          ? `${applyPrecision(summary.balanceEurEquiv)} €`
          : "-";
      },
    },
  ];

  useEffect(() => {
    console.log("summaryArray", summaryArray);
  }, [summaryArray]);

  return (
    <div>
      <DynamicTable data={summaryArray} cols={cols} />
    </div>
  );
};

export default TransactionSummaryTable;
