"use client";

import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconFilter,
  IconPigMoney,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddTransactionDialog } from "./add-transaction-dialog";

const accounts = [
  {
    name: "BCA",
    balance: 5000000,
  },
  {
    name: "Mandiri",
    balance: 3000000,
  },
  {
    name: "BRI",
    balance: 2000000,
  },
];

const transactions = [
  {
    id: "1",
    date: "2024-01-15",
    time: "10:30 AM",
    description: "Gaji Bulanan",
    category: "Pemasukan",
    account: "BCA",
    amount: 5000000,
    type: "income",
  },
  {
    id: "2",
    date: "2024-01-14",
    time: "02:15 PM",
    description: "Belanja Bulanan",
    category: "Pengeluaran",
    account: "Mandiri",
    amount: -1500000,
    type: "expense",
  },
];

export function Summary() {
  const [showBalance, _setShowBalance] = useState(true);
  const [_selectedAccount, _setSelectedAccount] = useState(accounts[0]);

  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.balance,
    0,
  );
  const income = 8500000;
  const expense = 6000000;
  const savings = totalBalance - expense;

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Dashboard Keuangan
          </h2>
          <p className="text-muted-foreground">
            Kelola keuangan Anda dengan mudah
          </p>
        </div>
        <AddTransactionDialog />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Income */}
        <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <CardDescription className="flex items-center gap-2">
                <IconArrowUpRight className="h-4 w-4 text-emerald-600" />
                Pemasukan
              </CardDescription>
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <IconArrowUpRight className="h-4 w-4 text-emerald-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold tabular-nums">
              {showBalance
                ? income.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                : "Rp ••••••••"}
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className="text-emerald-600 border-emerald-200 bg-emerald-50"
              >
                <IconTrendingUp className="h-3 w-3 mr-1" />
                +15.3%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>

        {/* Expense */}
        <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <CardDescription className="flex items-center gap-2">
                <IconArrowDownRight className="h-4 w-4 text-red-600" />
                Pengeluaran
              </CardDescription>
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <IconArrowDownRight className="h-4 w-4 text-red-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold tabular-nums">
              {showBalance
                ? expense.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                : "Rp ••••••••"}
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className="text-red-600 border-red-200 bg-red-50"
              >
                <IconTrendingDown className="h-3 w-3 mr-1" />
                +5.1%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>

        {/* Savings */}
        <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <CardDescription className="flex items-center gap-2">
                <IconPigMoney className="h-4 w-4 text-purple-600" />
                Tabungan
              </CardDescription>
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <IconPigMoney className="h-4 w-4 text-purple-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold tabular-nums">
              {showBalance
                ? savings.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                : "Rp ••••••••"}
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className="text-purple-600 border-purple-200 bg-purple-50"
              >
                <IconTrendingUp className="h-3 w-3 mr-1" />
                +25.7%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold">
                Transaksi Terbaru
              </CardTitle>
              <CardDescription>Aktivitas keuangan terbaru Anda</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <IconFilter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                Lihat Semua
              </Button>
            </div>
          </div>
        </CardHeader>
        <div className="px-6 pb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tanggal</TableHead>
                <TableHead>Deskripsi</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Akun</TableHead>
                <TableHead className="text-right">Jumlah</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.slice(0, 6).map((transaction) => (
                <TableRow
                  key={transaction.id}
                  className="cursor-pointer hover:bg-accent/30 transition-colors"
                >
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span className="text-sm">
                        {new Date(transaction.date).toLocaleDateString(
                          "id-ID",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {transaction.time}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === "income"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {transaction.type === "income" ? (
                          <IconArrowUpRight className="h-4 w-4" />
                        ) : (
                          <IconArrowDownRight className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          {transaction.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">
                      {transaction.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          transaction.account === "BCA"
                            ? "bg-blue-100 text-blue-600"
                            : transaction.account === "Mandiri"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-green-100 text-green-600"
                        }`}
                      >
                        {transaction.account.charAt(0)}
                      </div>
                      <span className="text-sm">{transaction.account}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`font-semibold ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : ""}
                      {Math.abs(transaction.amount).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
