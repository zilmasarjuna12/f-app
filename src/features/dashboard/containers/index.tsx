import { AccountList } from "../components/account-list-section";
import { Summary } from "../components/summary-section";

export async function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex w-full gap-6">
        {/* Accounts Sidebar */}
        <div className="w-full lg:w-[320px]">
          <AccountList />
        </div>

        {/* Main Content */}
        <div className="flex flex-1">
          <Summary />
        </div>
      </div>
    </div>
  );
}
