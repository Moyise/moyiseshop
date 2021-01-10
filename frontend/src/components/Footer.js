import React from "react";
//React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";
//Ant-Design
//import { Layout } from "antd";
//import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";

//const { Footer } = Layout;

const time = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">&copy; MoyiseShop {time}</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
