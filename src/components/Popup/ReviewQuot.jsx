import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { VendorQuotEdit, postQuot } from '../../server/api';
import { Alert, Snackbar } from '@mui/material';
import { Check } from '@mui/icons-material';

const ReviewQuot = () => {

  // const getOneQUT=async()=>{
  //  const respons= await getVendorQuotId(id)
  //  const result = respons.data
  //  const data= await fetch(result);
  //  setUser(data)
  //  console.log(result);
  //  console.log(user); 
  // }

  // useEffect(() => {
  //   editDetails();
  // },[])
  // const data=localStorage.getItem("vendorData")
  // const [vendorData,setVendorData]=useState(JSON.parse(data))
  // const datac=localStorage.getItem("clientData")
  // const [clientData,setClientData]=useState(JSON.parse(datac))
  const[controller,setController]=useState(false)
// console.log(rfqID);
// console.log(clientName);
  
  const initialValue = {
    service:"vendorData.categoriesService",
    vendorName:"vendorData.vendorName",
    clientName:"",
    clientEmail:"clientEmail",
    clientMoblie:"clientMoblie",
    email:"",
    amount:"",
    Total_Quantity:"",
    clientRfqID:"rfqID"
  };
  const [user, setUser] = useState(initialValue);
  // const {
  //   vendorName
  // } = user;
  const [open, setOpen] = useState(false);
 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
    // setOpenError(false);
  };
  const handleAccpet = (id,rfqID) => {
    setOpen(true)
  };
  
  const calculate=()=>{
    
    var table = document.getElementById("table"), sumVal = 0;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML); 
            }
           
            document.getElementById("amount").innerHTML = "Total Amount : Rs "+sumVal+"/-";
           

            var quantity_no=0
            for(var a = 1; a < table.rows.length; a++)
            {
              quantity_no = quantity_no + parseInt(table.rows[a].cells[1].innerHTML);
            }
     
            document.getElementById("quantity_no").innerHTML =  "Total Quantity: "+quantity_no;

            setUser({...user,"amount":sumVal,"Total_Quantity":quantity_no})
        }

      

  const[itemSet,setItemSet]=useState([])
  const [inputData,setInputData]=useState({
    item:"",
    quantity:"",
    cost:""
  }
  )    


  const onChanheHandler=(e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
  }

  // let{item,quantity,cost}=inputData
  
  const add=()=>{
    setController(true)
    if(!inputData){

    }
    else{
      setItemSet([...itemSet,inputData])
      setInputData({item:"",quantity:"",cost:""})
      console.log(itemSet);
    }
  }


 



  
  return (
    <div className="continer">
      <div className="row">
        <div className="q-title">
          <h2>Quotation</h2>
        </div>
        <div className="box">
          <div className="box-continer">
            <div className="box-border">
              <div className="box-item">
                <div className="form">
                  <form>
                    <div className="from-box">
                      <div className="service-name">
                        <div className="s-name-lable">
                        <label><p>Service:</p></label>
                        </div>
                        <div className="s-name-data">
                          <label>Car Service</label>
                        </div>
                      </div>

                      <div className="vendor-name">
                        <div className="v-name">
                          <label><p>Vendor Name:</p></label>
                        </div>
                        <div className="v-name-input">
                          <label>Kamalesh</label>
                        </div>
                      </div>

                      <div className="quotion-item-add-box">
                        <div className="item-add-box">

                          <div className="q-item">
                            <div className="q-item-lable">
                              <label><p>item</p></label>
                            </div>
                            <div className="q-item-input">
                              <input type="text" name="item" value={inputData.item}   onChange={onChanheHandler} placeholder="Enter Item Name" />
                            </div>
                          </div>

                          <div className="q-quantity">
                            <div className="q-quantity-lable">
                              <label><p>Quantity</p></label>
                            </div>
                            <div className="q-quantity-input">
                              <input type="number" name="quantity" value={inputData.quantity}  onChange={onChanheHandler} placeholder="Enter the quantity" />
                            </div>
                          </div>
                          
                          <div className="cost">
                            <div className="q-cost-lable">
                              <label htmlFor=""><p>cost</p></label>
                            </div>
                            <div className="q-cost-input">
                              <input type="number" name="cost" value={inputData.cost} onChange={onChanheHandler} placeholder="Enter the cost" />
                            </div>
                          </div>

                          <div className="add-button-box">
                            {/* <input type="button" value="Add" onClick={adding} /> */}
                            <button type='button' onClick={add} >add</button>
                          </div>
                        </div>
                      </div>
                      <div className="table-form">
                      {controller &&
                        <div className="table-data">
                          <table id="table" onClick={calculate}>
                            <thead>
                              <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            {itemSet.map((data,index)=>(
                              <tbody key={index}>
                              <tr>
                                {/* <td></td> */}
                                <td>{data.item}</td>
                                <td>{data.quantity}</td>
                                <td>{data.cost}</td>
                                <td className='edbutton'><button className='edit' type='button'>edit</button><button type='button' className='delect' >delete</button></td>
                                {/* <td></td> */}
                              </tr>
                            </tbody>
                            ))}
                          </table>
                          
                          <div className="reslut_box">
                            <div className="reslut_button">
                              <button type='button' onClick={calculate}>calculate</button>
                            </div>
                            <div className="reslut_data_box">
                              <div className="quty_data">
                                <span id="quantity_no"></span>
                              </div>
                              <div className="amount_data">
                                <span id="amount"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        }
                      </div>
                      
                      <div className="form-button">
                        <div className="form-submit-button">
                          <input type="button" onClick={handleAccpet}  value="Update Quotation" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
          <Alert icon={<Check sx={{fontSize: "40px"}} />} onClose={handleClose} severity='success' sx={{width: "100%", fontSize:"25px"}}> Quotation Update Successfully</Alert>
        </Snackbar>
    </div>
  )
}

export default ReviewQuot