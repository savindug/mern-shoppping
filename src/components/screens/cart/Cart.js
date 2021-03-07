import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import img from '../../../assets/imgs/product.jpg';
export const Cart = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-1">id</Col>
        <Col md={3}>
          <Image className="col-md-6" src={img} fluid />
        </Col>
        <Col className="col-md-5">product</Col>
        <Col className="col-md-1">quantity</Col>
        <Col className="col-md-1">total</Col>
        <Col className="col-md-1">
          <i className="fas fa-trash"></i>
        </Col>
      </Row>
    </Container>
  );
};
