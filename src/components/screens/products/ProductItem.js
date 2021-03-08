import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProductItem = ({ id, img, name, price, description }) => {
  return (
    <Card className="mx-1 shadow cursor-pointer" style={{ height: 250 }}>
      <Link to={`/product/${id}`} className="text-decoration-none">
        <Card.Img variant="top" src={img} height={150} width={100} />
        <Card.Body>
          <Card.Text>{name}</Card.Text>
          <Figure.Caption>${price}</Figure.Caption>
          {/* <Button className="w-100" variant="primary">
          View
        </Button> */}
        </Card.Body>
      </Link>
    </Card>
  );
};
