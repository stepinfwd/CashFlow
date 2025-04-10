import CashFlowForm from "@/blocks/CashFlowForm";
import CashFlowTable from "@/blocks/CashFlowTable";
import { useUser } from "@clerk/clerk-react";

function Dashboard() {
  const { isLoaded, user } = useUser();
  if (!isLoaded) {
    // Handle loading state
    return null;
  }

  if (!user) return null;

  return (
    <div className="mx-auto mb-6">
      <div className="max-w-xl mx-auto">
        <p className="text-xl font-semibold m-6">
          Hi {user.firstName}, welcome to your dashboard 👋
        </p>
        <CashFlowForm />
        <CashFlowTable />
      </div>
    </div>
  );
}

export default Dashboard;
