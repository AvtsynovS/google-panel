import React from "react";
import styles from "./styles.module.scss";
import RatingInterface from "../../Interface/RatingInterface";
import { Button } from "reactstrap";

interface Props {
  rating: RatingInterface[];
}

const Rating = (props: Props) => {
  const { rating } = props;

  //handleClick(id): number;
  // надо при клике получить объект из массива rating!!!
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = event.target;
    //изменить цвет заливки или добавить класс
    console.log(target);
  };

  return (
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
  );
};

export default Rating;
