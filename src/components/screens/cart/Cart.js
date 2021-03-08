import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';

export const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const quantityOnChange = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  return (
    <Container>
      <Row className="container">
        {cartItems.length === 0 ? (
          <Col md={12} className="my-5">
            <h5 className="text-center">
              Your Cart is Empty <Link to="/products">Go Back</Link>
            </h5>
          </Col>
        ) : (
          cartItems.map((item, i) => (
            <Col md={8}>
              <Row className="my-1 bg-light">
                <CartItem
                  item={item}
                  item_count={i + 1}
                  quantityOnChange={quantityOnChange}
                  removeFromCartItem={removeFromCartItem}
                />
              </Row>
            </Col>
          ))
        )}
        <Col md={4}>
          <Row>
            <Card>
              <Card.Header>Cart Summary</Card.Header>
              <Card.Body>
                <Card.Text>
                  Subtotal ({getCartCount()} Items) {getCartSubTotal()}
                </Card.Text>
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
                <Card.Title>
                  <Row inline>
                    <Col md={6}>
                      <h5 className="font-weight-bold">Total</h5>
                    </Col>
                    <Col md={6}>
                      <h6 className="font-weight-bold p-1">
                        ${getCartSubTotal()}
                      </h6>
                    </Col>
                  </Row>
                </Card.Title>
                <Button variant="warning" className="w-100 text-uppercase">
                  checkout
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
