import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  timeframe: string;
  icon: React.ReactNode;
}

export function MetricCard({
  title,
  value,
  change,
  timeframe,
  icon,
}: MetricCardProps) {
  const isPositive = change >= 0;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="text-muted-foreground">{icon}</div>
        </div>
        <div className="mt-2">
          <div className="text-2xl font-bold">{value}</div>
          <div className="flex items-center mt-1 text-xs">
            <span
              className={`flex items-center ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {isPositive ? (
                <ArrowUpIcon className="w-3 h-3 mr-1" />
              ) : (
                <ArrowDownIcon className="w-3 h-3 mr-1" />
              )}
              {Math.abs(change)}%
            </span>
            <span className="ml-1 text-muted-foreground">from {timeframe}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
