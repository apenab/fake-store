import { Routes, Route } from "react-router-dom";

import { AppContainer, Header } from "components";
import { ProductDetails, ProductList } from "routes";

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
