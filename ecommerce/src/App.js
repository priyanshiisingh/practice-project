import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import Product from "./components/Product";
import Order from "./components/Order";
import Myorders from "./components/MyOrders";
import AdminPage from "./components/AdminPage";
import Navbar from "./layouts/Navbar";
import { Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
