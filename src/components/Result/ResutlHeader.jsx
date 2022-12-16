import React, { useRef } from "react";
import styles from "./ResultHeader.module.css";
import logo from "../../assets/logo.png";
import SearchInput from "../UI/SearchInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resultActions } from "../Redux-store/store";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cf8258c1fbmshffc26c9b2ea24efp1bd3e4jsne631f1018de2",
    "X-RapidAPI-Host": "duckduckgo8.p.rapidapi.com",
  },
};

const ResutlHeader = () => {
  const dispatch = useDispatch();
  const inputQuerry = useRef();
  const searchHandler = async function (e) {
    e.preventDefault();
    if (!inputQuerry.current.value.trim().length > 0) return;

    const transformedQuerry = inputQuerry.current.value.split(" ").join("%20");

    const response = await fetch(
      `https://duckduckgo8.p.rapidapi.com/?q=${transformedQuerry}`,
      options
    );
    const data = await response.json();

    dispatch(
      resultActions.getFetchData({
        data: data.results,
      })
    );
  };
  return (
    <header className={styles.header}>
      <a>
        <img src={logo} alt="LOGO" className={styles["form__logo"]} />
      </a>
      <form onSubmit={searchHandler}>
        <SearchInput ref={inputQuerry} />
      </form>
    </header>
  );
};

export default ResutlHeader;
