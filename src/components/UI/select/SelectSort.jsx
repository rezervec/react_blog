import React from "react";
import styles from "./SelectSort.module.css"

const SelectSort = ({options, SortSelect, value}) => {

  return (
    <select
      value={value}
      className={styles.SelectSort}
      onChange = {e => SortSelect(e.target.value)}
    >
      <option value="" disabled>Сортировка</option>
      {options.map(option => 
        <option
          key = {option.value}
          value = {option.value}
        >
          {option.name}
        </option>
      )}
    </select>
  );
};

export default SelectSort;