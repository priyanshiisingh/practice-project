import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import Product from "./components/Product";
import Order from "./components/Order";
import Myorders from "./components/MyOrders";
import AdminPage from "./components/AdminPage";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Login />
      <SignUp />
      <Products />
      <Product />
      <Order />
      <Myorders />
      <AdminPage />
    </div>
  );
};

export default App;
