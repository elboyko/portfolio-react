import Button from "../Button/Button";
import photo from "../../assets/img.png";
import styles from "./Banner.module.scss";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>Frontend developer</h2>
          <h1>Привет, меня зовут Елена</h1>
          <p>веб разработчик</p>
          <div className={styles.btn_flex}>
            <Button color="#49c5b6" text="Contact me" />
            <Button color="#FFC5B1" text="Download CV" />
          </div>
        </div>
        <div>
          <div className={styles.div}>
            <img className={styles.image} src={photo} alt="main image" />

            <div className={styles.form}>
              <svg
                width="509"
                height="462"
                viewBox="0 0 509 462"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M430.684 91.8476C485.587 148.958 523.332 231.872 503.773 294.831C483.871 357.79 406.664 400.451 331.516 429.351C256.711 458.25 183.965 473.388 128.376 448.617C72.4443 423.846 32.983 358.822 13.0808 285.198C-6.47826 211.917 -7.16455 130.036 32.2967 76.3658C72.1011 22.6955 151.71 -2.76337 227.544 0.332983C303.722 3.08531 375.781 34.7369 430.684 91.8476Z"
                  fill="#FFC5B1"
                />
              </svg>
            </div>
            <div className={styles.form1}>
              <svg
                width="459"
                height="491"
                viewBox="0 0 459 491"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M304.32 452.526C235.082 490.701 145.401 505.671 89.759 470.553C34.2055 435.103 13.0224 349.654 4.57418 269.744C-3.96273 190.165 0.235096 116.126 38.4741 68.9353C76.8018 21.4138 149.679 0.168287 225.796 0C301.493 0.073637 380.607 20.5629 422.153 72.4682C463.611 124.704 467.59 208.026 445.016 280.332C422.685 353.059 373.559 414.35 304.32 452.526Z"
                  fill="#49c5b6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
