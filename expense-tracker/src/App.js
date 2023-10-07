import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Card from './components/Card/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter/ExpenseFilter';
import React, { useState } from 'react';

const expensesOriginal = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [filterYear, setFilterYear] = useState('2020');
  const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022');

  const [expenses, setExpenses] = useState(expensesOriginal);


  const addExpenseHandler = (expense) => {
    console.log('in app.js');
    console.log(expense);

    //add to expenses list
    //expensesOriginal.push(expense);
    
    //Note: since we are updating our state based on previous state then we will use function form 
    setExpenses((prevExpenses) => {
      //this will return a new array by merging new item from 'setExpenses' and existing items from '...expenses'.
      return [expense, ...prevExpenses];
    }); 
  }


  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    if (selectedYear === '2019') {
      setFilterInfoText('2020, 2021 & 2022');
    } else if (selectedYear === '2020') {
      setFilterInfoText('2019, 2021 & 2022');
    } else if (selectedYear === '2021') {
      setFilterInfoText('2019, 2020 & 2022');
    } else {
      setFilterInfoText('2019, 2020 & 2022');
    }
  }

  return (
    <div>
      <h1>Lets gets started!</h1>
      <Card className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
      </Card>

      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
        <p>Date for years {filterInfoText} is hidden.</p>

        <Expenses items={expenses} />
      </Card>
    </div>
  );
}

export default App;
