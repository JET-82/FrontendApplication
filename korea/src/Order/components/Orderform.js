import React from 'react';
import { useQuery } from "@tanstack/react-query";
import {useRecoilValue } from "recoil";
import Item from './Item';
import { MenuCon, Header, OrderBtn, Total } from '../styles/Orderform.style';
import { getMenu } from '../hooks/useGetMenu';
import { Preshow } from '../styles/Orderform.style';
import { OrderpageCon} from '../../pages/Orderpage.style';
import { countAtom } from '../recoil';
// import { createOrder } from '../hooks/usePostOrder';

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
      <div>조금만 기다려주시옵소서...</div>
    ) : (
      <OrderpageCon>
        <Header>
          <p>픽업 주문</p>
        </Header>
        <MenuCon>
          {menuList.data?.response.map((item) => (
            <Item key={item.foodId} imgindex={item.imageLink} menuname={item.foodName} description={item.description} price={item.price}/>
          ))}
        </MenuCon>
        <Preshow>
          <Total>
            <div>총금액</div>
            <div>{total}</div>
            {/* {total ? (<div>{total}</div>): (<p>$0</p>)} */}
          </Total>
          <OrderBtn>주문하기</OrderBtn>
          {/* <OrderBtn onClick={onPostOrder}>ORDER</OrderBtn> */}
        </Preshow>
      </OrderpageCon>
    )
    }
    
    </>
  )
}

export default Orderform
