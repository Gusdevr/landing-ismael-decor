import React from 'react';
import { ContainerServ, ContainerCarrou } from './styles';
import { ContainerUs } from '../QuemSomos/styles';
import Header from '../../components/Header';
// import HeaderUsPng from '../../assets/img/cortinaedit.jpg';
// import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/Whatsap';
import cort1 from '../../assets/img/news/cortinas.png';
import cort2 from '../../assets/img/news/janela.png';
import cort3 from '../../assets/img/news/persiana.png';
import cort4 from '../../assets/img/news/cortina.png';

const Servicos = () => {
  return (
    <ContainerUs>
      <Header />
      {/* <div className='wall-header'>
        <img   src={HeaderUsPng} alt="" />
      </div> */}
      <WhatsAppButton />
     
      <ContainerServ>
      
        <div className='card-services'>
        <h2>Nossos Serviços</h2>
          <div className='card-tour'>
            <h3>Pé direito duplo</h3>
            <img width={'140px'} src={ cort1 } alt="" />
            <p>Consulte nossos serviços de instalação.</p>
          </div>

          <div className='card-trans'>
            <h3>Instalação</h3>
            <img style={{marginTop: '20px'}} src={ cort3 } alt="" />
            <p>Instalação de cortinas e persianas.</p>
          </div>

          <div className='card-host'>
            <h3>Manutenção</h3>
            <img style={{marginTop: '20px'}}  src={ cort2 } alt="" />
            <p>Consulte nossos serviços de manutenção.</p>
          </div>

          <div className='card-pack'>
            <h3>Limpeza</h3>
            <img style={{marginTop: '20px', }}  width={'140px'}  src={ cort4 } alt="" />
            <p>Oferecemos serviços de lavagem.</p>
          </div>

         
        </div>

        {/* Container do Carrossel */}
        <ContainerCarrou>
          {/* Conteúdo do Carrossel */}
        </ContainerCarrou>
      </ContainerServ>
      {/* <StyledFooter marginTop={100}>
        <Footer />
      </StyledFooter> */}
    </ContainerUs>
  );
}

export default Servicos;
