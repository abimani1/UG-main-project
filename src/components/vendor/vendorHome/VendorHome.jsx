import React from 'react'

import VendorNavbar from '../vendorNavbar/VendorNav'
import Summary from '../Home_Vendor/Summary'
import PostAds from '../Home_Vendor/PostAds'
import ProfileCompleteness from '../Home_Vendor/profileCompleteness'
import UpgragePack from '../Home_Vendor/UpgragePack'

const VendorHome = () => {
  return (
    <div>
      <div>
      <VendorNavbar/>
      </div>
      <div className="continer">
        <div className="row">
          <div className="home-box">
            <div className="home-box1">
              <div className="summary-home">
                <Summary/>
              </div>
              <div className="postUp">
                <div className="PostAds-homw">
                  <PostAds/>
                </div>
                <div className="upgrade">
                  <UpgragePack/>
                </div>
              </div>
            </div>
            <div className="home-box-2">
              
                <ProfileCompleteness/>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default VendorHome