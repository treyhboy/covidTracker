import React, { useState } from "react";
import { AutoComplete } from "antd";
import { findKey, findOptions } from "../helpers";
import "antd/dist/antd.css";
import { useHistory } from "react-router";

const { Option } = AutoComplete;

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const history = useHistory();

  const onSelect = (data) => {
    const stateKey = findKey(data);
    history.push(`/state/${stateKey}`);
  };

  const onChange = (data) => {
    setValue(data);
    if (data.length > 2) setOptions(findOptions(data));
  };

  return (
    <AutoComplete
      value={value}
      className="searchbar"
      onSelect={onSelect}
      onChange={onChange}
      placeholder="input here"
    >
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </AutoComplete>
  );
};
export default SearchBar;
