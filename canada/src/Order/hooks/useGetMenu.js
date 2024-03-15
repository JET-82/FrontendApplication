import { GETMENUAPI } from "../../constants/api";
import axios from "axios";


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
  const response = await axios.get(GETMENUAPI);
  // response.data.response.map((item) => (console.log(item.imageLink)))
  return response;
}