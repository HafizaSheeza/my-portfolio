import styled from "styled-components";
import React from "react";
import { Button } from "./Styles/Button";

const Contact = () => {
   
    return (<>

        <Wrapper>
            <h2 className="common-heading">Feel free to contact us</h2>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.3747758391473!2d74.30002121448503!3d31.596188950556943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c88979162f5%3A0xc5a3aa1f6b2caff2!2sRavi%20Rd%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679081225527!5m2!1sen!2s"
                width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer"></iframe>

            <div className="content-form">
                <form action="https://formspree.io/f/xyyaprjb" method="POST" className="input-form">
                    <input type="text" name="name" id="" required placeholder="Username" />
                    <input type="email" name="email" id="" required placeholder="Email" />
                    <textarea name="message" id="" required cols="30" rows="10"></textarea><input type="submit" value="Send" /></form></div></Wrapper></>)

}


const Wrapper = styled.section`
padding: 3rem 0;
.common-heading{
   margin:3rem auto;  
    font-weight:600;
    font-size:3.8rem;
}
.map{
background-color:rgba(0,0,0,0.5);
}
.content-form{
    max-width:50rem;
    margin:auto;
}
.input-form{
    display:flex;
    justify-content:center;
    flex-direction:column;
    gap:3rem;
    margin-top:4rem;

}
.input-form input{
    padding:.8rem 2.4rem;
    outline:none;
}
@media (max-width:${({ theme }) => theme.media.mobile}) {

  
    .content-form{
      max-width:40rem;
      margin:auto;
  }
}`
export default Contact;