import React from 'react'
import Item from './Item'
import { MenuCon, Header } from '../styles/Orderform.style'
function Orderform() {
  const currentIdx = 1
  return (
    <>
    
      <Header>
        {/* <div>🔙</div> */}
        <p>ORDER PICKUP</p>
      </Header>
      <MenuCon>
        <Item imgindex={currentIdx} />
        <Item imgindex={currentIdx +1} />
        <Item imgindex={currentIdx +2} />
      </MenuCon>
    </>
  )
}

export default Orderform
