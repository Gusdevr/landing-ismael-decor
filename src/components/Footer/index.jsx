import React from 'react'
import { ContainerFooter } from './styles'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <ContainerFooter>

     

<div className='sec-contact'>

<h3>Entre em Contato</h3>
<p>R. Rio Grande do Norte, 1436 - Savassi<br /> Belo Horizonte - MG</p>
<p>(31) 973277633</p>
<p>persiana2irmãos@gmail.com</p>

<div className='social-link'>
<a target='blank' href="https://www.instagram.com/ismaeldeccor/">
  <FaInstagram className='insta-icon' size={'20px'}/></a>
<a target='blank' href="https://www.facebook.com/ismaeldeccor">
  <FaFacebook className='face-icon' size={'19px'}/></a>

  <Link to="/politicas">
            <li>Políticas de Privacidade</li>
          </Link>
</div>

</div>

<div className='sec-copy'>
Ismael Deccor &copy; <strong>Direitos Reservados</strong>

</div>



    </ContainerFooter>
  )
}

export default Footer