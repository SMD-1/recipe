import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header className="header">
          <Nav>
            <GiKnifeFork />
            <Logo to="/">Logo</Logo>
          </Nav>
          <Search />
        </Header>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster-Two", cursive;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
