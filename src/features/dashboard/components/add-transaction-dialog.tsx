"use client";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddTransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:scale-105 transition-transform duration-200 shadow-lg">
          <Plus className="mr-2 size-4" />
          Tambah Transaksi
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Transaksi</DialogTitle>
          <DialogDescription>
            Transaksi baru ditambahkan ke kategori default.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
