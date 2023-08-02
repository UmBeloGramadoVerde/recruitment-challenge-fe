import { EurRates, Transaction } from "@/types/transactions";
import { applyPrecision, formatDate } from "@/utils";
import { DynamicTable } from "@/components/DynamicTable/DynamicTable";

interface TransactionTableProps {
  transactions: Transaction[];
  eurRates: EurRates;
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  eurRates,
}) => {

  const calculateEuroEquivalent = (
    currency: string,
    amount: number
  ): string | number | null => {
    const euroRate = eurRates[currency];
    return euroRate !== null && euroRate !== undefined
      ? applyPrecision(amount * euroRate)
      : null;
  };

  const cols = [
    {
      header: "Timestamp",
      dataKey: "",
      render: (transaction: Transaction) => formatDate(transaction.timestamp),
    },
    {
      header: "Currency",
      dataKey: "currency",
    },
    {
      header: "Amount",
      dataKey: "",
      render: (transaction: Transaction) =>
        `${transaction.amount} ${transaction.currency}`,
    },
    {
      header: "EUR Equivalent",
      dataKey: "",
      render: (transaction: Transaction) => {
        const eurEquiv = calculateEuroEquivalent(
          transaction.currency,
          transaction.amount
        );
        return eurEquiv
          ? `${calculateEuroEquivalent(
              transaction.currency,
              transaction.amount
            )} €`
          : "-";
      },
    },
    {
      header: "Type",
      dataKey: "type",
    },
    {
      header: "Status",
      dataKey: "status",
    },
  ];

  return (
    <div>
      <DynamicTable data={transactions} cols={cols} />
    </div>
  );
};

export default TransactionTable;
