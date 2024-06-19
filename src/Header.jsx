import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import logo from './Images/logo.png';
import styled from 'styled-components';
import React from 'react';
// import lightImage from './public/Images/logo2.png';
// import darkImage from './public/Images/logo-1.png';

const Logo =  styled.img`
    width:40px;
    height:40px;
    margin-top: 10px;
`
const Header = ({isOn, handleToggle }) => {
    return (<>

        <MainHeader> <NavLink to="/">
            {/* Sheeza Nawaz */}

<Logo src ={isOn? './Images/logo-1.png':'./Images/logo2.png'  } />
            {/* <img src="./Images/logo2.png" alt="reason" width="60px" height="auto" className='logo' /> */}
        </NavLink   >
        
           <Navbar  isOn={isOn} handleToggle={handleToggle}/>
            </MainHeader>
    </>)
};
const MainHeader = styled.header`

   padding :0 4rem;
   height:7rem;
  /* background-color:rgb(249 249 255); */
   display:flex;
   justify-content:space-between;
   align-items:center;
   box-shadow:${({ theme }) => theme.colors.headershadow};
   border-bottom: 1px solid ${({ theme }) => theme.colors.border_header};
.logo{
    margin-top:10px;
}
a{
    font-size: 3rem;
    color:${({ theme }) => theme.colors.text};
}
@media (max-width:${({ theme }) => theme.media.mobile}) {

    .logo{
        margin-left:-30px;
    }
}
`;
export default Header;