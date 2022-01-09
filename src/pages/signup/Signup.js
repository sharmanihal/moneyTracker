import { useState } from 'react'
import { useSignUp } from '../../hooks/useSignup'
import styles from './Signup.module.css'
export default function Signup() {
    const [displayName,setDisplayName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,isPending,error}= useSignUp()
    const handleSubmit=(e)=>{
        e.preventDefault();
        signup(email,password,displayName)
    }
    return (
        <div>
            
            <form className={styles['signup-form']} onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <label>
                    <span>display name:</span>
                    <input
                    type="text"
                    value={displayName}
                    onChange={(e)=>setDisplayName(e.target.value)}
                    ></input>
                </label>
                <label>
                    <span>email:</span>
                    <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    ></input>
                </label>
                <label>
                    <span>password:</span>
                    <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                </label>
               {!isPending && <button className='btn'>Signup</button>}
                {error && <p>{error}</p>}
                {isPending && <button className='btn' disabled>loading</button>}
            </form>
        </div>
    )
}
