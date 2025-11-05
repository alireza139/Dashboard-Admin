import React, { useState } from 'react'
import './header.css'
import { CiBellOn } from "react-icons/ci";
import { CiBrightnessUp } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineComment } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import { BsBagCheck } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';



export default function Header() {
    const [showOffcanv, setShowOffcanv] = useState(true)
    const closeOffcanv = () => {
        setShowOffcanv(false)
    }
    const hamburgerMenuHandler = () => {
        setShowOffcanv(true)
    }
    return (
        <>
            <div className='header pt-2 px-2'>
                <GiHamburgerMenu className='hamburgerMenu' onClick={hamburgerMenuHandler} />
                <div className="right-header header-profile">
                    <img src="./logo192.png" alt="avatar" />
                    <div className="admin-info me-1">
                        <h1 className="admin-name fs-4">علیرضا حسینی</h1>
                        <h3 className="admin">توسعه دهنده</h3>
                    </div>
                </div>

                <div className="left-header d-flex align-items-center">
                    <div className="search-box header-search-box position-relative" style={{ marginLeft: "28px" }}>
                        <input type="text" placeholder='چیزی تایپ کنید...' className='w-100 px-2' />
                        <button className='h-100'>جستجو</button>
                    </div>
                    <div className="icons-box">
                        <CiBellOn className='ms-2' />
                        <CiBrightnessUp />
                    </div>
                </div>
            </div>

            <div className={`p-3 offcanv ${showOffcanv ? "show-offcanv" : "hide-offcanv"}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="offcanv-profile">
                        <img src="./logo192.png" alt="avatar" />
                        <div className="admin-info me-1">
                            <h1 className="admin-name fs-4">علیرضا حسینی</h1>
                            <h3 className="admin">توسعه دهنده فرانت اند</h3>
                        </div>
                    </div>
                    <IoClose className='close-icon' onClick={closeOffcanv} />
                </div>
                <hr />
                <ul className='sidebar-items mt-3'>
                    <li>
                        <Link to="/" className='w-100'>
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
        </>
    )
}
