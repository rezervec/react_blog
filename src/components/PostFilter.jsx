import React from "react";
import SelectSort from "./UI/select/SelectSort";
import MainInput from "./UI/input/MainInput";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <SelectSort
        value={filter.select}
        SortSelect = {e => setFilter({...filter, select: e})}
        options = {[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
      />
      <MainInput
        placeholder='Поиск...'
        value={filter.input}
        onChange = {e => setFilter({...filter, input: e.target.value})}
      />
    </div>
  )
}

export default PostFilter;