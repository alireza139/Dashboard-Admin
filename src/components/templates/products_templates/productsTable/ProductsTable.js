import React, { useState } from 'react'
import "./productsTable.css"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";
import DeleteModal from '../../../modules/modal/DeleteModal';
import InfoModal from '../../../modules/modal/InfoModal';
import EditModal from '../../../modules/modal/EditModal';



export default function ProductsTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowInfoModal, setIsShowInfoModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const yesFunc = () => {
        console.log("yes");
        setIsShowDeleteModal(false)
    }
    const noFunc = () => {
        console.log("no");
        setIsShowDeleteModal(false)
    }
    const closeFunc = () => {
        console.log("close");
        setIsShowInfoModal(false)
        setIsShowEditModal(false)
    }
    return (
        <>
            <table class="table mt-4 mx-auto">
                <thead>
                    <tr>
                        <th>تصویر</th>
                        <th>محصول</th>
                        <th>تعداد</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="./img/oil.jpeg" alt="product image" className='product-img' /></td>
                        <td>روغن سرخ کردنی</td>
                        <td>32</td>
                        <td>
                            <div className='d-flex justify-content-around acts-box'>
                                <MdEdit onClick={() => setIsShowEditModal(true)} />
                                <MdDelete onClick={() => setIsShowDeleteModal(true)} />
                                <FaInfo onClick={() => setIsShowInfoModal(true)} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="./img/oil.jpeg" alt="product image" className='product-img' /></td>
                        <td>روغن سرخ کردنی</td>
                        <td>32</td>
                        <td>
                            <div className='d-flex justify-content-around acts-box'>
                                <MdEdit onClick={() => setIsShowEditModal(true)} />
                                <MdDelete onClick={() => setIsShowDeleteModal(true)} className='mx-2'/>
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
                isShowInfoModal && <InfoModal close={closeFunc} />
            }
            {
                isShowEditModal && <EditModal close={closeFunc}/>
            }
        </>
    )
}
