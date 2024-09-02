import React from 'react'

import 'react-awesome-slider/dist/styles.css'
import  { StyledAwesomeSlider } from './styles'


import SliderTwoPng from '../../assets/img/novos2024-2/slide1.jpg'
import SliderTreePng from '../../assets/img/novos2024-2/slide2.jpg'
import SliderFourPng from '../../assets/img/novos2024-2/slide3.jpg'
import SliderFivePng from '../../assets/img/novos2024-2/slide4.jpg'
import SliderSixPng from '../../assets/img/novos2024-2/slide5.jpg'
import SliderSevenPng from '../../assets/img/novos2024/new5.jpg'
import SliderEightPng from '../../assets/img/novos2024-2/slide6.jpg'
import SliderNinePng from '../../assets/img/novos2024-2/slide7.jpg'
import PersianaArticleJPG from '../../assets/img/novos2024-2/slide8.jpg'



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
        <img src={SliderFivePng} alt="Image 3" />
      </div>
      <div>
        <img src={SliderSixPng} alt="Image 3" />
      </div>
      <div>
        <img src={PersianaArticleJPG} alt="Image 3" />
      </div>
      <div>
        <img src={SliderEightPng} alt="Image 3" />
      </div>
      <div>
        <img src={SliderNinePng} alt="Image 3" />
      </div>
     
      
      
    </StyledAwesomeSlider>
  )
}

export default SliderGalery
