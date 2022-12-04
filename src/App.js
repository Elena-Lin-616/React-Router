import { Welcome, Products } from "./pages";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
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
