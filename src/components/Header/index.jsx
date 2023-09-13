import React, { useState, useEffect } from 'react'
import { ContainerHeader } from './styles'
import ismaelPng from '../../assets/img/ismaellogis.png'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import { CgMenuGridR } from 'react-icons/cg'
import { FaInstagram, FaFacebook  } from "react-icons/fa"


const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [cortinasDropdown, setCortinasDropdown] = useState(false)
  const [persianasDropdown, setPersianasDropdown] = useState(false)
  const [isMenuGridROpen, setIsMenuGridROpen] = useState(false)

  const toggleMenuGridR = () => {
    setIsMenuGridROpen(!isMenuGridROpen)
    setIsAnyDropdownOpen(false)
    closeAllDropdowns()
  }

  const toggleCortinasDropdown = () => {
    setCortinasDropdown(!cortinasDropdown)
  }

  const togglePersianasDropdown = () => {
    setPersianasDropdown(!persianasDropdown)
  }

  const closeAllDropdowns = () => {
    setCortinasDropdown(false)
    setPersianasDropdown(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ContainerHeader className={scrolled ? 'scrolled' : ''}>
      <a href="/">
        <img width={'180px'} src={ismaelPng} alt="IsmaelDecor" />
      </a>
      <nav>
        <ul>
          <a href="/">
            <li>HOME</li>
          </a>
       
          {/* <a href="link">
            {' '}
            <li>QUEM SOMOS</li>{' '}
          </a> */}
          {/* <li onClick={toggleCortinasDropdown}>
            NOSSAS CORTINAS{' '}
            <FaChevronDown size={'10px'} className="dropdown-arrow" />
          </li> */}
          {cortinasDropdown && (
            <ul className="dropdown">
              {/* <a href="cortinatrilho">
                <li>Trilho</li>
              </a> */}
              {/* <a href="cortinavarao">
                <li>Varão</li>
              </a> */}
              {/* <a href="persianaromana">
                <li>Romana</li>
              </a> */}
            </ul>
          )}
          {/* <li onClick={togglePersianasDropdown}>
            NOSSAS PERSIANAS{' '}
            <FaChevronDown size={'10px'} className="dropdown-arrow" />
          </li> */}
          {persianasDropdown && (
            <ul className="dropdown-b">
              {/* <a href="persianaaluminio">
                <li>Alumínio</li>
              </a> */}
              {/* <a href="persianamadeira">
                <li>Madeira</li>
              </a> */}
              {/* <a href="persianarolo">
                <li>Rolô</li>
              </a> */}
            </ul>
          )}

          {/* <a href="servicos">
            <li>SERVIÇOS</li>
          </a> */}
        
         <a href="https://api.whatsapp.com/send?phone=31973277633&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os"> <li>ENTRE EM CONTATO</li> </a>
         <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </ul>


        
      </nav>

      <div className="menu-responsi">
        {isMenuGridROpen ? (
          <FaTimes
            className="menu-grid"
            size={'52px'}
            style={{
              bottom: '35%',
              right: '68%',
              cursor: 'pointer',
              position: 'absolute',
              color: '#7a0d25',
            }}
            onClick={toggleMenuGridR}
          />
        ) : (
          <CgMenuGridR
            className="menu-grid"
            size={'52px'}
            style={{
              bottom: '35%',
              right: '75%',
              cursor: 'pointer',
              position: 'absolute',
              color: '#7a0d25',
            }}
            onClick={toggleMenuGridR}
          />
        )}
        {isMenuGridROpen && (
          <ul className="dropdown-responsi">
            <a href="/">
              <li>Home</li>
            </a>
            {/* <a href="quemsomos">
              <li>Quem Somos</li>
            </a> */}
            {/* <a href="cortinatrilho">
              <li>Cortina Trilho</li>
            </a> */}
            {/* <a href="cortinatrilho">
              <li>Cortina Varão</li>
            </a> */}
            {/* <a href="persianaaluminio">
              <li>Persiana Alumínio</li>
            </a> */}
            {/* <a href="persianaaluminio">
              <li>Persiana Madeira</li>
            </a> */}
            {/* <a href="persianaaluminio">
              <li>Persiana Rolô</li>
            </a> */}
            {/* <a href="servicos">
              <li>Serviços</li>
            </a> */}
            <a href="https://api.whatsapp.com/send?phone=31973277633&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os">
              <li>Contato</li>
            </a>
          </ul>
        )}
      </div>
    </ContainerHeader>
  )
}

export default Header
