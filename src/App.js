import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Notification from "./components/notifications/Notification";
import LoginPage from "./components/login/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";
import SignUpForm from "./components/login/SignUpForm";
import ForgotPwd from "./components/login/ForgotPwd";
import ResetPwd from "./components/login/ResetPwd";
import LoginForm from "./components/login/LoginForm";
import MainMenu from "./components/dashboard/MainMenu";
import Users from "./components/users/Users";
import Orders from "./components/orders/Orders";
import Products from "./components/products/Products";
import { ProductContextProvider } from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<LoginPage />}>
              <Route index element={<LoginForm />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="sign-up" element={<SignUpForm />} />
              <Route path="forgot-pwd" element={<ForgotPwd />} />
              <Route path="forgot-pwd/reset-pwd" element={<ResetPwd />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<MainMenu />} />
              <Route path="main" element={<MainMenu />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        </Router>
        <Notification />
      </ProductContextProvider>
    </div>
  );
}

export default App;
