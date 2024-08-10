"use client";
import {UserButton, useUser} from "@clerk/nextjs";
import React, {useEffect, useState, useCallback} from "react";
import CardInfo from "./_components/CardInfo";
import {desc, eq, getTableColumns, sql} from "drizzle-orm";
import {Budgets, Expenses} from "@/utils/schema";
import {db} from "@/utils/dbConfig";
import BarChartDashboard from "./_components/BarChartDashboard";
import Expenseslist from "./expenses/_components/Expenseslist";
import BudgetItem from "./budgets/_components/BudgetItem";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Dashboard() {
  const {user} = useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  const getAllExpenses = useCallback(async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      try {
        const result = await db
          .select({
            id: Expenses.id,
            name: Expenses.name,
            amount: Expenses.amount,
            createdAt: Expenses.createdAt,
          })
          .from(Budgets)
          .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
          .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
          .orderBy(desc(Expenses.id));
        setExpensesList(result);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    }
  }, [user?.primaryEmailAddress?.emailAddress]);

  const getBudgetList = useCallback(async () => {
    if (user?.primaryEmailAddress?.emailAddress) {
      try {
        const result = await db
          .select({
            ...getTableColumns(Budgets),
            totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql`count(${Expenses.id})`.mapWith(Number),
          })
          .from(Budgets)
          .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
          .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
          .groupBy(Budgets.id)
          .orderBy(desc(Budgets.id));
        setBudgetList(result);
        getAllExpenses(); // Update expenses list after updating budget list
      } catch (error) {
        console.error("Error fetching budget list:", error);
      }
    }
  }, [user?.primaryEmailAddress?.emailAddress, getAllExpenses]);

  useEffect(() => {
    user && getBudgetList();
  }, [user, getBudgetList, getAllExpenses]); // Include getAllExpenses in the dependency array

  return (
    <div className="p-16 bg-customGray">
      <h1 className="font-bold text-3xl -mt-8 text-silverCrest">
        Welcome back, {user?.fullName}!
      </h1>
      <p className="mt-2 font-bold text-xl text-silverCrest">
        Here is an overall display of your expenses:
      </p>
      <CardInfo budgetList={budgetList} />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5">
        <div className="lg:col-span-2">
          <BarChartDashboard budgetList={budgetList} />
          <Expenseslist
            expensesList={expensesList}
            refreshData={() => getBudgetList()}
          />
        </div>
        <div className="grid gap-3">
          <h2 className="font-bold text-lg text-silverCrest">Latest Budgets</h2>
          {budgetList?.length > 0
            ? budgetList.map((budget, index) => (
                <BudgetItem budget={budget} key={index} />
              ))
            : [1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="h-[180px] w-full bg-silverCrest rounded-lg animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
