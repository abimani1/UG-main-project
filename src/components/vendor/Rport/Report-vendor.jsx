import React from 'react'

const ReportVendor = (props) => {
  return (
    <div className="contioner">
        <div className="row">
            <div className="dashbord-body">
              <div className="dashbord-box">
                <div className="dashbord-box-body">
                  <div className="dashbord-box-data">
                    <div className="service-data-dashbord">
                      <div className="dashbord-service-name">
                        <p>Ac Service</p>
                      </div>
                      <div className="vendor-dashbord-service-data">
                        <div className="vendor-dashbord-labe-box">
                          <p>Client</p>
                        </div>
                        <div className="dashbord-vendor-name">
                          <p>{props.clientName}</p>
                      </div>
                      </div>
                    </div>
                    <div className="dashbord-status-box">
                      <div className="dashbord-date-box">
                        <label >{props.date}</label>
                      </div>
                      <div className="dashbord-status">
                        <p style={{color:props.color}}>{props.status}</p>
                      </div>
                      <div className="dashbord-action-report-button">
                        <button>Get Report</button>
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

export default ReportVendor