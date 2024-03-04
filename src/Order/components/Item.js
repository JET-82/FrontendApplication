import React, { useState } from 'react';
import { ItemCon ,ItemDes, ItemDesPrice, ItemDesMenu, ItemDesCount, ItemImg} from '../styles/Item.stye'
import ImgUrls from '../../assets/test-img/imgdata';


function Item({imgindex}) {
  //quantity count 
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
   setNumber(number + 1);
    
  }

  const onDecrease = () => {
    if(number !== 0){  setNumber(number - 1);}
  }
  // ImgUrls.urls.map(url => {
  //   console.log(url)
  // })

  return (
    <div>
      <ItemCon>
        <div>
        <ItemImg src={`${ImgUrls.urls[`${imgindex}`]}`} />
        </div>
        <ItemDes>
          <p>GOOS' K-bingsu</p>
          <ItemDesMenu>Redbean</ItemDesMenu>
          <ItemDesPrice>$14.25</ItemDesPrice>
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