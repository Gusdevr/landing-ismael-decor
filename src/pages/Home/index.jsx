import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import SliderGalery from "../../components/SliderGalery";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/Whatsap";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import {
  ContainerHome,
  SectionHeader,
  SectionProduct,
  SectionAbout,
  CookieBannerContainer,
  CookieBannerMessage,
  CookieAcceptButton
} from "./styles";

import CortinaJPG from "../../assets/img/cortinaedit.jpg";
import CortinaArticle from "../../assets/img/ImagesArticles/cort.png";
import PersianaArticle from "../../assets/img/ImagesArticles/persi.png";
import ServicoArticle from "../../assets/img/ImagesArticles/serv.png";
import AboutJpg from "../../assets/img/cortinacc.jpg";
import TelaSolarJPG from "../../assets/img/news/tela-solar.jpg";

import Service1 from "../../assets/img/novas/slide1.jpg";
import Service2 from "../../assets/img/novas/slide2.jpg";
import Service3 from "../../assets/img/novas/slide3.jpg";
import Service4 from "../../assets/img/novas/slide4.jpg";

import VideoBannerMP4 from "../../assets/media/videobanner.mp4";
import TwolandPage from "../../assets/img/novos2024-2/twoland.jpg";

import NerwBannerJPG from "../../assets/img/novos2024-2/saladecor.jpg";

const Home = () => {
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setCookieBannerVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Armazenar a aceitação dos cookies no localStorage
    localStorage.setItem('cookieConsent', 'true');
    setCookieBannerVisible(false);
  };

  return (
    <ContainerHome>
      <Header />

      <SectionHeader>
        <img src={NerwBannerJPG} alt="" />

        <div className="Front-baner">
          <h1>Personalize a decoração do seu espaço<br/> com cortinas sob medida.</h1>

          <h3>Agende uma visita e conte com nossa consultoria especializada,<br/> onde identificamos a cortina ideal para o seu ambiente.<br/>
              Oferecemos condições de pagamento flexíveis,<br/> materiais de alta qualidade, atendimento personalizado e entrega rápida!<br/>
          </h3>
         
          <a target="blank" href="https://api.whatsapp.com/send?phone=31973277633&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os">
            <button className="btn-land-one"><FaWhatsapp /> solicitar orçamento</button>
          </a>
          <a target="blank" href="tel:+5531973277633">
            <button className="btn-land-two">ligue: (31) 97327-7633</button>
          </a>
        </div>
        <img className="lander-page" src={TwolandPage} alt="" />
      </SectionHeader>

      <WhatsAppButton />

      <SectionProduct>
        <h1>Conheça nossos produtos</h1>

        <article className="art-cort">
          <img className="img-cort" src={CortinaArticle} alt="" />
          <a href="https://www.instagram.com/ismaeldeccor/" target="blank">
            <h3>Nossas Cortinas</h3>
          </a>
        </article>

        <article className="art-persi">
          <img src={TelaSolarJPG} alt="" />
          <a href="https://www.instagram.com/ismaeldeccor/" target="blank">
            <h3>Nossas Persianas</h3>
          </a>
        </article>

        <article className="art-service">
          <img src={ServicoArticle} alt="" />
          <a href="/servicos" target="blank">
            <h3>Nossos Serviços</h3>
          </a>
        </article>
      </SectionProduct>

      <SectionAbout>
        <img className="about-galery" src={Service2} alt="" />
        <img className="about-galery" src={Service3} alt="" />
        <img className="about-galery" src={Service4} alt="" />

        <div className="about-us">
          <div className="about-title">
            <h2>Sobre a Ismael Decor</h2>
            <span>
              Bem-vindo à Ismael Decor, o seu destino exclusivo para cortinas e persianas personalizadas, onde a elegância encontra a funcionalidade. Desde 2012, temos orgulhosamente atendido a clientes exigentes, vestimos janelas e costuramos sonhos, transformando casas e espaços comerciais em verdadeiros refúgios de conforto e estilo.
            </span>
          </div>
        </div>
      </SectionAbout>

      <SliderGalery />
      
      <div className="map-container">
        <h3>Caso tenha dúvidas fale conosco no whatsapp <FaArrowRightLong /> <a target="blank" href="https://api.whatsapp.com/send?phone=31973277633&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os"><button><FaWhatsapp />  Fale Conosco</button></a></h3>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.426175228478!2d-43.93135892507538!3d-19.938114843374654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU2JzE3LjMiUyA0M8KwNTYnMDIuOSJX!5e0!3m2!1sen!2sbr!4v1689974937517!5m2!1sen!2sbr"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>

      <div className="h5-insta">
        <h5 className="h-insta">Confira nosso portifólio completo no Instagram <FaArrowRightLong /> <a target="blank" href="https://www.instagram.com/ismaeldeccor/"><button><FaInstagram />  Instagram</button></a></h5>
      </div>
      
      <Footer />

      {/* Banner de Cookies */}
      {cookieBannerVisible && (
        <CookieBannerContainer>
          <CookieBannerMessage>
            Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.
          </CookieBannerMessage>
          <CookieAcceptButton onClick={handleAcceptCookies}>Entendi</CookieAcceptButton>
        </CookieBannerContainer>
      )}
    </ContainerHome>
  );
};

export default Home;
