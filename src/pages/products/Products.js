import React from 'react'
import ErrorBox from '../../components/modules/errorBox/ErrorBox'
import AddProduct from '../../components/templates/products_templates/addProduct/AddProduct'
import ProductsTable from '../../components/templates/products_templates/productsTable/ProductsTable'
export default function Products() {
  return (
    <>
      <AddProduct />
      <ProductsTable />
      <ErrorBox msg='هیچ محصولی ثبت نکرده اید!' />
    </>
  )
}
