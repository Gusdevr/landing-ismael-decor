import styled from "styled-components";

export const ContainerServ = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  h2 {
      display: flex;
      justify-content: center;
      bottom: 60%;
      position: absolute;
    }

   




  .card-services {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 400px;
   
 

    @media screen and (max-width: 768px) {
      gap: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .card-tour,
.card-trans,
.card-host,
.card-pack {
  width: 200px;
  height: 300px;
  /* border: 1px solid #ccc; */
  border: none;
  box-shadow: 2px 2px 2px 2px  rgba(0, 0, 0, 0.36);
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  text-align: center;


}

  .card-services .card {
    flex: 1 1 250px; /* Tamanho mínimo, tamanho preferencial, tamanho máximo */
    max-width: 300px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .card-services .card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
  }

  .card-services .card h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }

  .card-services .card p {
    font-size: 14px;
    color: #666;
  }
`;

export const ContainerCarrou = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px; /* Ajuste conforme necessário */
`;
