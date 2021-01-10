import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { listOrders } from "../actions/orderActions";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, userInfo, history]);

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>AT</th>
              <th>DELIVERED</th>
              <th>AT</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    <CheckCircleIcon style={{ color: "green" }} />
                  ) : (
                    <HighlightOffIcon style={{ color: "red" }} />
                  )}
                </td>
                <td>{order.isPaid && order.paidAt.substring(0, 10)}</td>
                <td>
                  {order.isDelivered ? (
                    <CheckCircleIcon style={{ color: "green" }} />
                  ) : (
                    <HighlightOffIcon style={{ color: "red" }} />
                  )}
                </td>
                <td>{order.isDelivered && order.deliveredAt.substring(0, 10)}</td>
                <td>
                  <Link to={`/order/${order._id}`}>
                    <Button variant="outline-info" size="sm">
                      Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
