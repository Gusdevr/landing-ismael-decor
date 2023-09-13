import styled from "styled-components";

export const ContainerUs = styled.div`

 

  .wall-header img {
    width: 100vw;
    height: 800px;

   
  }


  .img-about {

      display: flex;
      margin-left: 750px;
      margin-top: 200px;
      border-radius: 8px;
      max-width: 450px;

  }

  .about-us {

    margin-top: 100px;


    h1 {
     display: flex;
     text-align: center;
     justify-content: center;
      
    }

 

    h3 {
    display: flex;
    text-align: center;
    justify-content: center;
    }


    @media screen and (max-width: 768px){
    
  .about-us {
    background-color: red;
    
  }

      


  img {
    display: none;
  }


}

   
  }

  .product-us {
    position: relative;
    width: 550px;
    height: 240px;
    text-align: center;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    overflow: hidden;
    transition: background-color 0.3s;
    margin-top: 200px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #3498db; /* Cor da barra */
      transform: translateX(-100%);
      transition: transform 0.6s;
    }

    :hover::after {
      transform: translateX(0);
    }

    h5 {
      margin-top: 35px;
      margin-bottom: 20px;
      font-size: 20px;
    }

    p {
      line-height: 25px;
      
    }
  }

  .main-us {
    position: relative;
    width: 550px;
    height: 240px;
    text-align: center;
    background-color:#f7f7f7;
    border: 1px solid #ddd;
    overflow: hidden;
    transition: background-color 0.3s;
    margin-top: -240px;
    margin-left: 600px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #3498db; /* Cor da barra */
      transform: translateX(-100%);
      transition: transform 0.6s;
    }

    :hover::after {
      transform: translateX(0);
    }

    h5 {
      margin-top: 35px;
      margin-bottom: 20px;
      font-size: 20px;
    }

    p {
      line-height: 25px;
     
    }

    

  }

  .card {
    margin-left: 350px;
    margin-top: 900px;
    margin-bottom: 100px;


    @media screen and (max-width: 768px){
  
  width: 100%;
  flex-direction: column;
  display: none;


  


}
  }

  .c-footer {
    display: flex;
    text-align: center;


    @media screen and (max-width: 768px){
     display: none;
   
      
    }



    h1 {
  
        position: absolute;
       
        margin-left: 650px;
        margin-top: 50px;
    }

    button {
   
        margin-left: 870px;
        margin-top: 150px;
        width: 150px;
        height: 40px;
        border: none;
        background-color: #7a0d25;
        color: #fff;
        border-radius: 5px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
    

      :hover {
        background-color: #fff;
        color: #7a0d25;
        font-weight: 700;
        font-size: 16px;
      }
    }
  }

`


export const StyledFooter = styled.div`
  display: flex;
  

`
