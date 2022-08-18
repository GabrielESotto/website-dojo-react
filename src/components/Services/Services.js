import React from 'react'
import {
  ServiceContainer,
  ServiceTitle,
  ServiceH1,
  ServiceP,
  ServiceGrid,
  ServiceBox,
  ServiceImg,
  ServiceSubtitleImg
} from './ServicesElements'

const Services = ({data}) => {
  return (
    <ServiceContainer>
      <ServiceTitle>
        <ServiceH1>Our Services</ServiceH1>
        <ServiceP>Explore our Services</ServiceP>
      </ServiceTitle>
      <ServiceGrid>
        {data.map((services, index) => {
          return (
            <ServiceBox key={index} className={services.className}>
              <ServiceImg src={services.img} />
              <ServiceSubtitleImg>{services.desc}</ServiceSubtitleImg>
            </ServiceBox>
          )
        })}
        
      </ServiceGrid>
    </ServiceContainer>
  )
}

export default Services
