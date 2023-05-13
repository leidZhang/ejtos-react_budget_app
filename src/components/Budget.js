import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [ updatedBudget, setUpdatedBudget ] = useState(budget);
    const totalExpenses  = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                    value={updatedBudget}
                    type='number'
                    step='10'
                    onChange={(event) => {
                        setUpdatedBudget(event.target.value);
                        if (event.target.value < totalExpenses) {
                            alert("You cannot reduce the budget value lower than the spending");
                        } else if (event.target.value > 20000) {
                            alert("The value cannot exceed remaining founds £" + (budget - totalExpenses));
                        } else {
                            dispatch({type: 'SET_BUDGET', payload: event.target.value});
                        }
                    }}
                ></input>
            </span>
        </div>  
    )
}

export default Budget; 
