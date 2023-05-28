import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';




let data = [

  {
    img : "https://cdn.discordapp.com/attachments/1097257485154398259/1111647975891021844/image.png",
    disc : "Nettside for manuellterapeut med nettbutikk og kursportal.",
    link : "https://www.martinhanstvedt.no/"
},

 {
      img : "https://cdn.discordapp.com/attachments/1097257485154398259/1111646337889489029/image.png",
      disc : "Nettside for sprinttrening og coaching /m nettbutikk. - Lanseres snart",
      link : "https://www.elitesprinttrening.no/"
},
    {
        img : "https://res.cloudinary.com/dre3sek1a/image/upload/v1685106116/Test/microsoftoffice365_fktjfa.avif",
        disc : "Applikasjon med oversikt over brukertilgang og lisenser i Azure og Office",
        link : "https://o365licenses.azurewebsites.net/"
    },
   
    {
        img : "https://res.cloudinary.com/dre3sek1a/image/upload/v1685106705/Test/desktop-preview_ujviak.jpg",
        disc : "Tips-Kalkulator",
        link: "https://raaks1.github.io/tip-calculator-app-main/"
    },
    
    
];

let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: white;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`