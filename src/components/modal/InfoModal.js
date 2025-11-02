import React from 'react'
import "./modal.css"
import ReactDom from "react-dom"
import Chart from '../chart/Chart'
import sellsInfo from '../../CmsDB'

export default function InfoModal() {
    return ReactDom.createPortal(
        <div className="modal-parent active">
            <div className='modal-box info-modal-box'>
                <div className="product-info">
                    <img src="./img/oil.jpeg" alt="product image" className='product-info-image' />
                    <div className='product-info-item d-flex'>
                        <p className='title-info ms-1'>نام محصول:</p>
                        <p className='product-info-name'>روغن سرخ کردنی</p>
                    </div>
                    <div className='product-info-item d-flex'>
                        <p className='title-info ms-1'> برند:</p>
                        <p className='product-info-name'>لادن</p>
                    </div>
                    <div className='product-info-item d-flex'>
                        <p className='title-info ms-1'>موجودی محصول:</p>
                        <p className='product-info-name'>200 عدد</p>
                    </div>
                    <div className='product-info-item d-flex'>
                        <p className='title-info ms-1'>سفارشات ثبت شده:</p>
                        <p className='product-info-name'>200 سفارش</p>
                    </div>
                    <div style={{ paddingTop: "6px" }}>
                        <p className='title-info ms-1'>محبوبیت محصول:</p>
                        <p className='product-popularity mt-2'></p>
                    </div>
                </div>
                <Chart grid title="نمودار فروش محصول:" data={sellsInfo} datakey="sale"></Chart>
            </div>
        </div>, document.getElementById("modal-parent")
    )
}
