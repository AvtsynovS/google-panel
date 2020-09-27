import React from "react";
import styles from "./styles.module.scss";
import RatingInterface from "../../Interface/RatingInterface";
import { Button } from "reactstrap";

interface Props {
  rating: RatingInterface[];
}

const Header = (props: Props) => {
  const { rating } = props;

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = event.target;
    //добавить класс, или псевдокласс active?
    console.log(target);
  };

  return (
    <div>
      <h4>Воронежский областной краеведческий музей</h4>
      <div className={styles.rating}>
        {rating.map((item) => {
          return (
            <div key={item.id}>
              <Button className={styles.btn} onClick={handleClick}>
                <i className="fas fa-star" key={item.id}></i>
              </Button>
            </div>
          );
        })}

        <div className={styles.count}>(0)</div>
      </div>
      <a
        href="https://www.google.com/maps/place/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B8%D0%B9+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D0%BE%D0%B9+%D0%BA%D1%80%D0%B0%D0%B5%D0%B2%D0%B5%D0%B4%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9/@51.6648639,39.1975786,16z/data=!4m13!1m7!3m6!1s0x0:0x0!2zNTHCsDUyJzQ3LjciTiA0OMKwMTgnMjkuMyJF!3b1!8m2!3d51.879907!4d48.308137!3m4!1s0x413b2efad8c4467b:0x7dbf6f63a1c498e5!8m2!3d51.6666897!4d39.1934949"
        className={styles.link}
      >
        Краеведческий музей
      </a>
    </div>
  );
};

export default Header;
