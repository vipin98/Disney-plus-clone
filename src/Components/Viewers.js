import React from 'react'
import styled from 'styled-components'
import HoverVideoPlayer from 'react-hover-video-player';
function Viewers() {
    return (
        <Container>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="videos/1564674844-disney.mp4"
                    pausedOverlay={
                        <img
                            src="images/viewers-disney.png"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                backgroundColor: "#232737"
                            }}
                        />
                    }
                />
            </Wrap>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="videos/1564676714-pixar.mp4"
                    pausedOverlay={
                        <img
                            src="images/viewers-pixar.png"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                backgroundColor: "#232737"
                            }}
                        />
                    }
                />
            </Wrap>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="videos/1564676115-marvel.mp4"
                    pausedOverlay={
                        <img
                            src="images/viewers-marvel.png"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                backgroundColor: "#232737"
                            }}
                        />
                    }
                />
            </Wrap>
            <Wrap>
                <HoverVideoPlayer
                    videoSrc="videos/1608229455-star-wars.mp4"
                    pausedOverlay={
                        <img
                            src="images/viewers-starwars.png"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                backgroundColor: "#232737"
                            }}
                        />
                    }
                />
            </Wrap>
            <Wrap>
                {/* <img src="images/viewers-national.png" /> */}
                <HoverVideoPlayer
                    videoSrc="videos/1564676296-national-geographic.mp4"
                    pausedOverlay={
                        <img
                            src="images/viewers-national.png"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                backgroundColor: "#232737"
                            }}
                        />
                    }
                />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px ;
    grid-gap: 25px;
    grid-template-columns: repeat(5,minmax(0,1fr));
  
    

`
const Wrap = styled.div`
    border-radius: 10px;
    cursor:pointer;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img {
      width:100%;
      height:100%;
      object-fit:cover;
      background-color: "#040714"
  }

  &:hover {
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      transform: scale(1.05);
      border-color: rgba(249,249,249,0.8);
  }
`
