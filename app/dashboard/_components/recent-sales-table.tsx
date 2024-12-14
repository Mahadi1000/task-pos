import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const recentSales = [
  {
    reference: "PS10000657",
    customer: "Jacob Falu",
    warehouse: "Warehouse 1",
    amount: "€ 19500.00",
    due: "€ 00.00",
    method: "Cash",
    status: "Due",
  },
  // Add more rows as needed
];

export function RecentSalesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>REFERENCE NO</TableHead>
          <TableHead>CUSTOMER</TableHead>
          <TableHead>WAREHOUSE</TableHead>
          <TableHead>TOTAL AMOUNT</TableHead>
          <TableHead>DUE</TableHead>
          <TableHead>METHOD</TableHead>
          <TableHead>PAYMENT STATUS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentSales.map((sale) => (
          <TableRow key={sale.reference}>
            <TableCell>{sale.reference}</TableCell>
            <TableCell>{sale.customer}</TableCell>
            <TableCell>{sale.warehouse}</TableCell>
            <TableCell>{sale.amount}</TableCell>
            <TableCell>{sale.due}</TableCell>
            <TableCell>{sale.method}</TableCell>
            <TableCell>
              <Badge
                variant={sale.status === "Due" ? "destructive" : "default"}
              >
                {sale.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
