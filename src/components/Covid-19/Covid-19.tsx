import React from "react";
import styles from "./styles.module.scss";

const Covid = () => {
  return (
    <div className={styles.covid}>
      <a href="https://www.google.com/search?q=covid-19" target="blank">
        <strong>Уточните информацию в организации</strong>
        <br/>
        <span>
          Из-за пандемии COVID-19 данные о часах работы и услугаю могут быть
          неточными.
        </span>
      </a>
    </div>
  );
};

export default Covid;
