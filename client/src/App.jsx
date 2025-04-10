import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import CashFlowForm from "./blocks/CashFlowForm";
function App() {
  return (
    <>
      <div className="flex flex-col">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
