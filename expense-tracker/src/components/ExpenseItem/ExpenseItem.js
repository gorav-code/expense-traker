import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
import React, {useState} from 'react';
 
const ExpenseItem = (props)  => {

    const [title, setTitle] = useState(props.title);

    const changeTitleHandler = () => {
        //updating title
        setTitle("Hello world");
    }

    return (
        <li>
            <Card className="expense-item">
                {/* <ExpenseDate date={props.date}></ExpenseDate> */}
                <div className='expense-item__description'>
                    <h2 >{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                    <button onClick={changeTitleHandler}>Change Title</button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;

