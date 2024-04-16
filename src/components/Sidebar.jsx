import { FaUsers } from "react-icons/fa";
import { PiCircleDashedBold } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuMessageSquarePlus } from "react-icons/lu";
import { TbDotsVertical } from "react-icons/tb";
import { GrFormPreviousLink } from "react-icons/gr";
import { BiSolidPencil } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import { IoDownloadOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";

const Sidebar = () => {
    return (
        <div className='bg-[#111B21] w-full md:w-80  flex flex-col overflow-x-hidden'>
            <Profile />
            {/* <Search /> */}
            <div className='overflow-y-auto overflow-x-hidden flex-grow'>
                {
                    [...Array(10)].map((item, i) => <Users key={i} />)
                }
            </div>




        </div>
    )
}
const Profile = () => {
    return <>

        <div className="flex justify-between items-center p-3">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="drawer-button">
                        <img
                            className=' size-8 rounded-full m-3'
                            src="https://plus.unsplash.com/premium_photo-1711051512657-3990bf66cc2e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-0 w-80 min-h-full bg-base-200 text-base-content">
                        <div className="bg-green-600 h-20">
                            <li><a><span className="justify-center items-center"><GrFormPreviousLink /></span>Profile</a></li>
                        </div>

                        <div className=' flex justify-center items-center bg-slate-300 h-72'>
                            <img
                                className='size-40 rounded-full object-cover mt-20 '
                                src="https://plus.unsplash.com/premium_photo-1711051512657-3990bf66cc2e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div>
                            <div>
                                <p className="text-green-900 p-3">Your Name</p>
                            </div>
                            <div className="flex justify-between p-3">
                                <p>Kimaya Kate</p>
                                <span><BiSolidPencil /></span>
                            </div>
                        </div>
                        <div className="bg-slate-300 p-5">
                            <p>This is not your username or PIN . This name will be visible to your WhatsApp contacts</p>
                        </div>
                        <div className="">
                            <p className="text-green-700 p-3">About</p>
                            <div className="flex justify-between p-3">
                                <p>Busy</p>
                                <span><BiSolidPencil /></span>
                            </div>

                        </div>

                    </ul>
                </div>
            </div >


            <div className='flex gap-4 text-2xl'>
                <span><FaUsers /></span>
                <span><PiCircleDashedBold /></span>
                <span><IoChatbubbleEllipsesOutline /></span>
                <span><LuMessageSquarePlus /></span>


                <div className="dropdown dropdown-end object-cover">
                    <div tabIndex={0} role="button" className="m-1">
                        <span> <TbDotsVertical /></span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>New Group</a></li>
                        <li><a>New Community</a></li>
                        <li><a>Starred Messages</a></li>
                        <li><a>Select Chats</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>

                    </ul>
                </div>
            </div>
        </div >
        <div className="flex justify-between p-3">
            <input className="p-1 rounded-md w-full important" type="text" placeholder="Search" />
            <span><VscThreeBars /></span>
        </div>


    </>


}
const Users = () => {
    const dispatch = useDispatch()
    return <>
        <div onClick={e => dispatch(toggleSidebar(false))} className='flex items-center justify-between p-3 hover:bg-[#16282f] cursor-pointer'>
            <div className='flex gap-2 items-center'>
                <img className='size-10 rounded-full object-cover'
                    src="https://plus.unsplash.com/premium_photo-1711051512657-3990bf66cc2e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div>
                    <strong>Karishma Kate</strong>
                    <p className='text-xs'>Lorem ipsum dolor sit</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <span>10:30</span>
                <div className='bg-green-400 text-sm text-black size-4 rounded-full justify-center items-cente'>2</div>
            </div>
        </div>
    </>
}

export default Sidebar