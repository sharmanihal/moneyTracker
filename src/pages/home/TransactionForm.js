import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({uid}) {

    const [name,setName]=useState('');
    const [amount,setAmount]=useState('');

    const {addDocument,response}=useFirestore('transactions')
    const handleSubmit=(e)=>{
        e.preventDefault();
        addDocument({
            uid,
            name,amount
        })
    }

    useEffect(() => {
        if(response.success){
            setName("")
            setAmount("")
        }
    }, [response.success])
    return (
        <>
            <h3 >Add a transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction name:</span>
                    <input required
                    type='text'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}></input>
                </label>
                <label>
                    <span>Amount($):</span>
                    <input required
                    type='number'
                    onChange={(e)=>setAmount(e.target.value)}
                    value={amount}></input>
                </label>
                <button>Add Transaction</button>
            </form>
        </>
    )
}
