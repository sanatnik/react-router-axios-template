import { createContext, useContext, useState, useEffect } from 'react'
import AuthContext from './AuthContext'
import { useNavigate } from 'react-router-dom'


export  const AuthProvider = ({children}) => {
    let [user, setUser] = useState(false)
    let navigate = useNavigate();

    let loginUser = (user) =>{
        console.log('function is called')
        if (user === true){setUser(false)}
        else {setUser(true)}        
        navigate('/')
    }

    // useEffect(() => {
    //     loginUser()
    // }, [])

    




    let contextData = {
        user:user,
        setUser: setUser,
        loginUser,
        // loginUser:loginUser,
    }

    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;