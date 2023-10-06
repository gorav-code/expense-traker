import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Card from './components/Card/Card';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <div>
      <h1>Lets gets started!</h1>
      <Card className="expenses">

        <h2>Add a new expense</h2>
        <NewExpense />

        <h2>Current Expenses</h2>
        <Expenses />
      </Card>
    </div>
  );
}

export default App;
