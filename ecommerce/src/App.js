import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import Product from "./components/Product/Product";
import Order from "./components/Order";
import Myorders from "./components/MyOrders";
import AdminPage from "./components/AdminPage";
import Navbar from "./layouts/Navbar";
import PrivateRoute from "./routing/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PrivateRoute child={<Login />} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Product />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
