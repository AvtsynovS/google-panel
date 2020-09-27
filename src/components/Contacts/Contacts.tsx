import React from "react";
import { Button, Table } from "reactstrap";
import styles from "./styles.module.scss";
import ContactsInterface from "../../Interface/ContactsInterface";

interface Props {
  contacts: ContactsInterface[];
}

const Contacts = (props: Props) => {
  const { contacts } = props;

  return (
    <div className={styles.contacts}>
      <Table>
        <tbody>
          {contacts.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button className={styles.btn}>
        <i className="far fa-comment-alt"></i> Предложить исправление
      </Button>
    </div>
  );
};

export default Contacts;
