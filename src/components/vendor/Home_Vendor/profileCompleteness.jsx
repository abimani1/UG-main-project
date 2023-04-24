import { Button, IconButton, LinearProgress } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProfileCompleteness = () => {
  return (
    <div className="continer">
        <div className="row">
            <div className="profile-box">
                <div className="profile-box-1">
                    <div className="profile-title">
                        <p>profile Completeness</p>
                    </div>

                    <div className="progress">
                        <div className="progress-number">
                            <p>40%  <span>Better</span></p>
                        </div>

                        <div className="progress-bar">
                            <LinearProgress variant="determinate" value={40} style={{width:'400px',height:'10px',borderRadius:'5px',marginBottom:'10px'}} />
                            <p>Out of 100%</p>
                        </div>

                        <div className="progress-button">
                            <IconButton style={{color:'black'}} aria-label="upload picture" component="label">
                                <ArrowForwardIcon style={{fontSize:'40px'}} />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="improv-box">
                    <div className="improv-innerbox">
                        <div className="improve-title">
                            <p>improve Score</p>
                        </div>
                        <div className="improve-data">
                            <div className="improve-sub-title">
                                <p>Add ID proof</p>
                            </div>
                            <div className="improve-content">
                                <p>Add an ID proof to enrich your profile by 10%!</p>
                            </div>
                        </div>
                        <div className="improve-button">
                            <Button variant="outlined" endIcon={<ArrowForwardIcon />} style={{border:'none',fontSize:'20px'}}>
                                ADD NOW
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCompleteness