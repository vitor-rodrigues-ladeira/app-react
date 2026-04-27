import { useState } from 'react';
import styles from './Form.module.css';

export default function MyForm() {
    const [name, setName] = useState("")
    const [displayValue, setDisplayValue] = useState('')

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        setDisplayValue(name)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Digite alguma coisa:
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        className={styles.input} 
                        />
                </label>
                <input type="submit" className={styles.submit} />
            </form>
            {displayValue && <h1>{displayValue}</h1>}
        </div>
    )
}