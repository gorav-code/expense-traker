import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

function Expenses(props) {
    const expenses = props.items;

    console.log(props);

    //in case no expenses found.
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    return (
        <ul className='expenses-list'>
            { 
                expenses.map((item) => {
                    return <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}>
                    </ExpenseItem>
                })
            }
        </ul>
    );
}

export default Expenses;