import { createContext, useContext, useState, useEffect } from 'react'
import AuthContext from './AuthContext'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import axios from 'axios';


export  const AuthProvider = ({children}) => {
    let [user, setUser] = useState(()=> localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null)
    let [authToken, setAuthToken] = useState(()=> localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
    let [loading, setLoading] = useState(true)
    let [lgform, setLgform] = useState({})
    const [myalert, setMyalert] = useState(null);

    let navigate = useNavigate();

    // Now we wanna login user
    // First we will send username and password
    // then we validation will occur in server side
    // it will send use access tokena and refresh token if data is valid
    // else it will send error message
    let loginUser = async (e)=> {
        e.preventDefault() // preventing page from reload
        // sending data and getting repsonse
        let response = await fetch('http://127.0.0.1:8000/token/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        // body:JSON.stringify()
        
    //     // converting response in json
        console.log(response)
        let data = await response.json()
        // if response is valid, setting values of states and storing authtoken in local storage and then sending user to home page
        if(response.status === 200){
            setAuthToken(data)
            console.log(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
            console.log(JSON.stringify(data))
            navigate('/')
            ShowAlert('You are Logged In', "success") 
        }else{
            alert('Something went wrong!')
        }
    }


    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authToken')
        navigate('/login')
        ShowAlert('Succefully Logout', "success") 
    }

    let registerUser = async (e) => {
        e.preventDefault()
        let url = 'http://127.0.0.1:8000/users/';
        let secretdata={
            'username':e.target.username.value,
            'email': e.target.email.value,
            'password': e.target.password.value,
            'confirmpassword' : e.target.confirmpassword.value,
            'branch': e.target.branch.value,
            };
        

        if (secretdata['email'] === '' || secretdata['username'] === '' || secretdata['password'] === '' || secretdata['password'] !==  secretdata['confirmpassword']) {
            alert('Please Input Valid Data')
                 
        } else {
            const data = await axios.post(
                url, 
                secretdata,
                )
            navigate('/')
            ShowAlert('Account Created, Now you can Login', "success") 
        }
        
    }


    const ShowAlert = (message, type) => {  // creating a function named ShowAlert
        setMyalert(
          {
            msg :message,
            type: type
          })
          setTimeout(() => { // defining time length
            setMyalert(null);
          }, 2000);
      }

    useEffect(()=> {
        if(authToken){
            setUser(jwt_decode(authToken.access))
        }
        setLoading(false)
    }, [authToken, loading])

    let contextData = {
        user,
        setUser,
        loginUser,
        logoutUser,
        setAuthToken,
        authToken,
        registerUser,
        myalert,
        setMyalert,
        ShowAlert,
        lgform,
        setLgform
    }

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;