import {
  ArrowDownLeft,
  ArrowUpRight,
  BarChart3,
  ShoppingCart,
} from "lucide-react";
import { MetricCard } from "./_components/metric-card";
import { SalesOverviewChart } from "./_components/sales-overview-chart";
import { ProductsDonutChart } from "./_components/products-donut-chart";
import { RecentSalesTable } from "./_components/recent-sales-table";

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Sales Today"
          value="€ 0.00"
          change={0.0}
          timeframe="last day"
          icon={<ArrowUpRight className="h-4 w-4" />}
        />
        <MetricCard
          title="Purchase Today"
          value="€ 0.00"
          change={0.0}
          timeframe="last day"
          icon={<ShoppingCart className="h-4 w-4" />}
        />
        <MetricCard
          title="Sales Return Today"
          value="€ 0.00"
          change={0.0}
          timeframe="last day"
          icon={<ArrowDownLeft className="h-4 w-4" />}
        />
        <MetricCard
          title="Purchases Return Today"
          value="€ 0.00"
          change={0.0}
          timeframe="last day"
          icon={<ArrowDownLeft className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Sales"
          value="€ 0.00"
          change={-99.18}
          timeframe="last month"
          icon={<ArrowUpRight className="h-4 w-4" />}
        />
        <MetricCard
          title="Total Purchase"
          value="€ 0.00"
          change={-100.0}
          timeframe="last month"
          icon={<ShoppingCart className="h-4 w-4" />}
        />
        <MetricCard
          title="Total Sales Return"
          value="€ 0.00"
          change={0.0}
          timeframe="last day"
          icon={<ArrowDownLeft className="h-4 w-4" />}
        />
        <MetricCard
          title="Total Purchases Return"
          value="€ 0.00"
          change={0.0}
          timeframe="last day"
          icon={<ArrowDownLeft className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Sales & Purchases Overview</h3>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          <SalesOverviewChart />
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-medium">Top 5 Products (November)</h3>
          <p className="text-sm text-muted-foreground">
            You made €27502.00 sales this month with these products
          </p>
          <ProductsDonutChart />
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-medium mb-4">Recent Sales</h3>
        <div className="relative overflow-x-auto">
          <RecentSalesTable />
        </div>
      </div>
    </div>
  );
}
