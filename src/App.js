import { useSelector } from "react-redux";
import Result from "./components/Result/Result";
import SearchForm from "./components/Search/SearchForm";

function App() {
  const hideSearchBar = useSelector((state) => state.resultItems.hideSearchBar);

  return <>{hideSearchBar ? <Result /> : <SearchForm />}</>;
}

export default App;
