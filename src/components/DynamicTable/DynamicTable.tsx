import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table";
import { ReactNode } from "react";

interface DynamicTableProps {
  data: any[];
  cols: {
    header: string;
    dataKey: string;
    render?: (data: any) => ReactNode;
  }[];
}

export const DynamicTable: React.FC<DynamicTableProps> = ({ data, cols }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {cols.map((col, index) => (
            <TableHead key={index}>{col.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, i) => (
          <TableRow key={i}>
            {cols.map((col, index) => (
              <TableCell key={index}>
                {col.render ? col.render(item) : item[col.dataKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
