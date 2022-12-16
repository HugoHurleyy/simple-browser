import React, { useEffect } from "react";
import styles from "./ResultContext.module.css";
import { useSelector } from "react-redux";

const ResultContext = () => {
  const results = useSelector((state) => state.resultItems.searchResult);

  return (
    <div className={styles.container}>
      {results.map((result) => {
        return (
          <a className={styles["container__link"]} href={result.url}>
            <div className={styles["container__content"]}>
              <h1 className={styles["container__title"]}>{result.title}</h1>
              <p className={styles["container__description"]}>
                {result.description}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ResultContext;
