import React from "react";

import Header from "../../components/Header";
import SliderGalery from "../../components/SliderGalery";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/Whatsap";
import ContactForm from "../../components/ContactForm";

import {
  ContainerHome,
  SectionHeader,
  SectionProduct,
  SectionAbout,
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

import NerwBannerJPG from "../../assets/img/news/novabanner2.jpg";

const Home = () => {
  return (
    <ContainerHome>
      <Header />

      <SectionHeader>
        <img src={NerwBannerJPG} alt="" />

        <video autoPlay loop muted>
          <source src={VideoBannerMP4} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </SectionHeader>

      <WhatsAppButton />

      <SectionProduct>
        <h1>Conheça nossos produtos</h1>

        <article className="art-cort">
          <img className="img-cort" src={CortinaArticle} alt="" />
          <a href="https://www.instagram.com/ismaeldeccor/" target="blank">
            <h3>Nossas Cortinas</h3>{" "}
          </a>
        </article>

        <article className="art-persi">
          <img src={TelaSolarJPG} alt="" />
          <a href="https://www.instagram.com/ismaeldeccor/" target="blank">
            {" "}
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
            <h2>Estamos no mercado há 10 anos</h2>
            <span>
              Bem-vindo à Ismael Decor, o seu destino exclusivo para cortinas e
              persianas personalizadas, onde a elegância encontra a
              funcionalidade. Desde 2012, temos orgulhosamente atendido a
              clientes exigentes, vestimos janelas e costuramos sonhos,
              transformando casas e espaços comerciais em verdadeiros refúgios
              de conforto e estilo.
            </span>
          </div>
        </div>

        <div className="container-about">
          <ContactForm />
        </div>
      </SectionAbout>

      <SliderGalery />

      <Footer />
    </ContainerHome>
  );
};

export default Home;
