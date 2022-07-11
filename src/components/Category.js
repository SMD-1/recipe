import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <StyleLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyleLink>
      <StyleLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </StyleLink>
      <StyleLink to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </StyleLink>
      <StyleLink to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </StyleLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const StyleLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 7px;
  }

  svg {
    font-size: 1.5rem;
    color: white;
  }
  &.active {
    background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
