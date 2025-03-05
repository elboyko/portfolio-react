import Card from "../Card/Card";
import styles from "./CardList.module.css";
import cards from "../../assets/projects.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardList() {
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    adaptiveHeight:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.slider_container}>
          <Slider {...settings}>
            {cards.map((card) => (
              <Card
                key={card.id}
                img={card.imageUrl}
                text={card.text}
                title={card.title}
                skill={card.skill}
                link={card.link}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CardList;
