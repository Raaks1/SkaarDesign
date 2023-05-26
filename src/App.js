import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
/*import Clients from "./components/Clients/Clients";*/
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import AboutMe from "./components/About/About";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <AboutMe />
      <LightColor>
        <Projects />
      </LightColor>
      {/*<Clients />*/}
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #1f1e1d;
`;
const Banner = styled.div`
  background: #1f1e1d;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: #1f1e1d;
`;
