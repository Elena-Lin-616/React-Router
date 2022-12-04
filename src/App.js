import { MainHeader } from "./components";
import { Welcome, Products, ProductDetail } from "./pages";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>

      <Route path="/products">
        <Products />
      </Route>

      <Route path="/product-detail/:productId">
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;

// domain.com/welcome -> welcome component
// domain.com/products -> products component
// localhost:3000/product-detail/<any value> -> placeholder
