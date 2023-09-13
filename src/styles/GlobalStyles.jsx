import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    

}

body {
    -webkit-font-smoothing: antialiased;
   width: 100vw;
   /* background-color: #969696; */
    background-color: #f2efef;
    /* background-color: #2c363f; */
  
}

body, input , header {
    font-family: 'Poppins', sans-serif;
}
`