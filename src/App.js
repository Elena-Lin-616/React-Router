import { MainHeader } from "./components";
import { Welcome, Products, ProductDetail } from "./pages";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/products" exact>
          <Products />
        </Route>

        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// domain.com/welcome -> welcome component
// domain.com/products -> products component
// localhost:3000/product-detail/<any value> -> placeholder
