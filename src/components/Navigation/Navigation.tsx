import React from "react";
import { Button } from "reactstrap";
import styles from "./styles.module.scss";
import NavigationInterface from "../../Interface/NavigationInterface";

interface Props {
  navigation: NavigationInterface[];
}

const Navigation = (props: Props) => {
  const { navigation } = props;

  return (
    <div className={styles.navigation}>
      {navigation.map((item) => {
        return <Button key={item.id}>{item.title}</Button>;
      })}
    </div>
  );
};

export default Navigation;
