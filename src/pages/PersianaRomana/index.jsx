import React from 'react'
import { 
  ContainerUs, 
  StyledFooter 
} from '../QuemSomos/styles'
import Header from '../../components/Header'
import HeaderUsPng from '../../assets/img/cortinaedit.jpg'
import RoomPng from '../../assets/img/persiroma.png'
import Footer from '../../components/Footer'

const PersianaRomana = () => {
  return (
    <ContainerUs>
        <Header />

        <div className='wall-header'>
        <img src={HeaderUsPng} alt="" />
        </div>

        <div className='about-us'>
        <h1>Persiana Romana</h1>
        <img src={RoomPng} alt="" />

        <h2>Com sistema de controle de iluminosidade rápido</h2>
        <h3>Introduza uma elegância suave e um design sofisticado <br />
            ao seu espaço com as nossas persianas romanas. <br />
            Combinando a beleza das cortinas com a funcionalidade <br />
            das persianas, essas peças artesanais adicionam uma camada <br />
            de estilo requintado às suas janelas. Ao serem elevadas, <br />
            as persianas romanas revelam as dobras suaves e a textura <br />
            dos tecidos escolhidos, criando um efeito visual envolvente. <br />
            Quando abaixadas, oferecem privacidade e filtragem de luz, <br />
            enquanto mantêm um visual impecável. Selecione entre uma ampla <br />
            gama de tecidos, cores e padrões para personalizar a aparência <br />
            das suas persianas romanas, e transforme seu espaço em um refúgio <br />
            de elegância descontraída.</h3>

        </div>


        <div className='card'>


        <div className='product-us'>
          <h5>Cortinas e Persianas</h5>
          <p>Com matéria-prima de qualidade e mão de obra especializada <br />
            montamos e desenvolvemos cortinas e persianas sob medida, <br />
            que encaixam perfeitamente no local. Além disso, contamos <br />
            com uma infinidade de tecidos em diversas texturas e cores <br />
            e composições, instalamos para você com preço acessível</p>

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

export default PersianaRomana