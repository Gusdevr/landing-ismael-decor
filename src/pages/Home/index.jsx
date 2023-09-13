import React from 'react'

import Header from '../../components/Header'
import SliderGalery from '../../components/SliderGalery'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/Whatsap'
import ContactForm from '../../components/ContactForm'


import { 
  ContainerHome, 
  SectionHeader, 
  SectionProduct,
  SectionAbout,

} from './styles'



import CortinaJPG from '../../assets/img/cortinaedit.jpg'
import CortinaArticle from '../../assets/img/ImagesArticles/cort.png'
import PersianaArticle from '../../assets/img/ImagesArticles/persi.png'
import ServicoArticle from '../../assets/img/ImagesArticles/serv.png'
import AboutJpg from '../../assets/img/cortinacc.jpg'






const Home = () => {

  
  return (
    <ContainerHome>
        <Header />
        
    <SectionHeader>
      <img src={ CortinaJPG } alt="" />

    </SectionHeader>

    <WhatsAppButton />


      <SectionProduct>
      <h1>Conheça nossos produtos</h1>

        <article className='art-cort'>
          <img className='img-cort'  src={CortinaArticle} alt="" />
         <a href="https://www.instagram.com/ismaeldeccor/"  target='blank'><h3>Nossas Cortinas</h3> </a> 
 

        </article>

        <article className='art-persi'>
          <img src={PersianaArticle} alt="" />
         <a href="https://www.instagram.com/ismaeldeccor/" target='blank'> <h3>Nossas Persianas</h3></a>
       

        </article>

        <article className='art-service'>
          <img  src={ServicoArticle} alt="" />
          <a href="https://www.instagram.com/ismaeldeccor/"  target='blank'><h3>Nossos Serviços</h3></a>
       

        </article>
     


      </SectionProduct>

      <SectionAbout>

    
        <img className='about-galery' src={ AboutJpg } alt="" />



        <div className='about-us'>
          <div className='about-title'>
        <h2>Estamos no mercado  há 10 anos</h2>
        <span>Bem-vindo à Ismael Decor, o seu destino exclusivo 
          para cortinas e persianas personalizadas, onde 
          a elegância encontra a funcionalidade. Desde 2012,
          temos orgulhosamente atendido a clientes exigentes, 
          vestimos janelas e costuramos sonhos, transformando casas 
          e espaços comerciais em verdadeiros refúgios de conforto e estilo.</span>
          </div>


        </div>



        

        <div className='container-about'>
          <ContactForm />
          
          

       
       </div>

      </SectionAbout>

   
      <SliderGalery />


      <Footer />


    </ContainerHome>
  )
}

export default Home