import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';


function Expenses(props) {

    const expenses = props.items;
    
    return ( 
            <ul>
                {
                    //passing paramters individually
                    expenses.map((item) => {
                        return <ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>
                    })
                }
            </ul>
    );
}

export default Expenses;