import { REACT_APP_BASE_URL } from "./baseUrl";
// export const GETMENUAPI = {
//   GETMENU: `${BASE_URL}/foods`,
// };

export const GETMENUAPI = REACT_APP_BASE_URL + `/foods`;
console.log(GETMENUAPI)