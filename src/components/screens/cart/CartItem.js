import { Col, Image, Form, Button } from 'react-bootstrap';
export const CartItem = ({
  item,
  item_count,
  quantityOnChange,
  removeFromCartItem,
}) => {
  return (
    <>
      <Col lg={1}>{item_count}</Col>
      <Col lg={3}>
        <Image src={item.img} fluid height={100} width={100} />
      </Col>
      <Col lg={4}>{item.name}</Col>
      <Col lg={2}>
        {' '}
        <Form.Control
          as="select"
          custom
          value={item.qty}
          onChange={(e) => quantityOnChange(item.product, e.target.value)}
        >
          {[...Array(item.quantity).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Form.Control>
      </Col>
      <Col lg={1}>{item.qty * item.price}</Col>
      <Col lg={1}>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCartItem(item.product)}
        >
          <i className="fas fa-trash"></i>
        </Button>
      </Col>
    </>
  );
};
