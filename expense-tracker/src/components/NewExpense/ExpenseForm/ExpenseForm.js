import './ExpenseForm.css';
import React, { useState } from 'react';


const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

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
            inputTitle: title,
            inputAmount: amount,
            inputDate: date
        };

        console.log('inputData');
        console.log(formData);

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
                    <input type='text' value={title} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>
                        Amount
                    </label>
                    <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>
                        Date
                    </label>
                    <input type='date' value={date} min='2023-01-01' max='2025-01-01' onChange={dateChangeHandler} />
                </div>
            </div>
            <button type='submit' >Submit</button>
        </form>
    );
}

export default ExpenseForm;