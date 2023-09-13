import React from 'react'
import { ContainerFooter } from './styles'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"



const Footer = () => {
  return (
    <ContainerFooter>

      <div className='sec-cort'>

<h3>Nossas Cortinas</h3>
<a href="persianarolo">Cortina Rolô</a>
<a href="cortinatrilho">Cortina com Trilho</a>
<a href="cortinavarao">Cortina com Varão</a>
<a href="cortinatrilho">Cortina Tecido</a>
</div>

<div className='sec-persi'>

<h3>Nossas Persianas</h3>
<a href="persianarolo">Persiana Rolô</a>
<a href="persianaromana">Persiana Romana</a>
<a href="persianaaluminio">Persiana de Aluminio</a>
<a href="persianamadeira">Persiana de Madeira</a>
</div>

<div className='sec-contact'>

<h3>Entre em Contato</h3>
<p>Rua Flor do Vale, 65 - Tupi,<br /> Belo Horizonte - MG</p>
<p>(31) 973277633</p>
<p>persiana2irmãos@gmail.com</p>

<div className='social-link'>
<a target='blank' href="https://www.instagram.com/ismaeldeccor/">
  <FaInstagram className='insta-icon' size={'20px'}/></a>
<a target='blank' href="https://www.facebook.com/ismaeldeccor">
  <FaFacebook className='face-icon' size={'19px'}/></a>
</div>

</div>

<div className='sec-copy'>
Ismael Decor &copy; <strong>Direitos Reservados</strong>

</div>



    </ContainerFooter>
  )
}

export default Footer