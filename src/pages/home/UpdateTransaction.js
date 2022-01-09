import {useState} from "react"
import {useFirestore} from "../../hooks/useFirestore"
import styles from "./Home.module.css"
export default function UpdateTransaction({trans, handleToggle}) {
    const {updateDocument, response} = useFirestore('transactions')
    const [title,
        setTitle] = useState(trans.name)
    const [amount,
        setAmount] = useState(trans.amount)
    console.log(response)
    const handleSubmit = (e) => {
        e.preventDefault()
        updateDocument(trans.id, {
            name: title,
            amount
        })
    }
    return (
        <form
            key={trans.id}
            className={styles.updateTransaction}
            onSubmit={handleSubmit}>
            <div style={{
                textAlign: 'center'
            }}>Update Transaction</div>
            <label>transaction name:
                <input required onChange={(e) => setTitle(e.target.value)} value={title}></input>
            </label>
            <label>amount:
                <input required onChange={(e) => setAmount(e.target.value)} type="number" value={amount}></input>
            </label>
            <input
                type='submit'
                value='Update'
                className='btn'
                style={{
                width: "90px",
                height: "45px"
            }}></input>
            <input
                type='submit'
                value='Close'
                className='btn'
                style={{
                width: "90px",
                height: "45px",
                marginLeft: "10px"
            }}
                onClick={handleToggle}></input>
        </form>
    )
}
