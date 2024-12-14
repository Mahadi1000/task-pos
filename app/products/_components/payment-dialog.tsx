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

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Make Payment</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="received-amount">Received Amount:</Label>
                <Input
                  id="received-amount"
                  value={receivedAmount}
                  onChange={(e) => setReceivedAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paying-amount">Paying Amount:</Label>
                <Input
                  id="paying-amount"
                  value={payingAmount}
                  onChange={(e) => setPayingAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="payment-type">Payment Type:</Label>
                <Select defaultValue="cash">
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
                <Select defaultValue="paid">
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
                  onChange={(e) => setDueAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="change-return">Change Return:</Label>
                <Input
                  id="change-return"
                  value={changeReturn}
                  onChange={(e) => setChangeReturn(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes:</Label>
              <Textarea
                id="notes"
                placeholder="Enter any additional notes here..."
                className="h-[120px]"
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
          <Button onClick={() => onOpenChange(false)}>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
