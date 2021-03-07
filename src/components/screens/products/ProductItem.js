import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img from '../../../assets/imgs/product.jpg';

export const ProductItem = () => {
  return (
    <Card className="col-md-3 mx-2" style={{ flex: 1 }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="w-100" variant="primary">
          View
        </Button>
      </Card.Body>
    </Card>
  );
};
