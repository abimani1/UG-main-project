import React, { useEffect, useState } from 'react'
import{countries,card}from '../Landing/Data'
import '../style/hero.css'
import Blog from './Blog';
export const Hero = () => {
  const[current,setCurrent]=useState(0);
  const[autoPlay,setAutoPlay]=useState(true)

  


 
  const timeOut=()=>{autoPlay && setTimeout(()=>{
    slideRight();
  },5500);}

  useEffect(()=>{
    // let timeOut=null;
    timeOut()
  })
  const slideRight=()=>{
    setCurrent(current ===countries.length-1 ? 0 : current + 1)
  }
  
  // const slideLeft=()=>{
  //   setCurrent(current === 0 ? countries.length - 1 : current - 1)
  // }

  return (
    <>
    <div className="carousel">
      <div className="carousel_wrapper">
        {countries.map((image,index)=>{
          return(
            <div key={index} className={index === current 
              ?
               "carousel_card carousel_card-active"
              :
                "carousel_card"} >
              <img className="card_image" src={image.image} alt={image.title} />
              <div className="card_overlay">
                <div className="moving_box">
                  <div>
                    <h2 className="card_title">{image.title}</h2>
                  </div>
                  <div>
                    <h5 className="sub_card_title">{image.subTitle}</h5>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    <div className="continer">
      <div className="row">
        <div className="title-hero">
          <p>Welcome to My Quot's</p>
        </div>
        <div className="box">
          {card.map((img,index)=>(
          <div className="card-box featured-block" key={index}>
            <div className="card">
              <div className="image-box">
                <img src={img.image} alt="" className='featured-block-image'/>
              </div>
              <div className=" featured-block-text">
                <p>{img.title}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
        <Blog/>
      </div>
    </div>
    </>
  )
}