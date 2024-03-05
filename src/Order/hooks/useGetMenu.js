import { GETMENUAPI } from "../../constants/api";
import axios from "axios";
import { REACT_APP_BASE_URL} from "../../constants/baseUrl";

// export async function getMenu(){
//   axios.defaults.withCredentials = true;
//   const response = await axios({
//     method:'get',
//     url :  `/api/foods`,
//   }).then((response) => console.log(response)).catch((error)=>console.log(error))
    
//   console.log('hi')
//   return response;

// }

export async function getMenu() {
  const response = await axios.get('https://api.yongdev.shop/foods');
  // const { data } = response;
  response.data.response.map((item) => (console.log(item.imageLink)))

  return response;
}