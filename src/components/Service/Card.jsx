import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title } = props;
  return (
    <Container>
        <span className='icons'><Icon/></span>
        <h2>{title}</h2>
        <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`

    width: 100%;
    background-color:#f84525;/*linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%); */
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h2{
        color: white;
        font-weight: 600;
        font-size: 1.1rem;
        text-transform: uppercase;
        font-family: Montserrat;
        padding-bottom: 1rem;
        
    }

    p{
        color: #fff;
        letter-spacing: 0.01em;
        font-size: 0.9rem;
        font-family: Montserrat;
        
    }
`