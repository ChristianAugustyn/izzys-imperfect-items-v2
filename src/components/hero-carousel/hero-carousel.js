import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import bg from '../../images/background-image.jpg'
import scrunchie from '../../images/hero-scrunchie.jpg'
import scrunchie_back from '../../images/hero-scrunchie-back.jpg'
import scrunchie_head from '../../images/hero-scrunchie-head.jpg'

const HeroCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3440, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        className='z-0 rounded-md'
      >
        <div style={{backgroundImage: `url(${bg})`}} className='z-0 rounded-md bg-center bg-no-repeat bg-cover h-96'></div>
        <div style={{backgroundImage: `url(${scrunchie})`}} className='z-0 rounded-md bg-center bg-no-repeat bg-cover bg-black bg-opacity-25 h-96'></div>
        <div style={{backgroundImage: `url(${scrunchie_head})`}} className='z-0 rounded-md bg-center bg-no-repeat bg-cover bg-black bg-opacity-25 h-96'></div>
        <div style={{backgroundImage: `url(${scrunchie_back})`}} className='z-0 rounded-md bg-center bg-no-repeat bg-cover bg-black bg-opacity-25 h-96'></div>
      </Carousel>
    </>
  )
}

export default HeroCarousel
