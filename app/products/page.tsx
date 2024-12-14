import { Search, RefreshCcw, User } from "lucide-react";
import { ProductCard } from "./_components/product-card";
import { Cart } from "./_components/cart";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "./_components/header";
import { products } from "@/data/products";

export default function Page() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="flex h-[calc(100vh-64px)]">
          <div className="w-1/3 border-r">
            <Cart />
          </div>
          <main className="w-2/3 overflow-auto">
            <div className="p-6">
              <div className="mb-6 space-y-4">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Scan/Search Product by Barcode or Name"
                      className="pl-9"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <RefreshCcw className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose warehouse..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Warehouse 1</SelectItem>
                      <SelectItem value="2">Warehouse 2</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Category 1</SelectItem>
                      <SelectItem value="2">Category 2</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Brand 1</SelectItem>
                      <SelectItem value="2">Brand 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
