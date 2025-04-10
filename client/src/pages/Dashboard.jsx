import CashFlowForm from "@/blocks/CashFlowForm";
import CashFlowTable from "@/blocks/CashFlowTable";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const { isLoaded, user } = useUser();
  if (!isLoaded) {
    // Handle loading state
    return null;
  }

  if (!user)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
        <p className="text-lg font-medium mb-4">You are not signed in.</p>
        <Link to="/auth">
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">
            Singin
          </button>
        </Link>
      </div>
    );
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
