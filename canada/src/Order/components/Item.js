import React, { useState } from 'react';
import { useRecoilState} from "recoil";
import { ItemCon ,ItemDes, ItemDesPrice, ItemDesMenu, ItemDesCount, ItemImg} from '../styles/Item.stye'
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
          <button onClick={onDecrease} style={{backgroundColor:'#FFE5B4', border:'none', borderRadius:'50%', baselineShiftAlign:'center'}}>-</button>
          <div>{number}</div>
          <button onClick={onIncrease}style={{backgroundColor:'#FCAE1E', border:'none', borderRadius:'50%'}}>+</button>
        </ItemDesCount>
      </ItemCon>
    </div>
  )
}

export default Item