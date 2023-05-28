
import React, { useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";


import { FiMail,  } from "react-icons/fi";
import { Slide, } from "react-awesome-reveal";
import { CgProfile } from "react-icons/cg";



const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Sending...");
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
};
   
    
  
    
   
  
  return (
    
    <Container>
      <div className="test">
      {submitted ? (
        <p>Innsending vellykket!</p>
      ) : (
      <Form>
        
        <Slide direction="right">
    <form onSubmit={handleSubmit}>
     
      <div className="name">
              <span>
                <CgProfile />
              </span>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Beskjed"></textarea>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        </div>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  
    </Slide>
    </Form>
      )}</div>
    </Container>
  );
};



export default ContactForm;



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
      border: 1px solid white;
      border-radius: 50px;
     /* filter: drop-shadow(0px 4px 5px #01be9551);*/
      cursor: pointer;
      :hover {
        /*filter: drop-shadow(0px 6px 9px var(---background));*/
        transition: all 0.3s ease-in-out;
        transform: scale(1.05);
      }
    }
  }
`;

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

