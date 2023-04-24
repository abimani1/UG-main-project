import React from 'react'
import { Link } from 'react-router-dom'
import bs1 from '../../image/BS-1.jpg'
import bs2 from '../../image/BS-2.jpg'
import bs3 from '../../image/BS-3.jpg'
import bs4 from '../../image/BS-4.webp'

const BusinessService = () => {
  return (
    <div className="continer">
        <div className="row">
            <div className="home-service">
                <div className="home-service-title">
                    <p>Business Services</p>
                </div>
                <div className="homeservice-box-body">
                    {BusinessServices.map((data,index)=>(
                    <div className="home-service-box" key={index}>
                        <div className="home-service-data">
                            <div className="home-service-img">
                                <img src={data.serviceImg} alt="Domestic Help Service"/>
                            </div>
                            <div className="home-service-text">
                                <p>{data.servicesName}</p>
                            </div>
                            <div className="home-service-button">
                                <Link className='service-link'> <button type='button'>get Quotes</button></Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessService

const BusinessServices=[
    {
        serviceImg:bs1,
        servicesName:"Internet Service Providers"
    },
    {
        serviceImg:bs2,
        servicesName:"Generator Dealers"
    },
    {
        serviceImg:bs3,
        servicesName:"Security System Dealers"
    },
    {
        serviceImg:bs4,
        servicesName:"Ac Repair Servies"
    },
]