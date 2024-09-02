import styled from "styled-components"
import AwesomeSlider from 'react-awesome-slider'

export const StyledAwesomeSlider = styled(AwesomeSlider)`
  position: relative; 
  width: 100%;
  max-width: 1200px;
  height: 600px;
  margin: 10px auto; 

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: transparent; 
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  
  
  /* @media (max-width: 1499px) {
    max-width: 90%;
    height: auto;
  }
  
  @media (max-width: 1300px) {
    max-width: 90%;
    height: auto;
   
  }

  @media (max-width: 1070px) {
    max-width: 80%;
    height: auto;
   
  }

  @media (max-width: 1070px) {
    margin-left: 130px;
    max-width: 80%;
    height: auto;
   
  }
  
  @media (max-width: 800px) {
   
    max-width: 90%;
    height: auto;
   
  }

  @media (max-width: 837px) {
   margin-left: 190px;
   max-width: 90%;
   height: auto;
  
 }

  
 @media (max-width: 500px) {
    display: none;
  }
  
  @media (max-width: 400px) {
    max-width: 90%;
    height: auto;
  }
  
  @media (max-width: 300px) {
    max-width: 90%;
    height: auto;
  } */

  
`
