import React from 'react'
import "./productsTable.css"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";



export default function ProductsTable() {
    return (
        <table class="table mt-4 mx-auto">
            <thead>
                <tr>
                    <th>تصویر</th>
                    <th>محصول</th>
                    <th>قیمت</th>
                    <th>موجودی</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="./img/oil.jpeg" alt="product image" className='product-img' /></td>
                    <td>روغن سرخ کردنی</td>
                    <td style={{ direction: "ltr"}}>120000</td>
                    <td>32</td>
                    <td>
                        <div className='d-flex justify-content-around acts-box'>
                            <MdEdit />
                            <MdDelete />
                            <FaInfo />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><img src="./img/oil.jpeg" alt="product image" className='product-img' /></td>
                    <td>روغن سرخ کردنی</td>
                    <td style={{ direction: "ltr"}}>120000</td>
                    <td>32</td>
                    <td>
                        <div className='d-flex justify-content-around acts-box'>
                            <MdEdit />
                            <MdDelete />
                            <FaInfo />
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}
