"use client"
import { useState, useEffect } from "react";
import { KeyboardIcon, KeySquareIcon, Minus, Plus, TimerResetIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaymentDialog } from "./payment-dialog"

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function Cart() {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "Demo Product 1", price: 120, quantity: 1 },
    { id: 2, name: "Demo Product 2", price: 80, quantity: 2 },
  ]);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F4") {
        setItems([]);
      } else if (event.key === "F5") {
        setPaymentDialogOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    setItems(
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalProducts = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="space-y-4 p-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    €{item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 0)
                    }
                    className="w-16 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, 0)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="border-t p-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>€{total.toFixed(2)}</span>
        </div>
        <div className="flex gap-5">
          <Button
            className="mt-4 w-full"
            onClick={() => setPaymentDialogOpen(true)}
          >
            Reset (F4) <TimerResetIcon />
          </Button>
          <Button
            className="mt-4 w-full"
            onClick={() => setPaymentDialogOpen(true)}
          >
            Pay Now (F5) <KeyboardIcon />
          </Button>
        </div>
      </div>
      <PaymentDialog
        open={paymentDialogOpen}
        onOpenChange={setPaymentDialogOpen}
        totalAmount={total}
        totalProducts={totalProducts}
      />
    </div>
  );
}
