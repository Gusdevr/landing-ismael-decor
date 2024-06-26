import styled from "styled-components"

export const ContainerHome = styled.div`



`;

export const SectionHeader = styled.section`
  img {
    width: 100vw;
    height: 800px;
 
  }

  video {
    width: 100vw;
    object-fit: cover;
    height: 800px;
   

  }

 
`

export const SectionProduct = styled.section`
  display: flex;
  width: 100vw;
  /* background-color: #2c363f; */
  background-color: #7a0d25;
  margin-top: -10px;
  padding-bottom: 80px;
  justify-content: space-around;

  a {
    text-decoration: none;
  }

  h1 {
    position: absolute;
    display: flex;
    text-align: center;
    margin-top: 30px;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
  }

  article {
    margin-top: 120px;
    padding: 10px 20px;
    text-align: center;

    img {
      width: 300px;
      height: 300px;
      border-radius: 8px;
      transition: transform 0.3s ease;
      margin-bottom: 5px;

      :hover {
        transform: scale(1.05);
      }
    }

    h3 {
      margin-top: 8px;
      color: #fff;
      font-size: 20px;
      border: solid transparent black;
      height: 35px;
      /* background-color: #20231f; */
      padding-top: 6px;
      border-radius: 5px;
      cursor: pointer;

      :hover {
        /* border: solid 1px #fff; */
        /* border-color: #fff; */
          
        background-color: transparent;
        transition: 600ms;
      }
    }

   
  }

  @media screen and (max-width: 768px){
  
  width: 100%;
flex-direction: column;
h1 {
  display: none;
}




}


`;

export const SectionAbout = styled.section`




  .about-galery { 
    /* width: 100vw; */
    /* height: 600px; */
    padding: 30px;
    margin-left: 160px;

    @media screen and (max-width: 768px) {
     
     margin-left: 22px;
      max-width: 350px;
    
    }
   
  }

  img {
    width: 400px;
    
  }

  .container-about {
    display: flex;
    position: absolute;
    margin-top: 750px;
    left: 585px;

    
  }

  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 887px;
    color: #2c363f;
  }

  .barner-about {
    margin-left: 410px;
    width: 1100px;
    height: 600px;
    border-radius: 8px;
  }

  p {
    display: flex;
    text-align: right;
    position: absolute;
    left: 136.25rem;
    top: 65%;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
  }

  button {
    position: absolute;
    bottom: 30px;
    right: 35px;
    width: 120px;
    height: 42px;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    background-color: #85031f;
    color: #fff;
    cursor: pointer;

    :hover {
      color: #85031f;
      background-color: #fff;
      font-size: 18px;
    }
  }


  .about-us {
    /* background-color: #2c363f; */
    background-color: #7a0d25;
    height: 500px;
    display: flex;
    justify-content: center;
   
  

    .about-title {
      z-index: 1000;
      display: flex;
      justify-content: center;

   
      color: #fff;
 

      h2 {
        font-size: 30px;
      }

      span {
        display: flex;
        font-size: 20px;
        line-height: 150%;
        max-width: 450px;
        margin-top: 40px;
      
     

      
      
     
      }
    
    }
  }

  @media screen and (max-width: 768px){
  
  width: 100%;
  flex-direction: column;

  .about-us {
    flex-direction: column;

  }

  .about-title {
    max-width: 380px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }


  


}


.about-title {
  display: flex;
  flex-direction: column;

}
 
`
