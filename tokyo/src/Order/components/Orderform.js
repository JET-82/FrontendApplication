import React from 'react';
import { useQuery } from "@tanstack/react-query";
import {useRecoilValue } from "recoil";
import Item from './Item';
import { MenuCon, Header, OrderBtn, Total } from '../styles/Orderform.style';
import { getMenu } from '../hooks/useGetMenu';
import { Preshow } from '../styles/Orderform.style';
import { OrderpageCon} from '../../pages/Orderpage.style';
import { countAtom } from '../recoil';

import arrowimg from '../../assets/test-img/arrow.png'

function Orderform() {
  const total = useRecoilValue(countAtom);
  console.log(total)
  const { isLoading, data: menuList } = useQuery({
    queryKey: ["menuQueryKey"],
    queryFn: getMenu,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
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
          <h2 style={{marginLeft:'110px'}}>お持ち帰り</h2>
        </Header>
        <MenuCon style={{ backgroundColor: '#F5F5F5'}}>
          {menuList.data?.response.map((item) => (
            <Item key={item.foodId} imgindex={item.imageLink} menuname={item.foodName} description={item.description} price={item.price}/>
          ))}
        </MenuCon>
        <div style={{height:'20%', width:'100%',position:'relative'}}>
          <div style={{backgroundColor:'#F5F5F5', height:'100%', width:'100%', zIndex:'-1', position:'absolute'}}></div>
          <Preshow>
            <Total>
              <div>そうかかく</div>
              <div>{total}</div>
              {/* {total ? (<div>{total}</div>): (<p>$0</p>)} */}
            </Total>
            <OrderBtn>主文</OrderBtn>
            {/* <OrderBtn onClick={onPostOrder}>ORDER</OrderBtn> */}
          </Preshow>
        </div>
      </OrderpageCon>
    )
    }
    
    </>
  )
}

export default Orderform
