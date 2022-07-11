import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BiShareAlt } from "react-icons/bi";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();
  const host = window.location.origin;
  const pathname = window.location.pathname;
  const urll = host + pathname;
  console.log(urll);
  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          text: "I have found this awesome recipe❤️, You should also try this",
          url: urll,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(details);
  useEffect(() => {
    const getRecipe = async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = res.data;
      setDetails(data);
    };
    getRecipe();
  }, [params.name]);
  return (
    <DetailWrapper>
      <InfoLeft>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 5px",
          }}
        >
          <h2>{details.title}</h2>
          <span onClick={share} style={{ cursor: "pointer" }}>
            <BiShareAlt size="2rem" />
          </span>
        </div>
        <img src={details.image} alt="" />
      </InfoLeft>
      <InfoRight>
        <Buttons>
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </Buttons>
        {activeTab === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </InfoRight>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: self-start;
  flex-direction: row;
  padding: 1rem 0;
  flex-gap: 1rem;
  max-width: 90vw;
  margin-top: 1rem;
  margin-bottom: 5rem;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Buttons = styled.div`
  display: flex;

  @media (max-width: 850px) {
    margin-top: 1rem;
  }
`;

const InfoLeft = styled.div`
  width: 50vw;
  diplsay: flex;

  img {
    width: 100%;
    border-radius: 15px;
  }

  @media (max-width: 850px) {
    width: 80vw;
  }
`;

const InfoRight = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  width: 50vw;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  button {
    padding: 1rem 2rem;
    width: 150px;
    color: #313131;
    background: white;
    cursor: pointer;
    margin: 10px;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }

  @media (max-width: 850px) {
    width: 80vw;
    margin-left: 10px;

    button {
      padding: 1rem;
    }
  }
`;

export default Recipe;
