import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import { FaRegSmile } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { IoCamera } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { PiStickerDuotone } from "react-icons/pi";
import { useDispatch } from 'react-redux';
const Message = () => {

    return (
        <div className='bg-slate-600 h-screen flex-grow md:flex flex-col '>

            <ActiveUser />
            <div className='flex-grow overflow-x-hidden overflow-y-auto'>
                <Conversations />
            </div>

            <MessageControls />
        </div>
    )


}
const ActiveUser = () => {

    // const dispatch = useDispatch()
    return <div className='flex justify-between items-center p-4'>

        <div className='flex gap-3 bg-slate-700 p-4 justify-between w-full '>
            <div className='flex gap-8'>
                <img
                    className='size-10 rounded-full object-cover text-black'
                    src="https://plus.unsplash.com/premium_photo-1711051512657-3990bf66cc2e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='flex flex-col'>
                    <p>Kari</p>
                    <strong>Online</strong>
                </div>

            </div>

            <div className='flex gap-4 text-2xl'>
                <span><FaVideo /></span>
                <span><IoIosSearch /></span>


                <div className="dropdown dropdown-end object-cover">
                    <div tabIndex={0} role="button" className="m-1">
                        <span> <TbDotsVertical /></span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Contact Info</a></li>
                        <li><a>Select Messages</a></li>
                        <li><a>Starred Messages</a></li>
                        <li><a>Close Chat</a></li>
                        <li><a>Mute Notifications</a></li>
                        <li><a>Disapperaring Messages</a></li>
                        <li><a>Clear Chat</a></li>
                        <li><a>Delete Chat</a></li>
                        <li><a>Report</a></li>
                        <li><a>Block</a></li>


                    </ul>
                </div>
            </div>

        </div>
    </div>

}
const Conversations = () => {
    return <div>
        {
            [...Array(3)].map(item => <div>

                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.unsplash.com/photo-1711000328044-d90e2b181b95?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://plus.unsplash.com/premium_photo-1711051512657-3990bf66cc2e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className="chat-bubble">I hate you!</div>
                    <div className="chat-footer opacity-50">
                        Seen at 12:46
                    </div>
                </div>
            </div>)
        }
    </div>

}
const MessageControls = () => {
    return <div className='bg-slate-700 w-full flex gap-4 items-center p-4'>
        <span className='text-2xl'><FaRegSmile /></span>
        <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="m-1  text-2xl"><FaPlus /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <div className='flex'>
                    <span className='text-xl pt-2'><IoDocumentOutline /></span>
                    <li><a>Documents</a></li>
                </div>

                <div className='flex'>
                    <span className='text-xl pt-2'><MdOutlinePhotoLibrary /></span>
                    <li><a>Photos & Videos</a></li>
                </div>

                <div className='flex'>
                    <span className='text-xl pt-2'><IoCamera /></span>
                    <li><a>Camera</a></li>
                </div>

                <div className='flex'>
                    <span className='text-xl pt-2'><IoPerson /></span>
                    <li><a>Contact</a></li>
                </div>
                <div className='flex'>
                    <span className='text-xl pt-2'><RiBarChartHorizontalLine /></span>
                    <li><a>Poll</a></li>
                </div>

                <div className='flex'>
                    <span className='text-xl pt-2'><PiStickerDuotone /></span>
                    <li><a>New Sticker</a></li>
                </div>

            </ul>
        </div>
        <input type="text" placeholder='Type Message' className="input input-bordered w-full" />
        <span className='text-2xl'><FaMicrophone /></span>
    </div>
}

export default Message