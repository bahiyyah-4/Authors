import React, { useState } from 'react';
import { Link } from '@reach/router';

const AuthorForm = ({ initName, initBook1, buttonClass, buttonName, onSubmitProp, errors }) => {
    const [name, setName] = useState(initName);
    const [book1, setBook1] = useState(initBook1);

    const style = {
        card: {
            borderRadius: '10px',
            margin: '15px',
            padding: '15px',
            textAlign: 'left'
        },
        label: {
            fontWeight: 'bold'
        },
        span: {
            color: 'red'
        },
        invalid: {
            display: 'inline-block',
            fontSize: '14px',
            color: 'red',

        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, book1 })
    }

    return (
        <div >
            <div style={style.card}>
                <form onSubmit={onSubmitHandler}>
                    <div >
                        <label style={style.label}>Name:</label>
                        <input
                            type="text"
                            onChange={e => { setName(e.target.value) }}
                            value={name} />
                        <div style={style.invalid}>{errors.name ? errors.name.message : null}</div>
                    </div>
                    <div >
                        <label style={style.label}>Book 1:</label>
                        <input
                            type="text"
                            onChange={e => { setBook1(e.target.value) }}
                            value={book1} />
                    </div>

                    <input className={buttonClass} type="submit" value={buttonName} />
                    <span>&nbsp;</span>
                    <Link to="/">Cancel</Link>
                </form>
            </div>
        </div>


    )
}

export default AuthorForm;