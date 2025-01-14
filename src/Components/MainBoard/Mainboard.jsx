import { useState,useEffect } from "react";
import "./MainBoard.css";
import Wallet from "../Wallet/Wallet";
import ExpenseTable from "../ExpenseTable/ExpenseTable"
import LineChart from "../LineChart/LineChart";
// import  LineChart  from "recharts";
const Mainboard=()=>{

    const categories = [
        "Food",
        "Grocery",
        "Travel",
        "Entertainment",
        "Shopping",
        "Others",
      ];
    const[Balance,setBalance]=useState(
        localStorage.getItem("Balance")?parseInt(localStorage.getItem("Balance"),10):5000);
   
//    const[expense,setExepense]=useState(
//         localStorage.getItem("Expense")?.length>0
//         ? JSON.parse(localStorage.getItem("Expense"))
//         : []
//     );
        const[expense,setExepense]=useState([]);

useEffect(() => {
    const storedExpenses = localStorage.getItem("Expense");
    if (storedExpenses) {
        setExepense(JSON.parse(storedExpenses));
    }
}, []);

const handleexpenseUpdate=(expense)=>{
    setExepense(expense);
    localStorage.setItem("Expense",JSON.stringify(expense));
};
    console.log(expense);
    return(
        <div className="total-conatiner">
        <Wallet categories={categories} Balance={Balance} setBalance={setBalance} expense={expense} setExepense={setExepense} handleexpenseUpdate={handleexpenseUpdate}/>
        {
            expense.length >0&&
            <div className="expense-linechart-container">
                <ExpenseTable categories={categories} expense={expense} handleexpenseUpdate={handleexpenseUpdate}/>
                
                <LineChart data={expense}/>
                </div>
        }
        </div>
    )
}
export default Mainboard