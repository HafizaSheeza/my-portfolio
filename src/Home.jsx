import Herosection from "./Component/Herosection";
import Contact from "./Contact";
import Projects from "./Projects";
import Service from "./Service";
import { useTheme } from 'styled-components';

// Import images for both light and dark themes
import lightImage from '../public/Images/pro.jpg';
import darkImage from '../public/Images/pro.jpg';
const Home = ({isOn, handleToggle }) => {
    // const theme = useTheme();
    const data = {
        name: "Sheeza Nawaz",
        // image: "https://hamna.dev/static/media/about.4f48d797b62491663893.gif"
        image: isOn? './Images/pro1.jpg':'./Images/pro.jpg',
    }
    return (<>
        <Herosection {...data} />
        <Service />
        <Projects />
        <Contact />
    </>)
}
export default Home;