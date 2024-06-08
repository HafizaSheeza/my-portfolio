import { useState } from "react";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";
import { Button } from "./Styles/Button";
import styled from "styled-components";
const Service = () => {
    const [Data, setData] = useState(Sdata)
    return (<>
        <Wrapper className="section">
            <h2 className="common-heading">
                Skills
            </h2>
            <div className="container grid grid-three-columns">
                {
                    Data.map((curElem, index) => {
                        const { imgsrc } = curElem;
                        return (<>
                            <div key={index} className="card">
                                <figure>
                                    <img src={imgsrc} alt="" width="100px" />
                                </figure>

                            </div></>)
                    })
                }
            </div>

        </Wrapper>
    </>)

}
const Wrapper = styled.section`
padding:3rem 0;
.common-heading{
    padding:3rem 0;  
    font-weight:600;
    font-size:3.8rem;
}
.container{
    max-width:120rem;
    margin:0 auto;

}
.grid{
    display: flex;
    justify-content: center;
   flex-wrap: wrap;
    gap:9rem;
}
.grid-three-columns{
    /* grid-template-rows:repeat(2,.5fr) */
}
.card{
    /* border:0.1rem solid rgb(170 170 170/40%); */
    /* box-shadow: 0 2rem 2rem 0 rgb(132 144 255/30%); */
   
    text-align: center;
  figure{
    border-radius: 200px;
    border: 5px solid rgb(98 84 243);
  }
  
    h3{
        margin:2rem auto;
        text-align:center;
        font-weight:300;
        font-size:2.4rem;
    
    }
    .btn{
        margin:2rem auto;
        background-color:rgb(0 0 0/0%);
        border:0.1rem solid rgb(98 84 243);
        display:flex;
        justify-content:center;
        align-items:center;
        &:hover{
            background-color:rgb(98 84 243);
            transition:all 0.5s linear;
            color:#fff;
        }
        a{
            color:rgb(98 84 243);

        }
        &:hover a{
            color:#fff;
            
            
        }
    }
}



@media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-columns {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-columns,
    .grid-three-columns {
      grid-template-columns: 1fr;
    }
  }
`;
export default Service;