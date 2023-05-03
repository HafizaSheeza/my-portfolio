import styled from "styled-components";
import Sdata from "./Sdata";
const Card = () => {
    return (
        <>
            <Wrapper>
                <div className="container grid grid-three-columns">

                </div>
            </Wrapper></>
    )
}
const Wrapper = styled.section`
padding:9rem 0;
.container{
   
    max-width:100rem;
    margin:0 auto;
  
}
.grid{
    display:grid;
    gap:9rem;
    
}
.grid-two-columns{
    grid-template-columns:repeat(3,1fr);

}
`
export default Card;