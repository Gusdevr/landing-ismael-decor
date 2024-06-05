import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ContainerUs, 
  // StyledFooter 
} from './styles';
import Header from '../../components/Header';
import HeaderUsPng from '../../assets/img/cortinaedit.jpg';
import RoomPng from '../../assets/img/AboutUs/roomus.png';
// import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/Whatsap';


import NerwBannerJPG from '../../assets/img/news/novabanner2.jpg'

const QuemSomos = () => {
  return (
    <ContainerUs>
      <Header />

      <div className='wall-header'>
        <img src={NerwBannerJPG} alt="heder" />
      </div>

      <WhatsAppButton />

      <div className='about-us'>
        <h1>Estamos no mercado há 10 anos</h1>
        <p>Bem-vindo à Ismael Decor, o seu destino exclusivo 
          para cortinas e persianas personalizadas, onde
          a elegância encontra a funcionalidade. Desde 2012, 
          temos orgulhosamente atendido a clientes exigentes, 
          vestimos janelas e costuramos sonhos, transformando casas 
          e espaços comerciais em verdadeiros refúgios de conforto e estilo.</p>
      </div>

      <img className='img-about' src={RoomPng} alt="" />

      {/* <div className='card'>
        <div className='product-us'>
          <h5>Cortinas e Persianas</h5>
          <p>Com matéria-prima de qualidade e mão de obra especializada, <br />
            montamos e desenvolvemos cortinas e persianas sob medida, <br />
            que encaixam perfeitamente no local. Além disso, contamos <br />
            com uma infinidade de tecidos em diversas texturas e cores <br />
            e composições, instalamos para você com preço acessível.</p>
        </div>
        <div className='main-us'>
          <h5>Limpeza e Hipermeabilização</h5>
          <p>
            Limpeza profunda e eficiente com preservação da integridade <br />
            do material proporcionamos econômia de tempo e esforço, <br />
            trazendo saúde, higiene com foco em manuteção preventiva. <br />
            Na hipermeabilização, você tem seu sofá como novo e por mais tempo, <br />
            Oferecemos serviços que contam com acessibilidade e produtos especiais. <br />
          </p>
        </div>
      </div> */}

      <div className='c-footer'>
        <h2>Solicite orçamento com um de nossos <br/> 
        consultores</h2>
        <Link className='req-now' target='blank' to="https://api.whatsapp.com/send?phone=31973277633&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os">
          Solicitar Agora
        </Link>
      </div>

      {/* <footer>
      </footer> */}
    </ContainerUs>
  );
}

export default QuemSomos;
