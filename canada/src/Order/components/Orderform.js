import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Item from './Item';
import { GETMENUAPI } from "../../constants/api";
import axios from "axios";
import { MenuCon, Header, OrderBtn } from '../styles/Orderform.style';
import { getMenu } from '../hooks/useGetMenu';
import { Preshow } from '../styles/Orderform.style';
import { OrderpageCon} from '../../pages/Orderpage.style';

function Orderform() {

  const { isLoading, data: menuList } = useQuery({
    queryKey: ["menuQueryKey"],
    queryFn: getMenu,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
  })
  // console.log(menuList)

  const currentIdx = 1
  return (
    <>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <OrderpageCon>
        <Header>
          <p>ORDER PICKUP</p>
        </Header>
        <MenuCon>
          {menuList.data?.response.map((item) => (
            <Item key={item.foodId} imgindex={item.imageLink} menuname={item.foodName} description={item.description} price={item.price}/>
          ))}
          {/* <Item imgindex={currentIdx} />
          <Item imgindex={currentIdx +1} />
          <Item imgindex={currentIdx +2} /> */}
        </MenuCon>
        <Preshow>
          <div style={{display:'flex'}}>
            <div>total</div>
            <div>$26.00</div>
          </div>
          <OrderBtn>ORDER</OrderBtn>
        </Preshow>
      </OrderpageCon>
    )
    }
    
    </>
  )
}

export default Orderform
