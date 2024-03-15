import React from 'react';
import { useQuery } from "@tanstack/react-query";
import {useRecoilValue } from "recoil";
import Item from './Item';
import { MenuCon, Header, OrderBtn, Total, HeaderImg } from '../styles/Orderform.style';
import { getMenu } from '../hooks/useGetMenu';
import { Preshow } from '../styles/Orderform.style';
import { OrderpageCon} from '../../pages/Orderpage.style';
import { countAtom } from '../recoil';

import arrowimg from '../../assets/test-img/arrow.png'
// import backimg from '../../assets/test-img/back.png'
// import { createOrder } from '../hooks/usePostOrder';

function Orderform() {
  const total = useRecoilValue(countAtom);
  console.log(total)
  const { isLoading, data: menuList } = useQuery({
    queryKey: ["menuQueryKey"],
    queryFn: getMenu,
  })
  // console.log(menuList)

  // const onPostOrder = () => (createOrder())
  return (
    <>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <OrderpageCon>
        <Header>
          <div style={{ backgroundImage: `url(${arrowimg})`,backgroundSize:'auto', backgroundPosition:'center', width:'30px', height:'30px', border:'none', marginLeft:'10px'}}/>
          <h2 style={{marginLeft:'110px'}}>My Cart</h2>
          
        </Header>
        {/* <MenuCon  style={{ backgroundImage: `url(${backimg})`,backgroundSize:'auto', backgroundPosition:'center' }}> */}
        <MenuCon  style={{ backgroundColor: '#F5F5F5'}}>
        
          {menuList.data?.response.map((item) => (
            <Item key={item.foodId} imgindex={item.imageLink} menuname={item.foodName} description={item.description} price={item.price}/>
          ))}
          
        </MenuCon>
        <div style={{height:'20%', width:'100%',position:'relative'}}>
          <div style={{backgroundColor:'#F5F5F5', height:'100%', width:'100%', zIndex:'-1', position:'absolute'}}></div>
          <Preshow>
            <Total>
              <div>total</div>
              <div>{total}</div>
            </Total>
            <OrderBtn>ORDER</OrderBtn>
          </Preshow>
        </div>
      </OrderpageCon>
    )
    }
    
    </>
  )
}

export default Orderform
