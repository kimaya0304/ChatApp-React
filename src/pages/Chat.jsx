import React from 'react'
import Sidebar from '../components/Sidebar'
import Message from '../components/Message'
import { useSelector } from 'react-redux'

const Chat = () => {
    const { show } = useSelector(state => state.theme)

    return <>

        <div className='flex h-screen'>

            <Sidebar />
            <Message />

            {/* {
                show ? <Sidebar /> : <Message />
            } */}


        </div>



    </>
}

export default Chat
