import React from 'react'
import "./modal.css"
import ReactDom from "react-dom"

export default function DeleteModal({ yes, no }) {
    return ReactDom.createPortal(
        <div className="modal-parent active">
            <div className='modal-box delete-modal-box'>
                <h1 className='modal-message'>آیا از حذف اطمینان دارید؟؟</h1>
                <div className="modal-btns">
                    <button onClick={yes}>بله</button>
                    <button onClick={no}>خیر</button>
                </div>
            </div>
        </div>, document.getElementById("modal-parent")
    )
}
