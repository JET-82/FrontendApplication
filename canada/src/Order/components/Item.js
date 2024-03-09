import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ItemCon ,ItemDes, ItemDesPrice, ItemDesMenu, ItemDesCount, ItemImg} from '../styles/Item.stye'
import ImgUrls from '../../assets/test-img/imgdata';
import { countAtom } from '../recoil';


function Item({imgindex, menuname, description, price}) {
  //quantity count 
  const [number, setNumber] = useState(0);
  const [count, setCount] = useRecoilState(countAtom);
  const onIncrease = () => {
   setNumber(number + 1);
   setCount(price)
  //  var addPrice = price.substr(0);
  //  var addPriceNum = parseInt(addPrice)
  //  setCount(count + addPriceNum);
  }

  const onDecrease = () => {
    if(number !== 0){ 
      setNumber(number - 1);
      setCount(price)
      // var subPrice = price.substr(0);
      // var subPriceNum = parseInt(subPrice)
      // setCount(count - subPriceNum);}
      
  }}
  


  // const increaseCount = () => {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <ItemCon>
        <div>
        <ItemImg src={imgindex} />
        </div>
        <ItemDes>
          <p>{menuname}</p>
          <ItemDesMenu>{description}</ItemDesMenu>
          <ItemDesPrice>{price}</ItemDesPrice>
        </ItemDes>
        <ItemDesCount>
          <button onClick={onDecrease}>-</button>
          <div>{number}</div>
          <button onClick={onIncrease}>+</button>
        </ItemDesCount>
      </ItemCon>
    </div>
  )
}

export default Item