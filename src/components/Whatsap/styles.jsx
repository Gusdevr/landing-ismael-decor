import styled from "styled-components";

export const WhatsContainer = styled.div `


  position: fixed;
  bottom: 20px; 
  right: 40px; 
  z-index: 9999;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  animation: shake 0.5s ease infinite;
  @keyframes shake {
  0%, 50% {
    transform: translateX(0);
  }
  10%, 10%, 20%, 10%, 50% {
    transform: translateX(-5px); 
  }
  20%, 15%, 10%, 50% {
    transform: translateX(5px); 
  }

 
}
`