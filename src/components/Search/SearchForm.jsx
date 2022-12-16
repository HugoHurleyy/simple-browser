import React from "react";
import styles from "./SearchForm.module.css";
import logo from "../../assets/logo.png";
import SearchInput from "../UI/SearchInput";
import { useDispatch } from "react-redux";
import { resultActions } from "../Redux-store/store";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../UI/Loading";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "duckduckgo8.p.rapidapi.com",
  },
};
const SearchForm = () => {
  const results = useSelector((state) => state.resultItems.searchResult);
  const dispatch = useDispatch();
  const inputQuerry = useRef();
  const [loading, setLoading] = useState(false);
  console.log(process.env);

  const searchHandler = async function (e) {
    e.preventDefault();
    if (!inputQuerry.current.value.trim().length > 0) return;

    const transformedQuerry = inputQuerry.current.value.split(" ").join("%20");
    setLoading(true);
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
    setLoading(false);
  };
  return (
    <>
      <form className={styles.form} onSubmit={searchHandler}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <img src={logo} alt="LOGO" className={styles["form__logo"]} />
            <SearchInput ref={inputQuerry} />
          </>
        )}
      </form>
    </>
  );
};

export default SearchForm;
