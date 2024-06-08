import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";
import { GlobalStyle } from "../GlobalStyle";
const Herosection = (props) => {
    return (<>

        <Wrapper>
            <GlobalStyle />
            <div className="container grid grid-two-columns">
                <div className="section-hero-data">
                    <p className="hero-top-data"> Hi,This is me <span class="wave">👋</span></p>
                    <h1 className="hero-heading"> {props.name}</h1>
                    <p className="hero-para">I'm a React developer. and strong team player who is able to quickly learn and apply new technologies. </p>
                    <Button className="btn hireme-btn"><NavLink to='./contact'>Hire Me</NavLink></Button>
                </div>
                <div className="section-hero-img">
                    <picture>
                        <img src={props.image} alt="" className="hero-img animated" />
                    </picture>
                </div>
            </div>
        </Wrapper></>)
}
const Wrapper = styled.section`
padding:9rem 0;
.section-hero-data{
    display:flex;
    justify-content:center;
    flex-direction:column;
}
.section-hero-img{
    display:flex;
    justify-content:center;
   
    align-items:center;
}
picture{
    text-align:center;
   
}
.wave {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: wave-animation;
    animation-name: wave-animation;
    display: inline-block;
    -webkit-transform-origin: 70% 70%;
    transform-origin: 70% 70%;
    font-size: 20px;
}
@keyframes  wave-animation {
    0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}
10% {
    -webkit-transform: rotate(14deg);
    transform: rotate(14deg);
}
20% {
    -webkit-transform: rotate(-8deg);
    transform: rotate(-8deg);
}
30% {
    -webkit-transform: rotate(14deg);
    transform: rotate(14deg);
} 
40% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
}
50% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
}
60% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
}
}
a{
    cursor: pointer;
}
picture img{
    border-radius: 100%;
    border: 5px solid #6254f3;
    width:300px !important;
    height: 300px;
    object-fit: cover;
}
.hero-img{
     width:100%;
     /* max-width:400px; */
}
.btn{
    max-width:16rem;
}
.hero-top-data{
    text-transform:uppercase;
    font-weight:500;
    font-size:1.5rem;
   

}
.hero-heading{
    // text-transform:uppercase;
    font-size:5rem;
}
.hero-para{
    margin-top:1.5rem;
margin-bottom:3.4rem;
max-width:60rem;
}
.container{
   
    max-width:90rem;
    margin:0 auto;
  
}
.grid{
    display:grid;
    gap:9rem;
    
}
.grid-two-columns{
    grid-template-columns:repeat(2,1fr);

}

.animated {
    /* animation: up-down 2s ease-in-out infinite alternate-reverse both;
    max-width: 100%; */
  }
  
  @-webkit-keyframes up-down {
    0% {
      transform: translateY(10px);
    }
  
    100% {
      transform: translateY(-10px)
    }
  }
  
  @keyframes up-down {
    0% {
      transform: translateY(10px);
    }
  
    100% {
      transform: translateY(-10px)
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .section-hero-data{
        align-items:center;
        margin:auto;

    }
    .grid {
        gap: 7.2rem;
      }
      .grid-two-columns{
         
          grid-template-columns:1fr;
      
      }
    p,h1{
        text-align:center;

    }
    .section-hero-img{
        order:-1;
        }
  
  }
`;
export default Herosection;