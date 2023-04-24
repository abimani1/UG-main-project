import React, { useEffect, useState } from 'react'
import '../style/vendorLog.css'
import { Link, useNavigate } from 'react-router-dom'
import { vendorSignin, vendorSignup } from '../../server/api'
// import { clientData } from '../../server/api'
const VendorLogin = () => {
  const navgation=useNavigate()

  const data=localStorage.getItem("clientData")
  const[client,setClient]=useState(JSON.parse(data))
  const [signin,setSignin]=useState(client.vendor ? true : false )
   
  //get data from input
  const[vendor,setVendor]=useState({
    _id:client._id,
    vendorName:client.clientName,
    categoriesService:"",
    moblieNumber:client.phoneNumber,
    city:"",
    email:client.email
})

let cheackVendor=client.vendor
if(cheackVendor==='true'){
  setSignin(true)
}

//get the data 
let name, value;
const handlingOnChange=(event)=>{
  // console.log(e);
  name=event.target.name;
  value=event.target.value;
  event.preventDefault()
  setVendor({...vendor,[name]:value})
  console.log(vendor);
}

//signup
const onSubmit=async()=>{
  const respons= await vendorSignup(vendor)
  if(respons){
    localStorage.setItem('vendorData',JSON.stringify(respons.data))
    navgation("/vendor/home")
  }
}

//Signin
const onSignin=async()=>{
  const respons=await vendorSignin(vendor)
  if(respons){
    localStorage.setItem('vendorData',JSON.stringify(respons.data))
    navgation("/vendor/home")
  }
}
  
  return (
    <div className="continer">
      <div className="row">
        <div className="vendor-log-title">
          <div className="vendor-log">
            <p>My<b>Quote's</b></p>
          </div>
        </div>
        <div className="vendor-log-card">
          <div className="vendor-log-body">
            <div className="vendor-innerbody">
              <div className="ventor-log-text">
                <div className="log-text-top">
                  <p>Attract new customer on MyQuot's</p>
                </div>
                <div className="log-text-down">
                  <p>Connect with targeted customers for greater business coversion</p>
                </div>
              </div>

              <div className="vendor-log-form">
                <div className="vendor-form">
                 <form >
                    <div className="vendor-form">
                      <div className="form-vendor-body">
                        <div className="vendor-form-border">
                          <div className="vendor-form-title">
                            <label>Build a professional profile</label>
                          </div>
                          { !signin ?
                          <div className="form-vendor-innerbodys">
                            <div className="vendor-service">
                              <div className="vendor-form-lable">
                                <label>What service do you provide</label>
                              </div>
                              <div className="vendor-form-input">
                              <select name="categoriesService" value={vendor.categoriesService} onChange={ (e)=>handlingOnChange(e)}>
                              {services.map((item, index) => (
                                <option value={item.value} key={index}>
                                  {item.name}
                                </option>
                                ))}
                              </select>
                              </div>
                            </div>
                            <div className="vendor-moblieNumber">
                              <div className="vendor-form-lable">
                                <label>moblie</label>
                              </div>
                              <div className="vendor-form-input">
                                <input type="number" name="moblieNumber" value={client.phoneNumber} readOnly placeholder='Enter the moblie number' />
                              </div>
                            </div>
                            <div className="vendor-city">
                              <div className="vendor-form-lable">
                                <label>city</label>
                              </div>
                              <div className="vendor-form-input">
                                <input type="text" name='city' value={vendor.city} onChange={ (e)=>handlingOnChange(e)} placeholder='Enter the City' />
                              </div>
                            </div>
                            <div className="vendor-button">
                              <input type="button" onClick={onSubmit} value="submit" />
                            </div>
                          </div>
                          :
                          <div className="form-vendor-innerbodys">
                            <div className="vendor-moblieNumber">
                              <div className="vendor-form-lable">
                                <label>moblie</label>
                              </div>
                              <div className="vendor-form-input">
                                <input type="number" name="moblieNumber" value={vendor.moblieNumber} readOnly placeholder='Enter the moblie number' />
                              </div>
                            </div>
                            <div className="vendor-button">
                              <input type="button" onClick={onSignin} value="Signin" />
                            </div>
                          </div>
                          }
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
    </div>
  )
}

export default VendorLogin

const services = [
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