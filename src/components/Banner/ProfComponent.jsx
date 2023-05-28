import React from "react";

import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
/*import myImage from "../pics/Profil.jpg";*/
import heroImage from "../Images/coder.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const ProfComponent = () => {
  
  return (
    <BrowserRouter>
   
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
          Velkommen til<span className="green"></span>
          </h4>
          <h1 className="green">SkaarWebdes<span className="red">i</span>gn</h1>
          <h3>Webdesign - UX/UI - Responsivt Design</h3>
          <p>
          Jeg leverer skreddersydde og innovative nettløsninger som hjelper deg med å oppnå dine digitale mål.
          Enten du er en nyoppstartet bedrift som ønsker å etablere en profesjonell online tilstedeværelse, eller en etablert virksomhet som ønsker å oppgradere ditt nåværende nettsted, kan jeg hjelpe deg.
          </p>
          <Link smooth to="/#footer">
          <button>Ta kontakt</button></Link>
          <Link smooth to="/#service">
          <button id="mer">Les mer</button></Link>
          <Social>
            <p></p>
            <div className="social-icons">
              
              <span>
                <a href="/">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={heroImage}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  
    </BrowserRouter>
  );
};

export default ProfComponent;

const Container = styled.div`
 
  display: flex;
  gap: 2rem;
  padding-top: 8rem;
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
    color:white;
    font-size: 68px;
    font-family: "Montserrat";
    letter-spacing: 
    font-weight: 700;
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
    font-family: 'Montserrat';
    /*line-height: 36px;*/
    letter-spacing:.02em;
    color: white;
    max-width: 80%;
    font-weight: 300;
  }

  button {
    font-size: 12px;
    font-family: "Helvetica Neue";S
    font-weight: 500;
    text-transform: Uppercase;
    letter-spacing: 0.09rem;
    padding: 1rem 2rem;
    margin-right: 4%;
    margin-top: 3rem;
    cursor: pointer;
    background-color: transparent;/*#464646;*/
    color: white;
    border-radius: 50px 50px 50px 50px;
    border: 2px solid white;
    /*transition: transform 900ms ease-in-out;*/
    transition: all 0.3s ease-in-out;
    font-weight: 500;
   /* filter: drop-shadow(0px 10px 10px #ffbf00);*/
    :hover {
    /*  filter: drop-shadow(0px 10px 10px #ffbf00);*/
     transform: scale(1.1);
     
     
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      border-radius: 10% 10% 10% 10%;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color:#f84525;
     
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: white;/*rgba(16, 1, 24, 0.97);*/
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #bbb);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
