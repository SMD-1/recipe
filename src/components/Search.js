import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <FaSearch size="25px" />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  position: relative;

  input {
    font-size: 1.2rem;
    background: rgb(56, 56, 56);
    color: white;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
  }
  svg {
    margin: 0 5px;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

export default Search;
