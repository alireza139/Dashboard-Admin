import React from 'react'
import SalesReport from '../../components/templates/home_templates/sales_Report/SalesReport'
import Chart from '../../components/modules/chart/Chart'
import {sellsInfo} from '../../CmsDB'
import NewMembers from '../../components/templates/home_templates/newMembers/NewMembers'
import LatestTransAction from '../../components/templates/home_templates/latestTransAction/LatestTransAction'

export default function Home() {
    return (
        <>
            <SalesReport />
            <Chart grid title="نمودار فروش محصول:" data={sellsInfo} datakey="sale" bootClsaa='w-100 mt-3'></Chart>
            <div className='customerBox d-flex flex-column flex-md-row mt-3'>
                <NewMembers />
                <LatestTransAction />
            </div>
        </>
    )
}
