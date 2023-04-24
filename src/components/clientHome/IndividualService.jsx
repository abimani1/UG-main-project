import React, { useState } from 'react'
import HomeNavbar from '../Navbar/HomeNavbar'
import {useFormik} from 'formik'
import '../style/individual.css'
import img from '../../image/1.jpg' 
import ErrorIcon from '@mui/icons-material/Error';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {Check} from "@mui/icons-material"
import {servicesSchema} from '../clientHome/serviceSchema'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import { Alert, Button, Snackbar } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';


const IndividualService = () => {
  const locationss=useLocation()
  const{serviceName}=locationss.state
  const initialValues={
    serviceRequird:serviceName,
    name:"",
    email:"",
    moblie:"",
    description:"",
    location:""
  }
  const [openerror, setOpenError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [mainOpen, setMainOpen] = useState(false);
  const [keyID,setKeyID]=useState('');

  const handleManiOpen = (id) => {
    setMainOpen(true)
    setKeyID(id)
    console.log(keyID);
  };
  const handleMainClose = () => setMainOpen(false);

  const handleError=()=>{
    setOpenError(true)
  }

  const handlelose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
    setOpenError(false);
  };

  const handleClickOpen = () => {
    handleError()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
    validationSchema:servicesSchema,
    onSubmit:(values)=>{
      handleClickOpen()
      
      console.log(values);
    }
  })

  const handlepost=()=>{
    // initialValues=[""]
    setOpen(false);
  }
  return (
    <div className="continer">
      <div className="row">
        <div className="navbar">
          <HomeNavbar/>
        </div>
        <div className="individualService-main-body">
          <div className="individual-Service-form-box">
            <div className="individual-Service-form">
              <div className="individual-Service-form-border">
                <div className="individual-Service-title">
                  <p>{serviceName}</p>
                </div>
                <div className="individual-Service-form-innerbody">
                  <form onSubmit={handleSubmit}>
                    <div className="main-form-individual-service">
                      <div className="individual-requier">
                        <label htmlFor="serviceRequird">Require Service</label>
                        <input type="text" name="serviceRequird" value={serviceName}  readOnly/>
                      </div>
                      <div className="individual-requier">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} id="name" />
                        {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>)
                        :null}
                      </div>
                      <div className="individual-requier">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" />
                        {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>)
                        :null}
                      </div>
                      <div className="individual-requier">
                        <label htmlFor="moblie">Moblie Number</label>
                        <input type="tel" name="moblie" value={values.moblie} onChange={handleChange} onBlur={handleBlur} id="moblie" />
                        {errors.moblie && touched.moblie ? (<p className='form-error'>{errors.moblie}</p>)
                        :null}
                      </div>
                      <div className="individual-requier">
                        <label htmlFor="description">Description</label>
                        {/* <input type="tel" name="moblie"  /> */}
                        <textarea name="description" id="description" cols="55" rows="10" value={values.description} onChange={handleChange} onBlur={handleBlur} ></textarea>
                        {errors.description && touched.description ? (<p className='form-error'>{errors.description}</p>)
                        :null}
                      </div>
                      <div className="individual-requier">
                        <label htmlFor="location">Location</label>
                        <select name="location" value={values.location} onChange={handleChange} onBlur={handleBlur} id="location">
                        {errors.location && touched.location ? (<p className='form-error'>{errors.location}</p>)
                        :null}
                          {location.map((loc,index)=>(<option  value={loc.value} key={index}>
                            {loc.place}
                          </option>
                          ))}
                        </select>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>OTP Verification</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              <p className='otp-lavle'>Enter the OTP</p>
                            </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Email"
                              type="email"
                              value={values.email}
                              fullWidth
                              variant="standard"
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Enter the OTP"
                              type="number"
                              
                              fullWidth
                              variant="standard"
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleError}>Submit</Button>
                          </DialogActions>
                        </Dialog>

                        <Snackbar open={openerror} autoHideDuration={3000} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                          <Alert icon={<ErrorIcon sx={{fontSize: "40px",color:'red'}} />} onClose={handlelose} severity='warning' sx={{width: "100%", fontSize:"25px"}}>Permission Decline</Alert>
                        </Snackbar>
                        {/* <Snackbar open={openerror} autoHideDuration={3000} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                          <Alert icon={<Check sx={{fontSize: "40px",color:'green'}} />} onClose={handlelose} severity='warning' sx={{width: "100%", fontSize:"25px"}}>SEND REQUEST</Alert>
                        </Snackbar> */}
                      </div>
                      <div className="individual-requier-button">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="individual-Service-post-box">
            <div className="title-individual-nav-bar">
              <div className='individual-nav'>
                <p>{serviceName}</p>
              </div>
            </div>
            {compnyData.map((data,index)=>(
            <div className="individual-service-card" key={index}>
              <div className="individual-service-card-border">
                <div className="individual-service-card-body">
                  <div className="individual-service-card-body-profile">
                    <div className="individual-service-card-1">
                      <div className="individual-service-profile-image">
                        <img src={img} alt="profile" />
                      </div>
                      <div className="profile-data-individual-service">
                        <div className="compny-name-individual-service">
                          <p>{data.company}</p>
                        </div>
                        <div className="compny-address-individual-service">
                          <p>{data.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="compny-number-individual-service">
                      <p><LocalPhoneIcon color="primary" sx={{fontSize:'40px',marginRight:'10px',marginLeft:'20px'}}/> {data.moblieNumber}</p>
                    </div>
                    <div className="compny-description-individual-service">
                      <p>{data.des}</p>
                    </div>
                    <div className="compny-button-individual-service">
                      <button onClick={()=>handleManiOpen(data.id)}>Enquire Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      {compnyData.map(data=>{
          if(data.id === keyID){
            return(
      <Modal
        open={mainOpen}
        onClose={handleMainClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        key={data.id}
      >
        
        <div className="modle-box">
          <div className="modle-box-title">
            <p>My<b>Quote</b></p> 
          </div>
          <div className="modle-box-2">
          <div className="individual-service-card-2">
          <div className="individual-service-profile-image">
            <img src={img} alt="profile" />
          </div>
          <div className="profile-data-individual-service">
            <div className="compny-name-individual-service">
              <p>{data.company}</p>
            </div>
            <div className="compny-address-individual-service">
              <p>{data.address}</p>
            </div>
          </div>
          </div>
          </div>
          <div className="modle-information-data">
            <div className="modle-information-data-title">
              <p>{data.des}</p>
            </div>
            <div className="modle-information-data-moblie-box">
              <TextField id="outlined-basic" label="Enter Your Moblie Number" sx={{width:'600px',height:'60px'}} variant="outlined" required  />
            </div>
            <div className="modle-information-data-name-box">
              <TextField id="outlined-basic" label="Enter Your Name" sx={{width:'600px',height:'60px'}} variant="outlined" required  />
            </div>
            <div className="modle-information-data-button-box">
              <button onClick={handleError}>Send Enquiry</button>
            </div>
          </div>
        </div> 
      </Modal>
              )}
            })}
    </div>
  )
}

export default IndividualService

const location=[{
  place:"Bengaluru",
  value:"Bengaluru"
},
{
  place:"Chennai",
  value:"Chennai"
},
{
  place:"Erode",
  value:"Erode"
}

]

const compnyData=[
  {
    id:'1',
    company:"Global Health Care Services",
    address:"Seshadripuram, Bangalore, 560020",
    moblieNumber:"8043691903",
    des:"Domestic Help Services, Patient care services"
  },
  {
    id:'2',
    company:"Ank Senior Citizen & Healthcare Home",
    address:"Yelahanka New Town, Bangalore, 560064",
    moblieNumber:"8048104897",
    des:"Domestic Help Services, Driver services..."
  },
  {
    id:'3',
    company:"Sri Anu Furniture Private Limited",
    address:"Whitefield, Bangalore, 560066",
    moblieNumber:"9021109376",
    des:"Furniture Dealers, Mattress & Beddings, Purchase new furniture"
  },
  {
    id:'4',
    company:"We’R Furniture Outlet",
    address:"Mangammanapalya, Bangalore, 560068",
    moblieNumber:"9021108635",
    des:"Furniture Dealers, Purchase new furniture"
  },
  {
    id:'5',
    company:"Haryana Hand looms",
    address:"Vijayanagar, Bangalore, 560026",
    moblieNumber:"8035426492",
    des:"Furniture Dealers, Carpet dealers, Mattress..."
  },
  {
    id:'6',
    company:"Classic Care Packers & Movers",
    address:"HSR Layout 7th Sector, Bangalore, 560034",
    moblieNumber:"80-48042888",
    des:"Packers and Movers, Outside city..."
  },
  {
    id:'7',
    company:"Multi Modal Shipping Services",
    address:"Royapuram, Chennai, 600013",
    moblieNumber:"8048127990",
    des:"Packers and Movers, International, Outside..."
  },
  {
    id:'8',
    company:"Rigvesoft Pvt. Ltd.",
    address:"Are Kere, Bangalore, 560076",
    moblieNumber:"8048107665",
    des:"Web Designers, Web design & developm"
  },
  {
    id:'9',
    company:"Fugensys Technologies",
    address:"Koramangala, Bangalore, 560011",
    moblieNumber:"8035404897",
    des:"Web Designers,Software Development Services,Web design & development,Mobile app development services..."
  },
  {
    id:'10',
    company:"SVP Associates",
    address:"Rajarajeshwari Nagar, Bangalore, 560098",
    moblieNumber:"8048131735",
    des:"Generator Dealers, Purchase generator..."
  },
  
]