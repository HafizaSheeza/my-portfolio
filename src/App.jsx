import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

import Service from './Service';
import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Error from './Error';
import Topbutton from './Component/Topbutton';
import Projects from './Projects';

function App() {
  const theme = {
    colors: {
      heading: "black",
      text: "black",
      white: "#fff",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg,rgb(132 144 255)0%,rgb(98 189 252)100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15)0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16)0px 1px 4px",

    },
    media: { mobile: "768px", tab: "998px" },
  }

  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />

        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='contact' element={<Contact />} />

            <Route exact path='service' element={<Service />} />
            <Route exact path='projects' element={<Projects />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Topbutton />
          <Footer /></BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
