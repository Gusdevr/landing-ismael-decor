import React from 'react'

import 'react-awesome-slider/dist/styles.css'
import  { StyledAwesomeSlider } from './styles'


import SliderTwoPng from '../../assets/img/Galery/capturaA.png'
import SliderTreePng from '../../assets/img/Galery/capturaB.png'
import SliderFourPng from '../../assets/img/Galery/capturaC.png'
import SliderFivePng from '../../assets/img/Galery/capturaD.png'




const SliderGalery = () => {
  return (
   
    <StyledAwesomeSlider animation="fallAnimation"  >
     
    
      <div className='imagezero'>
        <img  src={SliderTwoPng} alt="Image 0" />
      </div>
      <div>
        <img src={SliderTreePng} alt="Image 1" />
      </div>
      <div>
        <img src={SliderFourPng} alt="Image 2" />
      </div>
      <div>
        <img src={SliderFivePng } alt="Image 3" />
      </div>
     
      
      
    </StyledAwesomeSlider>
  )
}

export default SliderGalery
