import React from 'react'
import { 
  ContainerUs, 
  StyledFooter 
} from '../QuemSomos/styles'
import Header from '../../components/Header'
import HeaderUsPng from '../../assets/img/cortinaedit.jpg'
import RoomPng from '../../assets/img/varao.png'
import Footer from '../../components/Footer'

const CortinaVarao = () => {
  return (
    <ContainerUs>
        <Header />

        <div className='wall-header'>
        <img src={HeaderUsPng} alt="" />
        </div>

        <div className='about-us'>
        <h1>Cortina com Varão</h1>
        <img src={RoomPng} alt="" />

        <h2>Controle em Harmonia</h2>
        <h3>Eleve o charme do seu espaço com a nossa deslumbrante cortina <br />
            com varão. Esta peça de destaque combina moda e funcionalidade, <br />
            proporcionando uma maneira elegante de controlar a entrada de luz <br />
            e a privacidade. O varão robusto oferece suporte firme à cortina, <br />
            permitindo um movimento suave ao abrir e fechar. Personalize sua <br />
            escolha de tecidos e estilos para criar uma cortina com varão <br />
            que se alinha perfeitamente com a estética do seu espaço, <br />
            ao mesmo tempo em que adiciona uma camada sofisticada de design. <br />
            Deixe que esta peça icônica transforme suas janelas em uma obra-prima <br />
            visual, complementando a atmosfera de qualquer ambiente com beleza <br />
            e funcionalidade.</h3>

        </div>


        <div className='card'>


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

        </div>

        <div className='c-footer'>
          <h1>Solicite orçamento com um de nossos <br/> 
          consultores</h1>
          <button>Solicitar Agora</button>

         <div className='wall-footer'></div>
        </div>

    <StyledFooter marginTop={100}>
    <Footer />
    </StyledFooter>
 
    </ContainerUs>
    
    
  )
}

export default CortinaVarao