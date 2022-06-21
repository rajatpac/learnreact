import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    { title: "Car Insurance", amount: "2334.34", date: new Date(2022, 2, 28) },
    {
      title: "Auto Insurance",
      amount: "56767.34",
      date: new Date(2022, 4, 12),
    },
    {
      title: "Mobile Insurance",
      amount: "4546.34",
      date: new Date(2022, 6, 23),
    },
    {
      title: "Theft Insurance",
      amount: "8789.34",
      date: new Date(2022, 7, 5),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
     <Expenses expenses={expenses}/>
    </div>
  );
}

export default App; 
