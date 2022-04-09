import { Routes, Route } from "react-router-dom";

import { Header } from "components";
import { ProductDetails, ProductList } from "routes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
