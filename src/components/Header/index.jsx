import React, { useState, useEffect } from 'react';
import { ContainerHeader } from './styles';
import ismaelPng from '../../assets/img/ismaellogis.png';
import { FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuGridROpen, setIsMenuGridROpen] = useState(false);

  const toggleMenuGridR = () => {
    setIsMenuGridROpen(!isMenuGridROpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ContainerHeader className={scrolled ? 'scrolled' : ''}>
      <div className="logo-menu-container">
        <a href="/">
          <img src={ismaelPng} alt="IsmaelDecor" />
        </a>
        <div className="menu-responsi">
          {isMenuGridROpen ? (
            <FaTimes
              className="menu-grid close-icon"
              size={'32px'}
              onClick={toggleMenuGridR}
            />
          ) : (
            <CgMenuGridR
              className="menu-grid"
              size={'32px'}
              onClick={toggleMenuGridR}
            />
          )}
        </div>
      </div>
      <nav>
        <ul>
          <a href="/">
            <li>HOME</li>
          </a>
          <a href="/quemsomos">
            <li>QUEM SOMOS</li>
          </a>
          <a target="blank" href="https://api.whatsapp.com/send?phone=31973277633&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os">
            <li>CONTATO</li>
          </a>
          <a href="servicos">
              <li>SERVIÇOS</li>
            </a>
          <a target="blank" href="https://www.facebook.com/ismaeldeccor">
            <FaFacebook />
          </a>
          <a target="blank" href="https://www.instagram.com/ismaeldeccor/">
            <FaInstagram />
          </a>
        </ul>
      </nav>

      {isMenuGridROpen && (
        <div className="dropdown-responsi-container">
          <ul className="dropdown-responsi">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/quemsomos">
              <li>Quem Somos</li>
            </a>
            <a href="servicos">
              <li>Serviços</li>
            </a>
            <a href="https://api.whatsapp.com/send?phone=31973277633&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os">
              <li>Contato</li>
            </a>
          </ul>
        </div>
      )}
    </ContainerHeader>
  );
};

export default Header;
