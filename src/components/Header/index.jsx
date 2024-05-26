import React, { useState, useEffect } from 'react';
import { ContainerHeader } from './styles';
import ismaelPng from '../../assets/img/ismaellogis.png';
import { FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <img src={ismaelPng} alt="IsmaelDecor" />
        </Link>
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
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/quemsomos">
            <li>QUEM SOMOS</li>
          </Link>
          <a target="blank" href="https://api.whatsapp.com/send?phone=31973277633&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os">
            <li>CONTATO</li>
          </a>
          <Link to="/servicos">
            <li>SERVIÇOS</li>
          </Link>
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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/quemsomos">
              <li>Quem Somos</li>
            </Link>
            <Link to="/servicos">
              <li>Serviços</li>
            </Link>
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
