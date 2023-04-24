import React, { useState } from 'react'

const ReportClient = (props) => {
  let actionbutton=props.button
  console.log(actionbutton);
    const[actionButton,setActionButton]=useState(actionbutton)
    // const actio=()=>{
    //     setActionButton()
    // }
  return (
    <div className="contioner">
        <div className="row">
            <div className="dashbord-body">
              
              <div className="dashbord-box">
                <div className="dashbord-box-body">
                  <div className="dashbord-box-data">
                    <div className="service-data-dashbord">
                      <div className="dashbord-service-name">
                        <p>{props.service}</p>
                      </div>
                      <div className="vendor-dashbord-service-data">
                        <div className="vendor-dashbord-labe-box">
                          <p>vendor</p>
                        </div>
                        <div className="dashbord-vendor-name">
                          <p>{props.vendorName}</p>
                      </div>
                      </div>
                    </div>
                    <div className="dashbord-status-box">
                      <div className="dashbord-date-box">
                        <label>{props.date}</label>
                      </div>
                      <div className="dashbord-status">
                        <p style={{color:props.colour}}>{props.status}</p>
                      </div>
                      <div className="dashbord-action-report-button">
                       {actionButton ? <button>Get Report</button>
                       :
                       ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ReportClient