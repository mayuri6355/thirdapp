import { requirePropFactory } from '@mui/material';
import { Carousel} from 'react-bootstrap';

function Slider(){
    return(
        <div>
        
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={require('../Img/img1.avif')}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={require('../Img/img2.avif')}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../Img/img3.avif')}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../Img/img4.avif')}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../Img/img5.avif')}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
    )
}
export default Slider;
