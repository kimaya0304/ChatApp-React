import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../pages/Auth'
import { motion } from 'framer-motion'
import { useRegisterMutation } from '../redux/apis/authApi'
import { toast } from 'react-toastify'

const Register = () => {
    const [signup] = useRegisterMutation()
    const [userData, setUserData] = useState({})

    const handleChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const { toggle } = useContext(ThemeContext)
    return <div className='flex justify-center items-center h-screen'>

        <div className="card card-compact w-96 shadow-xl bg-slate-400">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <div className="card-body overflow-hidden">
                <h2 className="card-title text-black">Register</h2>
                <motion.input
                    initial={{ x: "-200%" }}
                    transition={{ duration: 0.4 }}
                    animate={{ x: 0 }}

                    name='name'
                    onChange={handleChange}
                    type="text"
                    placeholder='Name'
                    className='input input-bordered w-full'

                />
                <motion.input
                    initial={{ x: "-200%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}

                    name='contact'
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter Contact"
                    className="input input-bordered w-full"
                />

                <motion.input
                    initial={{ x: "-200%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}

                    name='email'
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter Email"
                    className="input input-bordered w-full"
                />

                <motion.input
                    initial={{ x: "-200%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}

                    name='password'
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter Password"
                    className="input input-bordered w-full"
                />
                <motion.div
                    initial={{ y: "200%" }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    animate={{ y: 0 }}>
                    <button
                        onClick={e => signup(userData)}
                        className='btn btn-success bg-[#00D0EB] w-full hover:bg-[#26C3E5]'
                    >Register
                    </button>
                </motion.div>

                <motion.p
                    className='text-black'
                    initial={{ y: "200%" }}
                    transition={{ duration: 0.2, delay: 0.12 }}
                    animate={{ y: 0 }}

                >Have Account ? <span onClick={toggle} className='text-blue-600 cursor-pointer'>Login to Account</span></motion.p>
            </div>
        </div>

    </div>
}

export default Register