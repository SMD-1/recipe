import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const params = useParams();

  const getRecipe = async () => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = res.data;
    setDetails(data);
  };
  console.log(details);
  useEffect(() => {
    getRecipe();
  }, [params.name]);
  return (
    <Modal>
      <h1>Recipess</h1>
      {details.title}
    </Modal>
  );
};

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Recipe;
