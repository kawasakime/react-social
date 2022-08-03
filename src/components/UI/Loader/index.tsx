import * as React from "react";

import styles from './loader.module.scss';

const Loader: React.FunctionComponent = () => {
  return (
    <div className={styles.loader_container}>
      <i className={styles.loader}></i>
    </div>
  );
};

export default Loader;
