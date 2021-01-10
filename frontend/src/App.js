import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
//React-Bootstrap
import { Container } from "react-bootstrap";
//Ant-Design
//import { Layout } from "antd";
import "antd/dist/antd.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { BackTop } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const style = {
  height: 40,
  width: 40,
  color: "#1088e9",
  textAlign: "center",
  fontSize: 32,
};

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/order/:id" exact component={OrderScreen} />
              <Route path="/placeorder" exact component={PlaceOrderScreen} />
              <Route path="/payment" exact component={PaymentScreen} />
              <Route path="/shipping" exact component={ShippingScreen} />
              <Route path="/profile" exact component={ProfileScreen} />
              <Route path="/register" exact component={RegisterScreen} />
              <Route path="/login" exact component={LoginScreen} />
              <Route path="/cart/:id?" exact component={CartScreen} />
              <Route path="/product/:id" exact component={ProductScreen} />
              <Route path="/admin/user/:id/edit" exact component={UserEditScreen} />
              <Route path="/admin/userlist" exact component={UserListScreen} />
              <Route path="/admin/product/:id/edit" exact component={ProductEditScreen} />
              <Route path="/admin/productlist" exact component={ProductListScreen} />
              <Route
                path="/admin/productlist/page/:pageNumber"
                exact
                component={ProductListScreen}
              />
              <Route path="/admin/orderlist" exact component={OrderListScreen} />
              <Route path="/search/:keyword" exact component={HomeScreen} />
              <Route
                path="/search/:keyword/page/:pageNumber"
                exact
                component={HomeScreen}
              />
              <Route path="/page/:pageNumber" exact component={HomeScreen} />
              <Route path="/" exact component={HomeScreen} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
      <BackTop>
        <UpCircleOutlined style={style} />
      </BackTop>
    </>
  );
}

export default App;
