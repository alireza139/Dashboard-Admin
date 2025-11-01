import React from 'react'
import './errorBox.css'

export default function ErrorBox({msg = "موردی یافت نشد"}) {
  return (
    <div className='error-box'>
        <h1 className='error-message'>{msg}</h1>
    </div>
  )
}
