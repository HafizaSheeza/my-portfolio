import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Projects = () => {
    return (
        <Wrapper>
            <h2 className="common-heading">Projects</h2>
            <div className="container grid grid-three-column">

                <NavLink to="https://reactwebsites.netlify.app/">
                    <div className='card-project'>

                        <figure  >
                            <img src="./Images/project.PNG" alt="hi" />
                            <figcaption className='caption'>Ecommerce Project with React</figcaption>
                        </figure>

                    </div>
                </NavLink>
                <NavLink to="https://cartoonsmovie.netlify.app/">
                    <div className='card-project'>

                        <figure  >
                            <img src="./Images/movie.PNG" alt="hi" />
                            <figcaption className='caption'>Movie Project with React</figcaption>
                        </figure>

                    </div>
                </NavLink>
                <NavLink to="https://lovely-twilight-89bf64.netlify.app">
                    <div className='card-project'>

                        <figure  >
                            <img src="./Images/linkedin.PNG" alt="hi" />
                            <figcaption className='caption'>Linkedin Clone With HTML CSS</figcaption>
                        </figure>

                    </div>
                </NavLink>
                <NavLink to="https://charming-dango-8fc058.netlify.app/">
                    <div className='card-project'>

                        <figure  >
                            <img src="./Images/netflix.PNG" alt="hi" />
                            <figcaption className='caption'>Neflix Clone With fetch Api (JS)</figcaption>
                        </figure>

                    </div>
                </NavLink>
                <NavLink to="https://vermillion-hamster-28f595.netlify.app">
                    <div className='card-project'>

                        <figure  >
                            <img src="./Images/youtube.PNG" alt="hi" />
                            <figcaption className='caption'>Youtube Clone With HTML,CSS</figcaption>
                        </figure>

                    </div>
                </NavLink>
                <NavLink to="https://mellow-brigadeiros-85b8ef.netlify.app/">
                    <div className='card-project'>

                        <figure  >
                            <img src="./Images/bootstrap.PNG" alt="hi" />
                            <figcaption className='caption'>Website With Bootstrap , Vanilla CSS</figcaption>
                        </figure>

                    </div>
                </NavLink>
                <div></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 8rem 0;
    
    .card-project{
       
        background-color:rgb(98 84 243);
        /* padding: 6rem; */
        max-width: 100%;
        margin: auto;
        border-radius: 1rem;
    }
    figure{
        display: flex;
     flex-direction: column;
   place-items: center;
   justify-content: center;
   place-content: center;
        max-width: 100%;
        img{
            width: 100%;
            height: 100%;
            padding: 1rem;
        }
        .caption{
            color: white;
            padding-bottom: 1rem;
        }
    }
`
export default Projects
