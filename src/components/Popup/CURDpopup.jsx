import React, { useEffect, useState } from 'react'
import{getOneRfq,updateRfq} from '../../server/api'
import { useParams } from 'react-router-dom';

const CURDpopup = () => {

  const initialValue = {
    servies:"",
    amount:"",
    currency:"",
    description:"",
    clientName:"",
    email:"",
    moblieNumber:""
}
const { id } = useParams();
  const [user, setUser] = useState(initialValue);
    const { service,amount,currency,description,clientName,email,moblieNumber} = user;
  

const onValueChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value})
}



const loadUserDetails = async() => {
  const response = await getOneRfq(id);
  setUser(response.data);
}
useEffect(() => {
  loadUserDetails();
},[])

const updateData=async()=>{
  console.log(user);
  await updateRfq(id,user);
  // console.log(user);
  alert("Update Succesfully")
}

const updateColour=async()=>{
  let chang={color:'red'}
  await updateRfq(id,chang);
}

const updateStatus=async()=>{
  let chang={status:'Rejected'}
  await updateRfq(id,chang);
  updateColour()
  alert("Closed")
}



  return (
    <div className='continer'>
      <div className='continer_box'>
        <div className='row'>
          <div className='title'>
            <h2>Editing Request for Quotation</h2>
          </div>
          <div className='From_box'>
            <div className="from_title">
              <h3>Post your Request</h3>
            </div>
            <form >
              <div className='from_box_border'>
                <div className='box'>
                  <div className="form_box">
                    <div className="services_selecter">
                      <section className='services'>
                        <label> Select the services</label>
                        <select name='service' value={service}  onChange={(e) => onValueChange(e)}>
                          
                         {serviess.map((item,index)=>(
                          <option value={item.value} key={index}>{item.name}</option>
                            ))}
                        </select>
                      </section>
                    </div>
                        
                    <div className="buget">
                     <section>
                       <label> Select your budget range</label>
                      </section>
                      <div className="inner_section">
                        <section>
                          <select name='amount' value={amount} onChange={(e) => onValueChange(e)}>
                          
                          { pricesRang.map((item,index)=>(
                            <option value={item.value} key={index}>{item.range}</option>
                          ))}
                          </select>
                        </section>

                        <section>
                          <select name='currency'value={currency} onChange={(e) => onValueChange(e)}>
                            {currencys.map((item,index)=>(
                            <option value={item.value} key={index} >{item.currencyName}</option>
                            ))}
                          </select>
                        </section>
                      </div>
                    </div>
                    <div>
                      <section>
                        <label>Description</label>
                        <textarea name="description" value={description} id="description" cols="40" rows="10" onChange={(e) => onValueChange(e)}  placeholder='description...'></textarea>
                      </section>
                    </div>
                   <div className="customer_data">
                    <section>
                      <label>Client Name</label>
                      <input type="text" name="clientName" value={clientName} onChange={(e) => onValueChange(e)} placeholder="Enthe the Name" />
                   </section>
          
                  <section>
                   <label>Email</label>
                   <input type="email" name="email" value={email} onChange={(e) => onValueChange(e)} placeholder="Enter the Email" />
                  </section>
      
                  <section>
                    <label>Moblie Number</label>
                    <input type="number" name="moblieNumber" value={moblieNumber} onChange={(e) => onValueChange(e)} placeholder="Enter the Moblie Number"/>
                  </section>
                 </div>
                </div>
               </div>
              </div>
             <div className="button_continer">
              <div className="button">
                <input type="button" className="update" onClick={updateData} value='Updata'  />
              </div>
              <div className="button">
                <input type="button" className="close" onClick={updateStatus} value='Close'  />
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CURDpopup

const serviess = [
  {
    name: "",
    value: "",
  },
  {
    name: "Ac Service",
    value: "Ac Servies",
  },
  {
    name: "Car service",
    value: "Car service",
  },
  {
    name: "Compressor service",
    value: "Compressor service",
  },
  {
    name: "CCTV Service",
    value: "CCTV Service",
  },
  {
    name: "Clothing outlet",
    value: "Clothing outlet",
  },
];

const pricesRang=[
  {
    range:"<1000",
    value:"<1000"
  },
  {
    range:"1000-5000",
    value:"1000-5000"
  },
  {
    range:"10000-50000",
    value:"10000-50000"
  },
  {
    range:">50000"
  }
]

const currencys=[
  {
    currencyName:"USD",
    value:"USD"
  },
  {
    currencyName:"IND",
    value:"IND"
  },
  {
    currencyName:"ALL",
    value:"ALL"
  }
]