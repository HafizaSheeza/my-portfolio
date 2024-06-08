import Herosection from "./Component/Herosection";
import Contact from "./Contact";
import Projects from "./Projects";
import Service from "./Service";
const Home = () => {
    const data = {
        name: "Sheeza Nawaz",
        // image: "https://hamna.dev/static/media/about.4f48d797b62491663893.gif"
        image:"./Images/pro.jpg"
    }
    return (<>
        <Herosection {...data} />
        <Service />
        <Projects />
        <Contact />
    </>)
}
export default Home;