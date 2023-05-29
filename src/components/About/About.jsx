
import React from "react";
import styled from "styled-components";



const AboutMe = () => {
  
    return (

<Container>

<Texts>
    <h1>Kvalitet til en rimelig pr<span className="red"></span>is</h1>
    <p> Jeg forstår viktigheten av å ha en imponerende og funksjonell nettside uten å bryte budsjettet ditt. Derfor tilbyr jeg rimelige webdesign-løsninger som ikke går på kompromiss med kvaliteten.

Min spesialitet er å skape flotte og brukervennlige nettsteder til en pris som passer for deg. Jeg tror at en profesjonell nettside ikke trenger å være en luksus, men heller en nødvendighet for enhver bedrift eller enkeltperson som ønsker å nå ut til sitt publikum på nettet.

Uansett om du er en liten bedrift, en frilanser eller en oppstart, kan jeg hjelpe deg med å realisere dine digitale mål til en pris som passer for deg. Jeg tror på å bygge langsiktige partnerskap med mine kunder, og er opptatt av å levere resultater som overstiger forventningene.

Ta kontakt i dag for å starte på veien mot en imponerende nettside til en rimelig pris. Jeg ser frem til å samarbeide med deg og hjelpe deg med å lykkes online!</p>


</Texts>


</Container>



   )
 };

 export default AboutMe;

const Container = styled.div`

  display: flex;
  
    align-items: center;
  
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Texts = styled.div`

flex: 1;
h4 {
    font-family: Helvetia-neue Narrow SemiBold;
    color:#f84525;
    font-size: 16px;
    letter-spacing: .2em;
    padding: 2rem 0;
   
    
  }
  h1 {
    font-family:Montserrat;
    line-height: 32px;
    letter-spacing: -0.05rem;
    font-weight: 900;
    font-size: 36px;
    padding-top: 1rem;
    text-align: center;
    padding-bottom: 2rem;
    color: #fff;
  }
  h3 {
    color:#bbb;
    font-weight: 500;
    font-size: 1.2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-transform: capitalize;
  }
  p {
    margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
    
    font-family: 'Montserrat';
    /*line-height: 36px;*/
    letter-spacing:0.01em;
    line-height: 25px;
    color: #bbb;
    max-width: 80%;
    font-weight: 400;
    
  }


  .span {
    font-family: Montserrat;
    font-weight: 400;
  }
`;