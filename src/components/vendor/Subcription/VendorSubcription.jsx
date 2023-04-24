import React from 'react'
import '../../style/subscriotion.css'
// import SubscriptionPayment from './SubscriptionPayment'
import { Link } from 'react-router-dom'

const VendorSubcreation = () => {
  return (
    <div className="subscription-cards">
      
      {/* basic */}
      <div className="subscriotion-basic-card">
        <div className="subscriotion-card-head">
          <h1>Basic</h1>
          <h3>$20/month</h3>
        </div>
        <div className="subscriotion-card-offer">
          {/* offer lable */}
          <div className="offer-lable">
            <ul>
              <li><p>RFQ</p></li>
              <li><p>Quotation</p></li>
              <li><p>Post</p></li>
              <li><p>Validity</p></li>
            </ul>
          </div>
          {/* offer count */}
          <div className="offer-count">
            <p>10</p>
            <p>15</p>
            <p>20</p>
            <p>1 month</p>
          </div>
        </div>
        <div className="subscriotion-basic-card-button">
        <Link to={'/vendor/subscription/payment'} state={{amount:'20',plan:'basic',rfq:'10',quot:'15',post:'20',exdate:'1 month'}}><button type='button'>Buy</button></Link>
        </div>
      </div>

      {/* pro */}
      <div className="subscriotion-pro-card">
        <div className="subscriotion-card-head">
          <h1>pro</h1>
          <h3>$60/month</h3>
        </div>
        <div className="subscriotion-card-offer">
          {/* offer lable */}
          <div className="offer-lable">
          <ul>
              <li><p>RFQ</p></li>
              <li><p>Quotation</p></li>
              <li><p>Post</p></li>
              <li><p>Validity</p></li>
            </ul>
          </div>
          {/* offer count */}
          <div className="offer-count">
            <p>20</p>
            <p>40</p>
            <p>100</p>
            <p>1 month</p>
          </div>
        </div>
        <div className="subscriotion-pro-card-button">
        <Link to={'/vendor/subscription/payment'} state={{amount:'60',plan:'pro',rfq:'20',quot:'40',post:'100',exdate:'1 month'}}><button type='button'>Buy</button></Link>
        </div>
      </div>

      {/* premium */}
      <div className="subscriotion-premium-card">
        <div className="subscriotion-card-head">
          <h1>premium</h1>
          <h3>$100/month</h3>
        </div>
        <div className="subscriotion-card-offer">
          {/* offer lable */}
          <div className="offer-lable">
          <ul>
              <li><p>RFQ</p></li>
              <li><p>Quotation</p></li>
              <li><p>Post</p></li>
              <li><p>Validity</p></li>
            </ul>
          </div>
          {/* offer count */}
          <div className="offer-count">
            <p>Unlimeted</p>
            <p>Unlimeted</p>
            <p>300</p>
            <p>1 month</p>
          </div>
        </div>
        <div className="subscriotion-premium-card-button">
          <Link to={'/vendor/subscription/payment'} state={{amount:'100',plan:'premium',rfq:'Unlimeted',quot:'Unlimeted',post:'300',exdate:'1 month'}}><button type='button'>Buy</button></Link>
        </div>
      </div>
      {/* <SubscriptionPayment/> */}
    </div>
  )
}

export default VendorSubcreation