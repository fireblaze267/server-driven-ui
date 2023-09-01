import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.scss";

export default function CaroselComp({ content }) {
  return (
    <div className="carosel-main">
      <Carousel interval={400 * 10} infiniteLoop={true} autoPlay={true}>
        {content?.images.map((x, index) => {
          return (
            <div key={index}>
              <img src={x?.image} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
