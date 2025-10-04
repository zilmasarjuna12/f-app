"use client";

import { IconCreditCard, IconWallet } from "@tabler/icons-react";
import { Eye, EyeOff, MoreVertical, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Card, CardHeader } from "@/components/ui/card";

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

export function AccountList() {
  const [showBalance, setShowBalance] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);

  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.balance,
    0,
  );
  const _income = 8500000;
  const expense = 6000000;
  const _savings = totalBalance - expense;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <IconWallet className="h-5 w-5 text-primary" />
            Akun Saya
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBalance(!showBalance)}
            className="h-8 w-8 p-0"
          >
            {showBalance ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <div className="flex flex-col">
        {accounts.map((account, index) => (
          <button
            key={account.name}
            type="button"
            className={`cursor-pointer border-b transition-all duration-200 hover:bg-accent/50 text-left w-full ${
              selectedAccount.name === account.name
                ? "bg-accent/30 border-l-4 border-l-primary"
                : ""
            }`}
            onClick={() => setSelectedAccount(account)}
          >
            <div className="flex flex-row items-center justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index === 0
                      ? "bg-blue-100 text-blue-600"
                      : index === 1
                        ? "bg-orange-100 text-orange-600"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  <IconCreditCard className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{account.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {showBalance
                      ? account.balance.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })
                      : "••••••••"}
                  </span>
                </div>
              </div>
              <MoreVertical className="h-4 w-4 text-muted-foreground" />
            </div>
          </button>
        ))}
        <div className="p-4">
          <Button className="w-full rounded-lg hover:scale-105 transition-transform duration-200">
            <Plus className="mr-2 h-4 w-4" />
            Tambah Akun
          </Button>
        </div>
      </div>
    </Card>
  );
}
