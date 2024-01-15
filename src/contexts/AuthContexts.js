import React, { useContext, useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase'


const AuthContext = React.createContext()

export function useAuth()
{
    return useContext(AuthContext)
}

export function AuthProvider({ children })
{
    const [currentUser, setCurrentUser]= useState()
    const [loading, setLoading] = useState(true)
    function signup(email,password)
    {
       return createUserWithEmailAndPassword(getAuth(), email,password)
    }

    function login(email,password)
    {
        return signInWithEmailAndPassword(getAuth(),email,password)
    }

    useEffect(() => { 
       const unsubscribe =  getAuth().onAuthStateChanged(user => {  
        setCurrentUser(user)
        setLoading(false)
        })

        return unsubscribe
    }, [])
    

    const value={
        currentUser,
        login,
        signup
        
    }

    return (
        <AuthContext.Provider value={value}> 
            {!loading && children}
        </AuthContext.Provider>
      )
}


