import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItem } from './ProductItem';

import { getProducts as listProducts } from '../../../redux/actions/productActions';
import { Col, Spinner } from 'react-bootstrap';
import { Alert } from 'bootstrap';

export const Products = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="row">
      {loading ? (
        <div className="my-5 mx-auto">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        products.map((product) => (
          <Col md={3} className="my-2">
            <ProductItem
              name={product.name}
              id={product._id}
              img={product.img}
              description={product.description}
              price={product.price}
            />
          </Col>
        ))
      )}
    </div>
  );
};
