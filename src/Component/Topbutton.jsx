import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
const Topbutton = () => {
  const [Height, setHeight] = useState(false)
  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavoir: " smooth" })

  }
  const ScrollEvent = () => {
    let height = 240;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > height) {
      setHeight(true)
    } else {
      setHeight(false)
    }

  }
  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent)
  })
  return (<>
    <Wrapper>
      {Height && (<div className="top-btn" onClick={gotoTop}><FaArrowUp className="top-btn--icon" /></div>)}
    </Wrapper>
  </>)
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 2.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(.5rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      bottom: 10%;
      right: 10%;
    }
  }
`;


export default Topbutton;