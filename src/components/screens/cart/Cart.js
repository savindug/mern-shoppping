import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import img from '../../../assets/imgs/product.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export const Cart = () => {
  return (
    <Row>
      <Container>
        <Col>
          <Row>
            <Col md={1}>id</Col>
            <Col md={2}>
              <Image src={img} fluid height={100} width={100} />
            </Col>
            <Col md={3}>product</Col>
            <Col md={1}>quantity</Col>
            <Col md={1}>total</Col>
            <Col md={1}>
              <i className="fas fa-trash"></i>
            </Col>
            <Col>
              <Card>
                <Card.Header>Cart Summary</Card.Header>
                <Card.Body>
                  <Card.Text>Subtotal (0 Items)</Card.Text>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Voucher Code"
                      aria-label="Voucher Code"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-primary">Apply</Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <Card.Title>Total</Card.Title>
                  <Button variant="warning" className="w-100 text-uppercase">
                    checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Container>
    </Row>
  );
};
