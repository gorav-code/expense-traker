import './ExpenseForm.css';
import React, { useState } from 'react';


const ExpenseForm = (props) => {
    const [inputTitle, setTitle] = useState('');
    const [inputAmount, setAmount] = useState('');
    const [inputDate, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {        
        setDate(event.target.value);
    }

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
 
        const formData = {
            //id: Math.floor(Math.random() * 100).toString(), //assign new id to new expenseobj
            id: Date.now(), //we need unique key so we are taking time stampt as unique
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        //console.log(formData);

        //send data to parent method
        props.onSaveExpenseData(formData);        

        //reset input fields
        resetInputFields();
    }

    const resetInputFields = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>
                        Title
                    </label>
                    <input type='text' value={inputTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>
                        Amount
                    </label>
                    <input type='number' value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>
                        Date
                    </label>
                    <input type='date' value={inputDate} min='2023-01-01' max='2025-01-01' onChange={dateChangeHandler} />
                </div>
            </div>
            <button type='submit'>Add Expense</button>
        </form>
    );
}

export default ExpenseForm;