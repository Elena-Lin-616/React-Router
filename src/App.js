import { Welcome, Products } from "./pages";
import { MainHeader } from "./components";
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
    </div>
  );
}

export default App;
