import React, { useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsInstagram, } from "react-icons/bs";
import { FiMail, FiPhoneCall,FiThumbsUp } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";







const Footer = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("Send");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Sender..");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    try {
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
      if (response.ok) {
        setSubmitted(true);
      
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    setSubmitting(false);
    setStatus("Send");
  };
 
   /* });
    
    let result = await response.json();
    alert(result.status);
  };*/
  
 const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      
      <Profile>
        <Slide direction="left" delay={1}>
          <h1 className="kontakt">Kontakt</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Adresse:</h1>
          </Slide>
          <Slide direction="left">
            <p>Bergen, Vestland</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Ta kontakt for en prat</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+4799585408">+47 99 58 54 08</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:SkaarWebdesign@gmail.com">SkaarWebdesign@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Sosiale Medier</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/Raaks1">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/joar-fonn-skaar/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsInstagram />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
     
        <Slide direction="right">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Navn" id="name" required />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email"  id="email" placeholder="Email" required />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea id="message" cols="30" rows="10" placeholder="Beskjed" required></textarea>
            </div>
            <button type="submit">{status}</button>
              <div className="validate">
       {submitted ? (
    <Slide direction="right">     <p className="success">Melding sendt!<span className="thumbs"><FiThumbsUp /></span></p></Slide>
       ) : submitting  } </div> 
          </form>
        </Slide>
       
      </Form>
       
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  
  margin-top: 2rem;
  position: relative;
  padding: 2rem 10%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
      
    }

    p {
      width: 60%;
      color: #bbb;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #111; /*#f84525;*/
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
      a {
        text-decoration: none;
        color: #9c9c9c;
        :hover {
          color: var(--lighter);
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;
      

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: black;*/
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        background-color: #111;
       

        :hover {
          background-color: #f84525;
        }

        a {
          margin-top: 0.2rem;
          color: white;
         
        
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
:hover {
 /* filter: drop-shadow(0px 6px 9px var(--lighter));*/
 background-color: var(--lighter);
 color: white;

}
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border:2px solid white;
  color: White;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
  
`;
const Form = styled.div`
  flex: 1;
  h1 {
    
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #171615;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      
      border: 2px solid #bbb;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: white;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: transparent;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--lighter);
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      color: white;
      width: 5rem;
      height: 1.8rem;
      background-color: transparent;
      border: 2px solid white;
      border-radius: 50px;
     /* filter: drop-shadow(0px 4px 5px #01be9551);*/
      cursor: pointer;
      :hover {
        color:#171615;
        background-color: white;
        border-radius: 5px;
        /*filter: drop-shadow(0px 6px 9px var(---background));*/
        transition: all 0.3s ease-in-out;
        transform: scale(1.05);
      }
    }
    .success {
      color:#fff;
      font-size:12px;
      font-weight: 600;
      text-align: center;
      padding-top: 15px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      
    }
    .thumbs{
      color: lightgreen;
      margin-left: 5px;
    }
  }
`;
