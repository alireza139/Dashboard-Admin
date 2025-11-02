import React from 'react'
import ErrorBox from '../errorBox/ErrorBox'
import AddProduct from '../addProduct/AddProduct'
import ProductsTable from '../productsTable/ProductsTable'
import Modal from '../modal/Modal'
export default function Products() {
  return (
    <>
      <AddProduct />
      <ProductsTable />
      <ErrorBox msg='هیچ محصولی ثبت نکرده اید!' />
      <Modal/>
    </>
  )
}
