import Button from 'react-bootstrap/Button';
import { Col, Form, Image, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../redux/actions/productActions';
import { addToCart } from '../../../redux/actions/cartActions';
import { Alert } from 'bootstrap';

export const ProductDeatails = ({ match, history }) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();
  const [btnClasses, seBtnClasses] = useState(null);
  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;
  useEffect(() => {
    const toogleSubmit = () => {
      if (qty > 0) {
        seBtnClasses(' active');
      } else {
        seBtnClasses(' disabled');
      }
    };
    toogleSubmit();
  }, [qty]);
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addtoCartHanddler = (event) => {
    event.preventDefault();
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  };

  return (
    <Row className="my-5">
      {loading ? (
        <div className="my-5 mx-auto">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        <>
          <Col md={6} className="">
            <Image src={product.img} fluid></Image>
          </Col>
          <Col md={6} className="p-2">
            <h3 className="font-weight-bold">{product.name}</h3>
            <p className="font-weight-light">{product.description}</p>
            <Row inline>
              <Col md={4}>
                <h5 className="font-weight-bold">${product.price}</h5>
              </Col>

              <Col md={4} className="d-flex text-right">
                <h5 className="p-1 text-secondary">Quantity</h5>
                <Form.Control
                  as="select"
                  custom
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  <option key={0} value={0}>
                    0
                  </option>
                  {[...Array(product.quantity).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={4}>
                {product.quantity > 0 ? (
                  <p className="text-right text-secondary">
                    *Only {product.quantity} items left
                  </p>
                ) : (
                  <h5 className="text-right text-danget">Out of Stock</h5>
                )}
              </Col>

              <Button
                href="/cart"
                variant="primary"
                className={'btn w-100 my-1' + btnClasses}
              >
                <span className="text-uppercase" onClick={addtoCartHanddler}>
                  add to cart
                </span>
              </Button>
              <Button
                href="/login"
                variant="warning"
                className={'btn w-100' + btnClasses}
              >
                <span className="text-uppercase">checkout</span>
              </Button>
            </Row>
          </Col>
        </>
      )}
    </Row>
  );
};
