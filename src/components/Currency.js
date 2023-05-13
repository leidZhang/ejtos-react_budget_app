import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [ updatedCurrency, setUpdatedCurrency ] = useState(currency);

    return (
        <div className='alert alert-secondary'>
            <select className="currency"
                    value={updatedCurrency}
                    onChange={(event) => {
                        setUpdatedCurrency(event.target.value);
                        dispatch({type: 'CHG_CURRENCY', payload: event.target.value});
                    }}
            >
                <option value="£" name="pound">Currency (£ Pound)</option>
                <option value="$" name="dollar">Currency ($ Dollar)</option>
                <option value="€" name="euro">Currency (€ Euro)</option>
                <option value="₹" name="ruppee">Currency (₹ Ruppee)</option>
            </select>
        </div>
    )
}

export default Currency;