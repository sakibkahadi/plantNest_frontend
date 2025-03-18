import styles from "../../styles/loader.module.css";

import React from "react";

const Loader = () => {
  return (
    <div className=" min-h-[clamp(calc(100vh-200px),80vh,100vh)] flex  justify-center items-center ">
      <div className={styles.loader}>
        <span className={styles.loaderText}>loading</span>
        <span className={styles.load}></span>
      </div>
    </div>
  );
};

export default Loader;
