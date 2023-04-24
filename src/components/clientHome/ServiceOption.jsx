import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
// import { colors } from '@mui/material';
const ServiceOption = () => {
  return (
    <div className="continer">
        <div className="row">
            <div className="service-option">
                {service.map((data,index)=>(
                <div className="service-option-box" key={index}>
                    <div className="service-option-box-border">
                        <div className="service-option-data">
                            <div className="service-option-icon">
                                {data.icone}
                            </div>
                            <div className="service-option-text">
                                <p>{data.iconeText}</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ServiceOption


const service=[
    {
        icone:<MapsHomeWorkIcon sx={{fontSize:'100px',color:"yellowgreen" }}/>,
        iconeText:"Home Improvement"
    },
    {
        icone:<ApartmentIcon color="primary" sx={{fontSize:'100px'}}/>,
        iconeText:"Home & Office"
    },
    {
        icone:<BusinessIcon sx={{fontSize:'100px',color:'aqua' }}/>,
        iconeText:"Properties & Rental"
    },
    {
        icone:<LocalShippingIcon sx={{fontSize:'100px',color:"brown"}}/>,
        iconeText:"Travel & Transport"
    } 
]