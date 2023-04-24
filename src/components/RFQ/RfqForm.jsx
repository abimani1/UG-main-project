import React, {useEffect, useState} from "react";
import "../style/rfq.css";
// import axios from 'axios'
import {addRfq} from "../../server/api";
import { useLocation } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";
// import CURDpopup from '../Popup/CURDpopup'

const RfqForm = () => {
  const[Data,setData]=useState([])
  
  useEffect(()=>{
    // userData()
    const CliData=localStorage.getItem("clientData");
    if(CliData){
      setData(JSON.parse(CliData))
      console.log(Data);
    }
  },[])
  let {name,moblie,email}=Data
  
  const initialValue = {
    service: "",
    amount: "",
    currency: "",
    description: "",
    clientName:Data.name,
    email:email,
    moblieNumber:moblie,
    status: "Pending",
    color: "blue",
  };
  const [user, setUser] = useState(initialValue);
  const {
    service,
    amount,
    currency,
    description,
    // clientName,
    // moblieNumber,
  } = user;

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const addUserDetails = async () => {
    const rfqData={user,Data}
    await addRfq(rfqData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        alert('RFQ not sent')
      });
      alert('post the RFQ')
    console.log(user)
  };

  return (
    <div className="continer">
      <HomeNavbar/>
      <div className="continer_box">
        <div className="row">
          <div className="rfq-title">
            <div className="rfq-title-name">
              <h2>Request for Quotation {name}{Data.name}</h2>
            </div>
          </div>
          <div className="From_box">
            <div className="from_title">
              <h3>Post your Request</h3>
            </div>
            <form>
              <div className="from_box_border">
                <div className="box">
                  <div className="form_box">
                    <div className="services_selecter">
                      <section className="services">
                        <label> Select the services</label>
                        <select
                          name="service"
                          value={service}
                          onChange={(e) => onValueChange(e)}>
                          {services.map((item, index) => (
                            <option value={item.value} key={index}>
                              {item.name}
                            </option>
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
                          <select
                            name="amount"
                            value={amount}
                            onChange={(e) => onValueChange(e)}>
                            {pricesRang.map((item, index) => (
                              <option value={item.value} key={index}>
                                {item.range}
                              </option>
                            ))}
                          </select>
                        </section>

                        <section>
                          <select
                            name="currency"
                            value={currency}
                            onChange={(e) => onValueChange(e)}>
                            {currencys.map((item, index) => (
                              <option value={item.value} key={index}>
                                {item.currencyName}
                              </option>
                            ))}
                          </select>
                        </section>
                      </div>
                    </div>
                    <div>
                      <section>
                        <label>Description</label>
                        <textarea
                          name="description"
                          value={description}
                          id="description"
                          cols="40"
                          rows="10"
                          onChange={(e) => onValueChange(e)}
                          placeholder="description..."></textarea>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rfq-button">
                <input
                  type="button"
                  value="Send Resquest"
                  onClick={addUserDetails}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RfqForm;

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

const pricesRang = [
  {
    range: "<1000",
    value: "<1000",
  },
  {
    range: "1000-5000",
    value: "1000-5000",
  },
  {
    range: "10000-50000",
    value: "10000-50000",
  },
  {
    range: ">50000",
  },
];

const currencys = [
  {
    currencyName: "USD",
    value: "USD",
  },
  {
    currencyName: "IND",
    value: "IND",
  },
  {
    currencyName: "ALL",
    value: "ALL",
  },
];
