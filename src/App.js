import { Routes, Route } from "react-router-dom";

import { ProductDetails, ProductList } from "routes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
