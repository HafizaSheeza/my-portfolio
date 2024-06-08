import styled from "styled-components";
import { Button } from "./Styles/Button";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (<>
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-columns">
                    <div ><h3>Ready to get started?</h3>
                        <h3>Talk to us today</h3></div>
                    <div className="contact-short-btn">
                        <NavLink to='/'>
                            <Button >Get Started</Button>
                        </NavLink>
                    </div>
                </div>

            </section>
            <footer>
                <div className="container grid grid-four-columns">
                    <div className="footer-about">
                        <h3>Sheeza Nawaz</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy </p></div>
                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#"> <input type="email" name="" id="" autoComplete="off" placeholder="Email" required />
                            <input type="submit" name="" id="" value="Subscribe" /></form>

                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <div>< FaGithub className="icons" /></div>
                            <div>< FaDiscord className="icons" /></div>
                            <div>< FaFacebook className="icons" /></div>
                        </div>

                    </div>
                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <h3>+92 3024581877</h3>
                    </div>
                </div>
                <div className="footer-bottom-section">
                    <hr />
                    <div className="container grid grid-two-columns">
                        <p>
                            @{new Date().getFullYear()} Sheeza Nawaz All right Reserved
                        </p>
                        <div><p>PRIVACY POLICY</p>
                            <p>TERM AND CONDITION</p></div>
                    </div>
                </div>
            </footer>
        </Wrapper></>)
}

const Wrapper = styled.section`
.contact-short{
    max-width:60vw;
    margin:auto;
    padding:5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius:1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform:translateY(50%);
}
.contact-short-btn {
    justify-self: end;
    align-self: center;
  }
    
    

   


footer{
    background-color:#0a1435;
    padding:14rem 0 3rem 0;
    color:#fff;
   
   p{
    color: ${({ theme }) => theme.colors.white};
   }
    
    .footer-subscribe input{
        margin:2rem 0;
        padding:1rem 2rem;

    }

    .grid-four-columns{
        grid-template-columns: 1fr 1.2fr .5fr .8fr ;
      
        justify-content:center;
        align-items:center;
        margin:3rem  auto;
    }
    .footer-social--icons{
        display:flex;
        gap:2rem;
        div{
            padding:1rem;
            border-radius:50%;
            border:2px solid white;
            margin:1rem 0;

        }
    }
    h3{
        font-size:1.5rem;
        font-weight:400;
    }
    .icons{
        font-size:2.4rem;
        position:relative;
        cursor:pointer;
    }
    
}
.grid-two-columns{
    grid-template-columns:repeat(2,1fr);

}

.footer-bottom-section{
    padding-top:9rem;
}
hr{
    margin-bottom:2rem;
    height:0.1px;
    color: ${({ theme }) => theme.colors.hr};
}
@media (max-width:${({ theme }) => theme.media.tab}) {
    .container{
      padding: 0 3.2rem;
    }

     
    footer .grid-four-columns{
        grid-template-columns:repeat(2,1fr);
    
    }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    
  
  
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
      .grid-two-columns{
        grid-template-columns:repeat(1,1fr);
    
    }
    
    }
   
    footer .grid-four-columns{
        grid-template-columns:repeat(1,1fr);
    
    }
    .grid-two-columns{
        grid-template-columns:repeat(1,1fr);
    
    }
     .footer-bottom--section {
      padding-top: 3rem;
    }
  }
  
 
}


`;
export default Footer;