import React from 'react'
import "./modal.css"
import ReactDom from "react-dom"
import Chart from '../chart/Chart'
import {sellsInfo} from '../../../CmsDB'
import { IoMdClose } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import "../swipers/swiperOne.css"
// import required modules
import { Pagination } from 'swiper/modules';

export default function InfoModal({ close }) {
    return ReactDom.createPortal(
        <div className="modal-parent active">
            {/*Start Info Modal for Mobile & Tablet */}
            <div className='modal-box info-modal-box mobile-info-modal-box'>
                <IoMdClose className='fs-3' style={{ cursor: "pointer" }} onClick={close} />
                <Swiper pagination={true} modules={[Pagination]}>
                    <SwiperSlide className='px-1'>
                        <div className='product-details'>
                            <img src="./img/oil.jpeg" alt="product image" className='product-image' />
                            <div className="product-info">
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
                                    <div className='product-parent-popularity mt-2'>
                                        <div className="product-popularity">50%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='px-1'>
                        <Chart grid title="نمودار فروش محصول:" data={sellsInfo} datakey="sale"></Chart>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/*End Info Modal for Mobile & Tablet */}

            {/*Start Info Modal for Desctop */}
            <div className='modal-box info-modal-box desctop-info-modal-box'>
                <IoMdClose className='fs-3' style={{ cursor: "pointer" }} onClick={close} />
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }} className='my-auto'>
                    <div className='product-details'>
                        <img src="./img/oil.jpeg" alt="product image" className='product-image' />
                        <div className="product-info w-100">
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
                                <div className='product-parent-popularity mt-2'>
                                    <div className="product-popularity">50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Chart grid title="نمودار فروش محصول:" data={sellsInfo} datakey="sale"></Chart>
                </div>
            </div>
            {/*End Info Modal for Desctop */}

        </div>, document.getElementById("modal-parent")
    )
}
