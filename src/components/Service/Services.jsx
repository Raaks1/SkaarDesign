import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";


const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
       
        <h4>
           <span className="tjenester">Mine Tjenester</span>
        </h4>
        <h1>Hva gjør jeg</h1>
       
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Responsivt Design"}
            disc={` I dagens mobile verden er det viktigere enn noensinne å ha en nettside som fungerer sømløst på alle enheter.
             Med skikkelig responsivt webdesign, vil nettstedet ditt tilpasse seg automatisk til forskjellige skjermstørrelser og gi en optimal brukeropplevelse uansett om det åpnes på en datamaskin, nettbrett eller smarttelefon.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Web design"}
            disc={`Jeg tilbyr fullstendig design og utvikling av nettsider som er skreddersydd til dine behov.
             Jeg jobber tett med deg for å skape en visuelt tiltalende og brukervennlig nettside som representerer din merkevare på en engasjerende måte.
             Uansett om du trenger en grundig overhaling av nettstedet ditt eller bare noen små justeringer.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"UX/UI"}
            disc={`Jeg fokuserer ikke bare på estetikk, men også på brukervennlighet. Jeg designer intuitive brukergrensesnitt som gjør det enkelt for besøkende å navigere på nettstedet ditt og finne den informasjonen de leter etter.
             Ved å optimalisere brukeropplevelsen bidrar jeg til å øke engasjementet og konverteringen på ditt nettsted.`}
          />
          
        </Slide>
      
      </Cards>
      <p></p>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  background-color:
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  padding-bottom:4rem;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    font-family:Montserrat;
    line-height: 36px;
    letter-spacing: 0;
    font-weight: 900;
    font-size: 42px;
    padding-top: 1rem;
    color: #fff;
  }
`;
const Cards = styled.div`
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
