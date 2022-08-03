import * as React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

import styles from "./success.module.scss";

const Success: React.FunctionComponent = () => {
  return (
    <div className={styles.success__container}>
      <div className={styles.success__icon}>
        <IoCheckmarkDoneSharp />
      </div>
      <h2>Успешно</h2>
    </div>
  );
};

export default Success;
