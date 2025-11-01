import React from 'react'
import ErrorBox from '../errorBox/ErrorBox'
import AddProduct from '../addProduct/AddProduct'

export default function Products() {
  return (
    <>
      <AddProduct />
      <ErrorBox msg='هیچ محصولی ثبت نکرده اید!' />
    </>
  )
}
