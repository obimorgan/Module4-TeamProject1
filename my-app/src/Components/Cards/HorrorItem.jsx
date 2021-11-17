/** @format */

import { Button, Card, Row, Col, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'



const HorrorItem = ({ horrorData }) => (
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
  }
  <div>
    <Carousel activeIndex={false} className="d-flex">
      <Carousel.Item>
        {horrorData.slice(0, 6).map((data) => (
          <img
            className="w-20"
            src={data.Poster}
            alt="First slide"
          />
        ))}
      </Carousel.Item>
      <Carousel.Item>
        {horrorData.slice(4, 10).map((data) => (
          <img
            className="w-10"
            src={data.Poster}
            alt="First slide"
          />
        ))}
      </Carousel.Item>
    </Carousel>
  </div>
);

export default HorrorItem;
