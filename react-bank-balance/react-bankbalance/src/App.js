import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValue = parseInt(localStorage.getItem("balance") || 0);

  const [balance, setBalance] = useState(initialValue);
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");

  //getting from localStorage
  /*   useEffect(() => {
    setBalance(parseInt(localStorage.getItem("balance")) || 0);
  }, []); */

  //setting a value to localStorage
  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  return (
    <form>
      <div class="container">
        <h1>Your Current Balance is {balance} €</h1>
        <div>
          <input onChange={(e) => setDeposit(e.target.value)} type="number" />
          <button onClick={() => setBalance(balance + Number(deposit))}>
            Deposit
          </button>
          <input onChange={(e) => setWithdraw(e.target.value)} type="number" />
          <button onClick={() => setBalance(balance - Number(withdraw))}>
            Withdraw
          </button>
        </div>
      </div>
    </form>
  );
}

export default App;
