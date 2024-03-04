import React from 'react'
import Orderform from '../Order/components/Orderform'
import { OrderpageCon } from './Orderpage.style.js'

function Order() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <OrderpageCon>
        <Orderform />
      </OrderpageCon>

    </div>
  )
}

export default Order