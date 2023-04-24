import React from 'react'
import { Link } from 'react-router-dom'

const PostAds = () => {
  return (
    <div className="continer">
        <div className="row">
            <div className="postAds-box">
                <div className="postAds-border">
                    <div className="postAds-innerbody">
                        <div className="postAds-title">
                            <p>Post Ads / Offer</p>
                        </div>
                        <div className="postAds-content">
                            <p>Promote Your business by posting Ads/Offers on "MY Quot"</p>
                        </div>
                        <div className="postAds-button">
                            <Link to={'/vendor/viewRfq'}><button>Post Ads</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostAds