import React from 'react'
import '../../style/vendor_home.css'
import { IconButton } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Summary = () => {
  return (
    <div className='continer'>
        <div className="row">
            <div className="lead-box">
                <div className="lead-title">
                    <div className="title-sum">
                        <p>Lead Summary</p>
                    </div>
                    <div className="title-sum-tw">
                        <ul>
                            <li><p>today</p></li>
                            <li><p>week</p></li>
                        </ul>
                    </div>
                </div>
                <div className="summary-deashbord">
                    <div className="totl-lead">
                        <div className="lead-number">
                            <p className='lead-data'>10</p>
                            <p>Total lead(s)</p>
                        </div>
                        <div className="lead-button">
                            <IconButton style={{color:'white'}} aria-label="upload picture" component="label">
                                 <ArrowForwardIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="totl-lead appoin-color">
                        <div className="lead-number">
                            <p className='lead-data'>5</p>
                            <p>Appintment(s) Fixed</p>
                        </div>
                        <div className="lead-button">
                            <IconButton style={{color:'white'}} aria-label="upload picture" component="label">
                                 <ArrowForwardIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary