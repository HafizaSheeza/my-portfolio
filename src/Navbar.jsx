import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Toggle from './Toggle';
const Navbar = ({isOn, handleToggle }) => {
    const [active, setOpenMenu] = useState()
    return (<>
        <Nav>
            <div className={active ? "menuIcon active" : "menuIcon"}>
                <ul className="navbar-list">
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className="navbar-link" to='/'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className="navbar-link" to='/service'>Skills</NavLink>

                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className="navbar-link" to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className="navbar-link" to='/projects'>Project</NavLink>
                    </li>
               <li><Toggle isOn={isOn} handleToggle={handleToggle}  /></li>     
                </ul>
                <div className="mobile-navbar-btn">
                    <FaAlignJustify
                        name="menu-outline"
                        className="mobile-nav-icon"
                        onClick={() => setOpenMenu(true)}
                    />
                    <FaTimes
                        name="close-outline"
                        className="close-outline mobile-nav-icon"
                        onClick={() => setOpenMenu(false)}
                    />
                </div>
            </div>
        </Nav>
    </>)

};
const Nav = styled.nav`
.mobile-navbar-btn,.close-outline{
    display:none;
}
.mobile-navbar-btn[name="close-outline"]{
    display:none;
}
 .navbar-link{
color:${({ theme }) => theme.colors.text};;
font-weight: 600;
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
    .navbar-list{
       width:100vw;
       height:100vh;
       position:absolute;
       top:0;
       left:0;
       display:flex;
    justify-content:center;
       text-align:center;
       flex-direction:column;
       gap:9rem;
       background-color:#fff;
       transform:translateX(0%);
       visibility:hidden;
       opacity:0%;
       li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4rem;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
   
    .mobile-navbar-btn{
        display:inline-block;
        z-index:999;
        .mobile-nav-icon{
            font-size:3.2rem;
            color:black;
        }
    }


    .active .mobile-nav-icon{
        display:none;
        font-size:4.2rem;
        position:absolute;
        top:3%;
        right:10%;
        color:black;
        z-index:999;

    }
    .active .close-outline{
        display:inline-block;
    }
    .active .navbar-list{
        visibility:visible;
        opacity:1;
        transform:translateX(0);
        z-index:999;

    }
}

.navbar-list{
    display:flex;
    gap:4.8rem;
    align-items: center;
}
li{
    list-style-type:none;

}
.navbar-link{
    &:hover,
    &:active{
        color:#6454f3;
    }
    &:link,&:visited{
         display:inline-block;
        text-decoration:none;
        font-size:1.5rem;
        text-transform:uppercase;
        transition:color 0.3s linear ;
        /* background-color:#e7e9eb; */
    }
    text-decoration:none;
    text-transform:uppercase;
}
`
export default Navbar;