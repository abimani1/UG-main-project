import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { viewVendorRfq } from '../../../server/api';
// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const Vendor_rfq = () => {
        const [users, setUsers] = useState([]);
        const data=localStorage.getItem("vendorData")
        const [vendorData,setVendorData]=useState(JSON.parse(data))
      
        const getAllUsers = async () => {
          let service={service:vendorData.categoriesService}
          console.log(service);
          const response = await viewVendorRfq(service);
          setUsers(response.data);
        }

        useEffect(() => {
          getAllUsers();
        }, []);
    
  return (
    <div>
      <div className="contioner">
        <div className="row">
          <div className="title-qut-rfq">
            <p>Client RFQ REQUEST</p>
          </div>
          {users.map((item,index)=>(
            <div className="card_outer_body" key={index}>
            <div className="card_inner_body">
              <div className="card_row">
                <div className="card_item">
                  <div className="servies_name">
                   <div className="servies_iden">
                    <label>Service:</label>
                   </div>
                   <div className="service">
                    <label>{item.service}</label>
                   </div>
                  </div>
                  <div className="client_name">
                    <div className="client_lable">
                      <label>Client Name:</label>
                    </div>
                    <div className="client">
                      <label>{item.clientName}</label>
                    </div>
                  </div>
                  <div className="description_box">
                    <div className="description_lable">
                      <label>Description:</label>
                    </div>
                    <div className="description_data">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="price">
                    <div className="price_lable">
                      <label>Amount</label>
                    </div>
                    <div className="price_amount">
                    <p>{item.amount} <b>{item.currency}</b></p>
                    </div>
                  </div>
                </div>

                <div className="controller_view_box_vendor">
                  <div className="controller_button_vendor">
                    <button type='button'><Link to="/vendor/postQueot" state={{rfqID:item._id,clientName:item.clientName,clientEmail:item.email,clientMoblie:item.phoneNumber}} className="link_button" >quote</Link></button>
                  </div>
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

export default Vendor_rfq