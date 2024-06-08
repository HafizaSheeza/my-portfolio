import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import logo from './Images/logo.png';
import styled from 'styled-components';
import React from 'react';

const Header = () => {
    return (<>

        <MainHeader> <NavLink to="/">
            <img src="./Images/sign.png" alt="reason" width="200px" height="auto" className='logo' />
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
   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
.logo{
    margin-top:-15px;
}
@media (max-width:${({ theme }) => theme.media.mobile}) {

    .logo{
        margin-left:-30px;
    }
}
`;
export default Header;