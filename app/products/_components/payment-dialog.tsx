"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/store.hook";
import { addPayment } from "@/utils/paymentDB";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalAmount: number;
  totalProducts: number;
}

export function PaymentDialog({
  open,
  onOpenChange,
  totalAmount,
  totalProducts,
}: PaymentDialogProps) {
  const [receivedAmount, setReceivedAmount] = useState(totalAmount.toString());
  const [payingAmount, setPayingAmount] = useState(totalAmount.toString());
  const [dueAmount, setDueAmount] = useState("0");
  const [changeReturn, setChangeReturn] = useState("0");
  const [paymentType, setPaymentType] = useState("cash");
  const [paymentStatus, setPaymentStatus] = useState("paid");
  const [notes, setNotes] = useState("");
  const cartItems = useAppSelector((state) => state.cart.items);
  
  // Alert state
  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = async () => {
    try {
      const paymentRecord = {
        date: currentDate,
        receivedAmount: parseFloat(receivedAmount),
        payingAmount: parseFloat(payingAmount),
        dueAmount: parseFloat(dueAmount),
        changeReturn: parseFloat(changeReturn),
        paymentType,
        paymentStatus,
        notes,
        totalProducts,
        totalAmount,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      };

      await addPayment(paymentRecord);
      setAlert({
        show: true,
        message: "Payment has been recorded successfully.",
        type: "success"
      });
      
      // Close dialog after successful payment with a small delay
      setTimeout(() => {
        onOpenChange(false);
        setAlert({ show: false, message: "", type: "success" });
      }, 2000);
    } catch (error) {
      console.error('Error saving payment:', error);
      setAlert({
        show: true,
        message: "Failed to record payment. Please try again.",
        type: "error"
      });
    }
  };

  const handleReceivedAmountChange = (value: string) => {
    setReceivedAmount(value);
    const received = parseFloat(value) || 0;
    const paying = parseFloat(payingAmount) || 0;
    
    if (received >= paying) {
      setChangeReturn((received - paying).toFixed(2));
      setDueAmount("0");
    } else {
      setDueAmount((paying - received).toFixed(2));
      setChangeReturn("0");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Make Payment</DialogTitle>
        </DialogHeader>
        
        {alert.show && (
          <div 
            className={`mb-4 p-4 rounded-lg flex items-center ${
              alert.type === "success" 
                ? "bg-green-50 border border-green-200" 
                : "bg-red-50 border border-red-200"
            }`}
          >
            <div 
              className={`flex items-center gap-2 ${
                alert.type === "success" ? "text-green-800" : "text-red-800"
              }`}
            >
              {alert.type === "success" ? (
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              <span className="text-sm font-medium">{alert.message}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="received-amount">Received Amount:</Label>
                <Input
                  id="received-amount"
                  value={receivedAmount}
                  onChange={(e) => handleReceivedAmountChange(e.target.value)}
                  type="number"
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paying-amount">Paying Amount:</Label>
                <Input
                  id="paying-amount"
                  value={payingAmount}
                  onChange={(e) => setPayingAmount(e.target.value)}
                  type="number"
                  step="0.01"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="payment-type">Payment Type:</Label>
                <Select 
                  value={paymentType} 
                  onValueChange={setPaymentType}
                >
                  <SelectTrigger id="payment-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment-status">Payment Status:</Label>
                <Select 
                  value={paymentStatus} 
                  onValueChange={setPaymentStatus}
                >
                  <SelectTrigger id="payment-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="due-amount">Due Amount:</Label>
                <Input
                  id="due-amount"
                  value={dueAmount}
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="change-return">Change Return:</Label>
                <Input
                  id="change-return"
                  value={changeReturn}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes:</Label>
              <Textarea
                id="notes"
                placeholder="Enter any additional notes here..."
                className="h-[120px]"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4 rounded-lg border p-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sales Date:</span>
                <span>{currentDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Products:</span>
                <span>{totalProducts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Amount:</span>
                <span>€ {totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discount:</span>
                <span>€ 0.00 (0%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping:</span>
                <span>€ 0.00</span>
              </div>
              <div className="mt-4 flex justify-between border-t pt-4 font-medium">
                <span>Grand Total:</span>
                <span>€ {totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}