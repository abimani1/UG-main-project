import React, { useEffect, useState } from 'react'
import '../style/rfqViwer.css'
import{clientData, getRfq} from '../../server/api'
import{Link, useLocation} from 'react-router-dom'

const ViewRfq = () => {
const [users, setUsers] = useState([]);
const data=localStorage.getItem("clientData")
const[userData,setUserData]=useState(JSON.parse(data))
console.log(userData.email);

const getAllUsers = async () => {
  let emails={email:userData.email}
  let response = await getRfq(emails);
  setUsers(response.data);
}
  
  useEffect(()=>{
    getAllUsers();
  },[])






  // useEffect(()=>{
  //   const felchRfq= async()=>{
  //     const response= await axios.get('http://localhost:4000/api/user/viewRfq')
  //     console.log(response.data);
  //     setRfqdata(response.data);
  //     setModeldata(response.data)
  //   }


  //   felchRfq();
  // },[])

  return (
    <div>
      <div className="contioner">
        <div className="row">
          <div className="rfq-post-itle">
            <div className="rfq-post-title-name">
              <p>Post an RFQ</p>
            </div>
          </div>
          <div className="body-view-quot">
          {users.map((item,index)=>(
            <div className="card_outer_body" key={index}>
              <div className="card_inner_body">
                <div className="card_row">
                  <div className="card_item">
                    <div className="servies_name">
                    <div className="servies_iden">
                      <label>Service:</label>
                    </div>
                    <div className="servies">
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

                  <div className="controller_view_box">
                    <div className="sttus">
                      <p style={{color:item.color}}>{item.status}</p>
                    </div>

                    <div className="controller_button">
                      <button type='button'><Link to={`/client/rfq/update/${item._id}` } target="_blank" className='link_button'>View this RFQ</Link></button>
                    </div>
                    {/* {modalOpen && <CURDpopup setOpenModal={setModalOpen} />} */}
                  </div>
                </div>
              </div>
          </div>
          ))}
        </div>
        </div>
        {/* {modeldata.id} */}
      </div>
    </div>
  )
}

export default ViewRfq