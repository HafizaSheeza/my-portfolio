import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
// import Toggle from './Toggle';
import Service from './Service';
import Footer from './Footer';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Error from './Error';
import Topbutton from './Component/Topbutton';
import Projects from './Projects';
// import Toggle from './Toggle';



const lightTheme = {
  colors: {
    heading: "#050505",
    text: "#050505",
    white: "#e4e6eb",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98,84,243,0.5)",
    hr: "#ffffff",
    border_header:"#fff",
    gradient: "linear-gradient(0deg,rgb(132 144 255)0%,rgb(98 189 252)100%)",
    shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px",
    shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    headershadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
  },
  media: { mobile: "768px", tab: "998px" },
};
const darkTheme = {
  colors: {
    heading: "#e4e6eb",
    text: "#e4e6eb",
    white: "#050505",
    helper: "#8490ff",
    bg: "rgb(18 18 18)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98,84,243,0.5)",
    hr: "#333333",
    gradient: "linear-gradient(0deg,rgb(132 144 255)0%,rgb(98 189 252)100%)",
    shadow: "rgba(0,0,0,0.5) 0px 1px 3px 0px, rgba(27,31,35,0.5) 0px 0px 0px 1px",
    shadowSupport: "rgba(0,0,0,0.5) 0px 1px 4px",
    border_header:"rgb(204 204 204 / 15%)"
  },
  media: { mobile: "768px", tab: "998px" },
};
function App() {

  
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  useEffect(() => {
    document.body.className = theme === lightTheme ? 'light' : 'dark';
  }, [theme]);
  return (
    <>
      <ThemeProvider theme={theme} >
     
   
  
        <GlobalStyle />

        <BrowserRouter>
          <Header  isOn={theme === darkTheme} handleToggle={toggleTheme}/>
        
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
