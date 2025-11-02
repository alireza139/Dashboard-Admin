import React from 'react'
import "./modal.css"
import ReactDom from "react-dom"

export default function Modal() {
    return ReactDom.createPortal(
        <div className='modal-box'>
            <h1 className='modal-message'>آیا از حذف اطمینان دارید؟؟</h1>
            <div className="modal-btns">
                <button>بله</button>
                <button>خیر</button>
            </div>
        </div> , document.getElementById("modal-parent")
    )
}
