import React from 'react'
import './sidebar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <h1 className='sidebar-title'>به داشبورد مدیریت خوش آمدید</h1>
            </div>
            <div className="search-box sidebar-search-box position-relative m-3">
                <input type="text" placeholder='چیزی تایپ کنید...' className='w-100 px-2' />
                <button className='h-100' style={{ background: "gray" }}>جستجو</button>
            </div>
            <ul className='sidebar-items mt-3'>
                <li>
                    <Link to="/products" className='w-100'>
                        <IoHomeOutline className='ms-2' />
                        صفحه اصلی
                    </Link>
                </li>
                <li className='active'>
                    <Link to="/products" className='w-100'>
                        <MdOutlineProductionQuantityLimits className='ms-2' />
                        محصولات
                    </Link>
                </li>
                <li>
                    <Link to="/comments" className='w-100'>
                        <MdOutlineComment className='ms-2' />
                        نظرات
                    </Link>
                </li>
                <li>
                    <Link to="/users" className='w-100'>
                        <LuUsersRound className='ms-2' />
                        کاربران
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className='w-100'>
                        <BsBagCheck className='ms-2' />
                        سفارشات
                    </Link>
                </li>
                <li>
                    <Link to="/offs" className='w-100'>
                        <MdOutlineLocalOffer className='ms-2' />
                        تخفیفات
                    </Link>
                </li>
            </ul>

        </div>
    )
}