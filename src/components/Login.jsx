import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../pages/Auth'
import Chat from '../pages/Chat'

const Login = () => {
    const [showChat, setshowChat] = useState(true)
    const { toggle } = useContext(ThemeContext)
    const navigate = useNavigate()
    return <div className='flex justify-center items-center h-screen'>

        <div className="card card-compact w-96 bg-slate-400 shadow-xl">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body overflow-hidden bg-slate-400">
                <h2 className="card-title text-black">Login</h2>
                <motion.input
                    initial={{ x: "-200%" }}
                    transition={{ duration: 0.4 }}
                    animate={{ x: 0 }}
                    type="number"
                    placeholder='Enter Mobile Number'
                    className='input input-bordered w-full'

                />
                <motion.input
                    initial={{ x: "-200%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}

                    type="password"
                    placeholder="Enter Password"
                    className="input input-bordered w-full"
                />
                <motion.div
                    initial={{ y: "200%" }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    animate={{ y: 0 }}>
                    <button
                        onClick={e => navigate("/chat")}
                        className='btn btn-success bg-[#00D0EB] w-full hover:bg-[#26C3E5]'
                    >Login
                    </button>
                </motion.div>

                <motion.p
                    className='text-black'
                    initial={{ y: "200%" }}
                    transition={{ duration: 0.2, delay: 0.12 }}
                    animate={{ y: 0 }}

                >Dont't have Account ? <span onClick={toggle} className='text-blue-600 cursor-pointer'>Create Account</span></motion.p>
            </div>
        </div>

    </div>
    {
        showChat ? <Chat /> : ""
    }
}

export default Login