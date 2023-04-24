import React, { useEffect, useState } from 'react'
import { getQuot, getVendorQuot, quoteAccpcet } from '../../server/api'
import { useLocation } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../style/ViewQuot.css'
import { Alert, Snackbar } from '@mui/material';
import {Check} from "@mui/icons-material"
import HomeNavbar from '../Navbar/HomeNavbar';

const ViewQuot = () => {
//   const[data,setData]=useState([])


// const getAllUsers = async () => {
//   const emails={email:email}
//    await getQuot(emails).then((res)=>{
//     setData(res)
//    })
   
  // const result = await response.json()
  // setData(getQuot);
  // console.log(id)
//   console.log(email);
//   console.log(data);
// }

//   useEffect(()=>{
//     getAllUsers();
//     // console.log(data);
//   },[])
const data=localStorage.getItem("clientData")
const[userData,setUserData]=useState(JSON.parse(data))
console.log(userData);
const [quotData, setQuotData] = useState([]);
const [open, setOpen] = useState(false);
const [openerror, setOpenError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
    setOpenError(false);
  };
  // console.log(userData.email);
  
const getQuotVendor = async () => {
  const emails={clientEmail:userData.email}
  let data = await getVendorQuot(emails);
  setQuotData(data.data);
  // console.log(data);
  // setUser(response.data)
};
useEffect(() => {
  getQuotVendor();
}, []);

//Accpet
const handleAccpet = (id,rfqID) => {
  const data={id:id,clientRfqID:rfqID,status:"Accpet"}
  quoteAccpcet(data).then((res)=>{
    if(res){
      getQuotVendor();
    }
  })
  setOpen(true)
};

// Reject button event handler
const handleReject = (id,rfqID) => {
  const data={id:id,clientRfqID:rfqID,status:"Rejected"}
  quoteAccpcet(data).then((res)=>{
    if(res){
      getQuotVendor();
    }
  })
  setOpenError(true)
  // console.log('jhu');
}

// const [expanded, setExpanded] = React.useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

  return (
    <div className="continer">
      <div className="row">
        <HomeNavbar/>
      <div className="quot-box-table">
        {quotData.map((data,index)=>(
        <div className="quot-box" key={index}>
          <div className="quot-box-body">
            <div className="quot-box-border">
              <div className="quot-box-innerbody">
                <div className="quot-innerbox-1">
                  <div className="quot-vendor-data">
                    <div className="quot-vendor-lable">
                      <label>service</label>
                    </div>
                    <div className="quot-vendor-name">
                      <label>{data.service}</label>
                    </div>
                  </div>

                  <div className="quot-vendor-services">
                    <div className="quot-vendor-lable">
                      <label>Vendor</label>
                    </div>
                    <div className="quot-vendor-name">
                      <label>{data.vendorName}</label>
                    </div>
                  </div>

                  <div className="quot-vendor-action-button">
                    <div className="vendor-quot-date">
                      <label>{data.date}</label>
                    </div>
                    <div className="quot-accpe-button">
                      <button type='button' onClick={()=>handleAccpet(data._id,data.clientRfqID)}>Accpect</button>
                    </div>
                    <div className="quot-rejected-button">
                      <button onClick={()=>handleReject(data._id,data.clientRfqID)}>Rejected</button>
                    </div>
                  </div>
                </div>

                <div className="quot-innerbox-2">
                  
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0,fontSize:'20px',fontWeight:'bold',color:'blue' }}>
                        View
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="accordion-body">
                        <div className="accordion-innerbody">
                          <div className="accordion-table">
                            <table>
                              <thead>
                                <tr>
                                  <th>Item</th>
                                  <th>Quantity</th>
                                  <th>Cost</th>
                                </tr>
                              </thead>
                              {data.itemSet.map((set,index)=>(
                              <tbody key={index}>
                                <tr>
                                  <td>{set.item}</td>
                                  <td>{set.quantity}</td>
                                  <td>{set.cost}</td>
                                </tr>
                              </tbody>
                              ))}
                            </table>
                          </div>
                          <div className="accordion-value">
                            <div className="table-cost">
                              <label>Total quantiy: {data.Total_Quantity}</label>
                            </div>
                            <div className="table-cost">
                              <label>Totle Amount:Rs:{data.amount}/-</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
        {/* <Snackbar open={open} autoHideDuration={2000}  anchorOrigin={{ vertical:'bottom', horizontal:'center'}} sx={{color:'green',fontSize:'20px'}} TransitionComponent='TransitionDown' message='Accpect the Quote' onClose={handleClose}/> */}
        <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
          <Alert icon={<Check sx={{fontSize: "40px"}} />} onClose={handleClose} severity='success' sx={{width: "100%", fontSize:"25px"}}>Accpect the Quote!</Alert>
        </Snackbar>
        <Snackbar open={openerror} autoHideDuration={3000} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
          <Alert icon={<Check sx={{fontSize: "40px"}} />} onClose={handleClose} severity='warning' sx={{width: "100%", fontSize:"25px"}}>Quotation has been Rejected!</Alert>
        </Snackbar>
        </div>
      </div>
    </div>
  )
}

export default ViewQuot