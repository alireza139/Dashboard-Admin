import React from 'react'
import './LatestTransAction.css'
import { transActions } from '../../../../CmsDB'


export default function LatestTransAction() {
    const Btn = ({ status }) => {
        return <button className={`latestTransAction-btn latestTransAction-${status}-btn`}>{status}</button>
    }

    return (
        <div className='latestTransActionBox w-100 mt-3 mt-md-0 me-md-3'>
            <h5 className='mb-3'>آخرین سفارشات:</h5>
            <table className='latestTransActionTable w-100'>
                <tr>
                    <th>مشتری</th>
                    <th>تاریخ</th>
                    <th>مبلغ</th>
                    <th className='hidden-in-mobile'>وضعیت</th>
                </tr>
                {
                    transActions.map(item => (
                        <tr>
                            <td><img src="./img/yolme.jpg" alt="avatar customer" className={`customer-avatar customer-${item.status}-avatar`} /></td>
                            <td>{item.date}</td>
                            <td>{item.amount}$</td>
                            <td className='hidden-in-mobile'><Btn status={item.status}></Btn></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
