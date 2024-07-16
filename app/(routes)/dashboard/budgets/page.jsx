import React from "react";
import Budgetlist from "./_components/Budgetlist";

function Budgets() {
  return (
    <div className="p-10 bg-customGray min-h-screen">
      <h2 className="font-bold text-3xl text-silverCrest">My Budgets</h2>
      <Budgetlist />
    </div>
  );
}

export default Budgets;
