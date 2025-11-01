import React, { useState } from 'react'
import '../styles/sidebar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoClose } from "react-icons/io5";






export default function Sidebar() {
    // const [isShowSidebar, setIsShowSidebar] = useState(true)
    // const closeSidebar = () => {
    //     setIsShowSidebar(prev => !prev)
    // }

    return (
        <div className='sidebar'>
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <h1 className='sidebar-title'>به داشبورد مدیریت خوش آمدید</h1>
            </div>
            <div className="search-box sidebar-search-box position-relative m-3">
                <input type="text" placeholder='چیزی تایپ کنید...' className='w-100 px-2' />
                <button className='h-100' style={{background: "gray"}}>جستجو</button>
            </div>
            <ul className='sidebar-items mt-3'>
                <li>
                    <a href="#" className='w-100'>
                        <IoHomeOutline className='ms-2' />
                        صفحه اصلی
                    </a>
                </li>
                <li className='active'>
                    <a href="#" className='w-100'>
                        <MdOutlineProductionQuantityLimits className='ms-2' />
                        محصولات
                    </a>
                </li>
                <li>
                    <a href="#" className='w-100'>
                        <MdOutlineComment className='ms-2' />
                        نظرات
                    </a>
                </li>
                <li>
                    <a href="#" className='w-100'>
                        <LuUsersRound className='ms-2' />
                        کاربران
                    </a>
                </li>
                <li>
                    <a href="#" className='w-100'>
                        <BsBagCheck className='ms-2' />
                        سفارشات
                    </a>
                </li>
                <li>
                    <a href="#" className='w-100'>
                        <MdOutlineLocalOffer className='ms-2' />
                        تخفیفات
                    </a>
                </li>
            </ul>

        </div>
    )
}
