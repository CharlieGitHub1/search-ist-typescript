import ReactDom from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";

const Container = styled.div`
  display: flex;

  align-items: center;

  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  margin: 25px auto;
  padding: 15px 0;

  h1 {
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  /* width: 100vh; */
  flex-direction: column;
  height: 100vh;
  /* margin: 25px; */
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ContentWrapper>
          <TitleWrapper>
            <h1>Learning TypeScript</h1>
          </TitleWrapper>
          <UserSearch />
          {/* <EventComponent /> */}
        </ContentWrapper>
      </Container>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
