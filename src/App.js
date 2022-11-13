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
        <Nav>
          <GiKnifeFork style={{"fontSize":"5rem", "marginTop":"0.7rem"}} />
          <Logo to={"/"}>Delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 4.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  margin-left:0.4rem;
`;
const Nav = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: flex-start;
  display:flex;
  justify-content:center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
