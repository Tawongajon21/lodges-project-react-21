import styled from 'styled-components';
import defaultImg from "../photo-ten.jpg";


const StyledHero=styled.header`

    width: 100%;
   height: 60vh;
   display: grid;
   justify-content: center;
   align-content: center;
  
   background-image: url(${props=>props.img? props.img : defaultImg});
   background-size: cover;
   margin-top: -0.99em;
  

`
export default StyledHero