import React from 'react'
import { 
  VideoContainer,
  VideoIntro,
  VideoTitle,
  VideoSubtitle,
  VideoWrapper,
  VideoBox,
} from './VideoSectionElements'

const VideoSection = ({data}) => {
  return (
    <VideoContainer>
      <VideoIntro>
        <VideoTitle>Video Tutorial</VideoTitle>
        <VideoSubtitle>Learn how to work as a instructor through videos we have on our website</VideoSubtitle>
      </VideoIntro>
      <VideoWrapper>
        {data.map((video, index) => {
          return (
            <VideoBox key={index} src={video.img} />
          )
        })}
        
      </VideoWrapper>
    </VideoContainer>
  )
}

export default VideoSection
