import React from 'react'
import './sidebar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from 'react-router-dom';

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
                    <NavLink to="/home" className={({ isActive }) => (isActive ? "active w-100" : "w-100")}>
                        <IoHomeOutline className='ms-2' />
                        صفحه اصلی
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/products" className={({ isActive }) => (isActive ? "active w-100" : "w-100")}>
                        <MdOutlineProductionQuantityLimits className='ms-2' />
                        محصولات
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/comments" className={({ isActive }) => (isActive ? "active w-100" : "w-100")}>
                        <MdOutlineComment className='ms-2' />
                        نظرات
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/users" className={({ isActive }) => (isActive ? "active w-100" : "w-100")}>
                        <LuUsersRound className='ms-2' />
                        کاربران
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/orders" className={({ isActive }) => (isActive ? "active w-100" : "w-100")}>
                        <BsBagCheck className='ms-2' />
                        سفارشات
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/offs" className={({ isActive }) => (isActive ? "active w-100" : "w-100")}>
                        <MdOutlineLocalOffer className='ms-2' />
                        تخفیفات
                    </NavLink>
                </li>
            </ul>

        </div>
    )
}