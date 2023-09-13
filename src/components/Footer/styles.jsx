import styled from "styled-components";

export const ContainerFooter = styled.footer`
display: flex;
justify-content: center;
gap: 150px;
padding-top:3.125rem;
top: 360%;
background-color: #7a0d25;
width: 100vw;
height: 18.75rem;
color: #fff;
font-weight: 500;
margin-top: 800px;


@media screen and (max-width: 768px){
  
  width: 100%;
  flex-direction: column;
  margin-top: 300px;


}


a {
    color: #fff;
    text-decoration: none;
    margin-top: 20px;
}

p {
    color: #fff;
    text-decoration: none;
    margin-top: 20px;  
}


.sec-cort {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px){
  display: none;
  width: 100%;
  flex-direction: column;


}

}

.sec-persi {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
  
  width: 100%;
  flex-direction: column;
  display: none;

}

}

.sec-contact {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px){
  
  width: 100%;
  flex-direction: column;


}


    .social-link {
        display: flex;
        gap: 10px;

        .insta-icon {
            :hover{
                color: #52414cce;
            }
        }

        .face-icon {

            :hover {
                color: #52414cce;
            }
           
        }
       
    }
}

.sec-copy {
    display: flex;
    margin-top: 270px;
    /* top: 355px; */
    color: #20231f; 
    /* /* /* background-color: #20231f;
    width: 100vw; */
    padding-bottom: 20px;
 
  
   
}

@media screen and (max-width: 768px){
  
  width: 100%;

.sec-copy {
    position: absolute;
    right: 30%;
    padding-top: 20px;
   
}


}


/* @media (max-width: 1499px) {
    margin-top: 400px;
    
}

@media (max-width: 1300px) {
    margin-top: 200px;
    
}


@media (max-width: 1099px) {
    margin-top: 180px;
    width: 1100px;

    
}

@media (max-width: 800px) {
    margin-top: 80px;
    width: 1100px;

   

    
}

@media (max-width: 769px) {

    width: 769px;
}

@media (max-width: 500px) {
   position: absolute;
    top: 260%;
    width: 499px;
    
   

    .sec-copy {
        position: relative;

        background-color: red;
    }
   

    @media (min-width: 414px) {
        margin-top: -130px;
        
    }


    


   
} */


`