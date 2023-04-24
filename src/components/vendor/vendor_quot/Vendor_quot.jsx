import React, {useEffect, useState} from "react";
import {VendorQuot, getVendorQuot} from "../../../server/api";
import "../../style/VendorQuotView.css";
import {Link} from "react-router-dom";
// import {Table} from "@mui/material";

const VendorQuotView = () => {
  const [data, setData] = useState([]);
  const dataUser=localStorage.getItem("vendorData")
  const [vendorData,setVendorData]=useState(JSON.parse(dataUser))
  
  const getQuotVendor = async () => {
    const vendorDa={categoriesService:vendorData.categoriesService,email:vendorData.email}
    let {data} = await VendorQuot(vendorDa);
    setData(data);
    console.log(data);
    // setUser(response.data)
  };
  useEffect(() => {
    getQuotVendor();
  }, []);

  // const onChanheHandler = (e) => {
  //   setInputData({...inputData, [e.target.name]: e.target.value});
  // };

  // const add = () => {
  //   // setController(true)
  //   if (!inputData) {
  //   } else {
  //     setData([...data, inputData]);
  //     setInputData({item: "", quantity: "", cost: ""});
  //     console.log(data);
  //   }
  // };

  // const delect = (id) => {
  //   console.log(id);
  //   const updateItems = data.filter((data) => {
  //     return id === data.id;
  //   });
  //   setData(updateItems);
  // };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="title-qut">
            <label>quotation</label>
          </div>
          <div className="box-qut">
            {data.map((datas, index) => (
              <div className="box-1" key={index}>
                <div className="box-border-qut">
                  <div className="box-body">
                    <div className="innerbox">
                      <div className="service-box">
                        <div className="service-lable">
                          <label>Service</label>
                        </div>
                        <div className="service-data">
                          <label>{datas.service}</label>
                        </div>
                      </div>

                      <div className="Client-box">
                        <div className="Client-lable">
                          <label>Client</label>
                        </div>
                        <div className="client-data">
                          <label>{datas.clientName}</label>
                        </div>
                      </div>

                      <div className="button-box">
                        <div className="view-box">
                          <button><Link  to={`/vendor/view/${datas._id}`}  className="Link">view</Link></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorQuotView;
