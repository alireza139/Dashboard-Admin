import React, { useState } from 'react'
import "./productsTable.css"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";
import DeleteModal from '../modal/DeleteModal';
import InfoModal from '../modal/InfoModal';



export default function ProductsTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowInfoModal, setIsShowInfoModal] = useState(false)
    const yesFunc = () => {
        console.log("yes");
        setIsShowDeleteModal(false)
    }
    const noFunc = () => {
        console.log("no");
        setIsShowDeleteModal(false)
    }
    return (
        <>
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
                        <td style={{ direction: "ltr" }}>120000</td>
                        <td>32</td>
                        <td>
                            <div className='d-flex justify-content-around acts-box'>
                                <MdEdit />
                                <MdDelete onClick={() => setIsShowDeleteModal(true)} />
                                <FaInfo onClick={() => setIsShowInfoModal(true)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="./img/oil.jpeg" alt="product image" className='product-img' /></td>
                        <td>روغن سرخ کردنی</td>
                        <td style={{ direction: "ltr" }}>120000</td>
                        <td>32</td>
                        <td>
                            <div className='d-flex justify-content-around acts-box'>
                                <MdEdit />
                                <MdDelete onClick={() => setIsShowDeleteModal(true)} />
                                <FaInfo onClick={() => setIsShowInfoModal(true)} />
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>

            {
                isShowDeleteModal && <DeleteModal yes={yesFunc} no={noFunc} />
            }
            {
                isShowInfoModal && <InfoModal />
            }
        </>
    )
}
