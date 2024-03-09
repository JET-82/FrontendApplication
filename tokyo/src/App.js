import { Reset } from "styled-reset";
import "./assets/font.css";
import Order from "./pages/Order";

function App() {
  return (
    <div className="App">
      <Reset />
      <Order></Order>
      {/* <RouterProvider router={Router} /> */}
    </div>
  );
}

export default App;
