import React from "react";
import styles from "./SearchInput.module.css";
import { SlMagnifier } from "react-icons/sl";
import { forwardRef } from "react";

const SearchInput = forwardRef((props, ref) => {
  return (
    <div className={styles["input-container"]}>
      <input type="text" className={styles.input} ref={ref} />
      <button type="submit">
        <SlMagnifier />
      </button>
    </div>
  );
});

export default SearchInput;
