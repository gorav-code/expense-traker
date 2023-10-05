import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';


function Expenses() {
    const expenses = [
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
    ];

    return (
        <Card className="expenses">
            <ul>
            {
                //passing paramters individually
                expenses.map((item) => {
                    return <ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>
                })
            }
            </ul>            
        </Card>
    );
}

export default Expenses;