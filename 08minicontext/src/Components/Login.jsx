import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <UserContextProvider>
            <div>
                <h2>Login</h2>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='username' />
                {" "}
                <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </UserContextProvider>
    )
}
export default Login