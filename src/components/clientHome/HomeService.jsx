import React from 'react'
import { Link } from 'react-router-dom'
import hs1 from '../../image/HS-1.jpeg'
import hs2 from '../../image/HS-2.jpg'
import hs3 from '../../image/HS-3.jpg'
import hs4 from '../../image/HS-4.webp'

const HomeService = () => {
  return (
    <div className="continer">
        <div className="row">
            <div className="home-service">
                <div className="home-service-title">
                    <p>Home Services</p>
                </div>
                <div className="homeservice-box-body">
                    {HomeServices.map((data,index)=>(
                    <div className="home-service-box" key={index}>
                        <div className="home-service-data">
                            <div className="home-service-img">
                                <img src={data.serviceImg} alt="Domestic Help Service"/>
                            </div>
                            <div className="home-service-text">
                                <p>{data.servicesName}</p>
                            </div>
                            <div className="home-service-button">
                                <Link className='service-link' state={{serviceName:data.servicesName}} to={'/client/domestic-help-service'}> <button type='button'>get Quotes</button></Link>
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

export default HomeService

const HomeServices=[
    {
    serviceImg:hs1,
    servicesName:"Domestice Help Service"
    },
    {
        serviceImg:hs2,
        servicesName:"Furniture Dealers"
    },
    {
        serviceImg:hs3,
        servicesName:"Packers and Movers"
    },
    {
        serviceImg:hs4,
        servicesName:"Interior Designers"
    },
]