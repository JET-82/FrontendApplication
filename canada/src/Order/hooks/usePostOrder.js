import { POSTORDERAPI } from "../../constants/api";
import axios from "axios";


export async function createOrder() {
  const response = await axios.post(POSTORDERAPI,{
    "describe": "bulgogi flavor",
    "foodName": "Kimbap",
    "price": "$12.00"
  });
  console.log(response)
  return response;
}