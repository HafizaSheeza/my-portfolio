import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import logo from './Images/logo.png';
import styled from 'styled-components';
import React from 'react';

const Header = () => {
    return (<>

        <MainHeader> <NavLink to="/">
            <img src={logo} alt="reason" width="200px" height="auto" className='logo' />
        </NavLink>
            <Navbar /></MainHeader>
    </>)
};
const MainHeader = styled.header`

   padding :0 4rem;
   height:7rem;
  /* background-color:rgb(249 249 255); */
   display:flex;
   justify-content:space-between;
   align-items:center;
.logo{
    margin-top:10px;
}
@media (max-width:${({ theme }) => theme.media.mobile}) {

    .logo{
        margin-left:-30px;
    }
}
`;
export default Header;