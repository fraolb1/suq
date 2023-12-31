import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({product}) => {
  
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as={"div"}>{product.name}</Card.Title>
        </Link>

        <Card.Text as='h6'>${product.price}</Card.Text>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Body>
    </Card>
  );
}

export default Product