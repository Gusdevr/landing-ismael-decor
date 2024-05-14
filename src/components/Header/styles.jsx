import styled from "styled-components"

export const ContainerHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 7rem;
  padding: 0.625rem;
  background-color: transparent;
  color: black;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1000;

  .menu-responsi {
    display: none;
    
    a {
      font-size: 22px;
      line-height: 10px;
      margin-left: 20px;
      margin-top: 50px;
    }
  }

  


  .dropdown-responsi {
    position: absolute;
    right: 72.8%;
    top: -3%;
    list-style: none;
    /* background-color: #2c363fd3; */
    background-color: #fff;
    border: none;
    border-radius: 5px;
    width: 300px;
    height: 810px;
    z-index: 1000;
    transition: width 0.5s, background-color 0.5s;
    transition: transform 0.3s;
   
    
  }





  

  &.scrolled {
    /* background-color:#52414cce; */
    background-color: #fff;
    transform: scale(1.02); 
    


    
    img {
   
       
      transform: scale(1.09); 
     
    }

    nav li {
      transform: scale(1.09); 
    }
  }

  &:hover img {
    transform: scale(1.03); 
  }
  
  nav ul   {
    display: flex;
    list-style: none;
    gap: 35px;
    margin: 0;
    padding: 0;
    color: #fff;
    font-weight: 700;
    font-size: 16px;


   
  }
  
  nav li  {
    cursor: pointer;
    transition: transform 0.3s ease;

    :hover{
        color: #7a0d25;
        /* color: #434343dc; */
        font-size: 18px;
    }

   
  }

  

  a {
    text-decoration: none;
    color: #7a0d25;
    display: block;
    font-size: 20px;
  }


.dropdown {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 12.5%;
  top: 80%;
  gap: 15px;
}

.dropdown-b {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 23.5%;
  top: 80%;
  gap: 15px;
}


@media screen and (max-width: 768px){
  width: 100%;
  flex-direction: column;
}

@media (max-width: 768px) { 
  .menu-responsi {
    display: block; 
   
  }
}

@media (max-width: 768px) { 
  nav {
    display: none; 
  }
}



@media (max-width: 1099px) {
  width: 1075px;
}

@media (max-width: 1099px) {
  width: 1100px;
}

@media (max-width: 768px) {
  img {
    margin-right: 900px;
  }
}




`





