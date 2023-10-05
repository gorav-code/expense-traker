import './ExpenseItem.css'

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-us', { month: 'long' });
    const day = props.date.toLocaleString('en-us', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div class="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>

            <div class='expense-item__description'>
                <h2 >{props.title}</h2>
                <div class='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;