import { useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'
import UpdateTransaction from './UpdateTransaction';

export default function TransactionList({transactions}) {
    const {deleteDocument}=useFirestore('transactions');
    const [update,setUpdate]=useState(false)
    const [id,setId]=useState('')
    const handleUpdate=(id)=>{
        setId(id)
        setUpdate(update?false:true)
    }
    return (
        <ul className={styles.transactions}>
            {transactions.map(function(transaction){
                return(
                    <div  key={transaction.id}>
                    <li>
                        <p className={styles.name}>{transaction.name}</p>
                        <p className={styles.amount}>${transaction.amount}</p>
                        <button onClick={()=>deleteDocument(transaction.id)}>x</button>
                        <button style={{marginTop:"60px"}} onClick={()=>handleUpdate(transaction.id)}>edit</button>
                    </li>
                    {update && id===transaction.id && <UpdateTransaction key={transaction.id} trans={transaction} handleToggle={handleUpdate}></UpdateTransaction>}
                    </div>
                )
            })}
        </ul>
    )
}
