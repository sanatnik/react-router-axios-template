import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    let navigate = useNavigate();
    let {user, setUser, loginUser} = useContext(AuthContext)
    

    
    return (
        <div>
            <h1>Login Page</h1>
            <div>
            <form onSubmit={() => loginUser()}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </div>
        </div>
    )
}
