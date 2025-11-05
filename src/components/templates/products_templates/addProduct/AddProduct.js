import React from 'react'
import "./addProduct.css"
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbCircleDashedNumber6 } from "react-icons/tb";
import { BsCash } from "react-icons/bs";
import { MdOutlineSource } from "react-icons/md";



export default function AddProduct() {
    return (
        <div style={{background: "#fff" , padding: "1rem" , borderRadius: "6px" , width: "90%"}} className='mx-auto mt-5'>
            <h1>افزودن محصول جدید</h1>
            <form action="#" className='product-form addProduct-form'>
                <div className='mt-3'>
                    <MdDriveFileRenameOutline className='icn'/>
                    <input type="text" placeholder='نام محصول را وارد کنید' />
                </div>
                <div className='mt-3'>
                    <TbCircleDashedNumber6 className='icn'/>
                    <input type="text" placeholder='موجودی محصول را وارد کنید' />
                </div>
                <div className='mt-3'>
                    <BsCash className='icn'/>
                    <input type="text" placeholder='قیمت محصول را وارد کنید' />
                </div>
                <div className='mt-3'>
                    <MdOutlineSource className='icn'/>
                    <input type="text" placeholder='آدرس تصویر محصول را وارد کنید' />
                </div>
                <button className='submit-btn' type='submit'>اضافه کردن</button>
            </form>
        </div>
    )
}
