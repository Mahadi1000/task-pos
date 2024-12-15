"use client"
import { useState, useEffect } from "react";
import { KeyboardIcon, Minus, Plus, TimerResetIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaymentDialog } from "./payment-dialog";
import { updateQuantity, clearCart } from "@/redux/slices/cart.slice";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hook";

export function Cart() {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F4") {
        dispatch(clearCart());
      } else if (event.key === "F5") {
        setPaymentDialogOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

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
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, parseInt(e.target.value) || 0)
                    }
                    className="w-16 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleUpdateQuantity(item.id, 0)}
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
            onClick={() => dispatch(clearCart())}
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