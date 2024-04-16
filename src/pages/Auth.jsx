import React, { createContext, useContext, useState } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'


export const ThemeContext = createContext()
const Auth = () => {

    const [show, setShow] = useState(true)
    const toggle = e => setShow(!show)
    return <ThemeContext.Provider value={{ toggle }}>
        <div className='flex'>
            <img
                className='h-screen hidden md:block'
                src="https://images.unsplash.com/photo-1712260547533-e3e6a0ed7139?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            <div className='flex-grow'>
                {show ? <Login /> : <Register />}

            </div>
        </div>
    </ThemeContext.Provider>
}

export default Auth