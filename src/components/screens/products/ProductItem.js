import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Figure } from 'react-bootstrap';

export const ProductItem = ({ id, img, name, price, description }) => {
  return (
    <Card className="mx-1 shadow" style={{ height: 250 }}>
      <Card.Img variant="top" src={img} height={150} width={100} />
      <Card.Body>
        <Card.Text className="">{name}</Card.Text>
        <Figure.Caption>${price}</Figure.Caption>
        {/* <Button className="w-100" variant="primary">
          View
        </Button> */}
      </Card.Body>
    </Card>
  );
};
