import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const inputSearch = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.searchField}>
      <span>Find Contacts by name</span>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        value={inputSearch}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

export default SearchBox;
