import React from 'react'
import { FaqContainer, FaqTitle, FaqWrapper, FaqLine, FaqText, IconPlus } from './FaqElements'

const Faq = () => {
  return (
    <FaqContainer>
      <FaqTitle>Frequently Asked Questions (FAQs)</FaqTitle>
      <FaqWrapper>
        <FaqLine>
          <FaqText>What is THEDojo.com?</FaqText>
          <IconPlus />
        </FaqLine>
        <FaqLine>
          <FaqText>What is the revenue share between THEDojo.com and channel owners?</FaqText>
          <IconPlus />
        </FaqLine>
        <FaqLine>
          <FaqText>How many channels can I subscribed to?</FaqText>
          <IconPlus/>
        </FaqLine>
      </FaqWrapper>
    </FaqContainer>
  )
}

export default Faq
