import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(), //assign new id to new expenseobj
            ...enteredExpenseData, //take all other values 
        };

        props.onAddExpense(expenseData); 
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;