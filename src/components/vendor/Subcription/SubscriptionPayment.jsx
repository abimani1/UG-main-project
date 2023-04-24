import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {useFormik} from 'formik'
import { paymentSchema } from './Sub-data'
import {Check} from "@mui/icons-material"
import ErrorIcon from '@mui/icons-material/Error';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, TextField } from '@mui/material'

const SubscriptionPayment = () => {
    const location=useLocation()
    const{amount,plan,rfq,quot,post,exdate}=location.state
    const [open, setOpen] = React.useState(true);
    const [openerror, setOpenError] = useState(false);
    const initialValues={
        email:"",
        cardInformation:"",
        month:"",
        cvv:"",
        country:""
      }

      const handleClose = () => {
        setOpen(false);
      };

      const handleError=()=>{
        setOpenError(true)
      }

      const handleClickOpen = () => {
        // handleError()
        setOpen(true);
      };

      const handlelose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false)
        setOpenError(false);
      };

      const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema:paymentSchema,
        onSubmit:(values)=>{
            handleError()
          
          console.log(values);
        }
      })
  
  return (
    <div className="contioner-1">
        <div className="row">
            <div className="subscription-title">
                <p>MY<b>QUOTE'S</b></p>
            </div>
            <div className="subscription-box">
                <div className="subscription-bio">
                    <div className="subscription-box-data">
                        <div className="subscription-plan">
                            <p>{plan}</p>
                        </div>
                        <div className="subscription-amount">
                            <p>{amount} $</p>
                        </div>
                    </div>
                    <div className="subscription-plan-offer">
                        <div className="plan-data-lable">
                            <ul>
                                <li>RFQ</li>
                                <li>Quotation</li>
                                <li>Post</li>
                                <li>Validity</li>
                            </ul>
                        </div>
                        <div className="plan-data-input">
                            <p>{rfq}</p>
                            <p>{quot}</p>
                            <p>{post}</p>
                            <p>{exdate}</p>
                        </div>
                    </div>
                </div>
                <div className="payment-sub-box">
                <div className="payment-box-continer">
                    <div className="title-payment">
                        <p><b>Pay with card</b></p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="payment-innerbody">
                            <div className="payment-email-box">
                                <div className="payment-lable">
                                    <p>Email</p>
                                </div>
                                <div className="payment-email-inpox">
                                    <input type="email" name="email" placeholder='Enter the email' value={values.email} onChange={handleChange} onBlur={handleBlur} required/>
                                    {errors.email && touched.email ? (<p className='form-errors'>{errors.email}</p>)
                                    :null}
                                </div>
                            </div>
                            <div className="payment-card-info-box">
                                <div className="payment-lable">
                                    <p>Card information</p>
                                </div>
                                <div className="payment-card-info-input">
                                    <input type="number" name="cardInformation" placeholder='Enter the card number' value={values.cardInformation} onChange={handleChange} onBlur={handleBlur}/>
                                    {errors.cardInformation && touched.cardInformation ? (<p className='form-errors'>{errors.cardInformation}</p>)
                                    :null}
                                </div>
                                <div className="payment-card-inof-cy">
                                    <div className="payment-card-year">
                                        <div className="payment-year">
                                            <div className="payment-lable">
                                                <p>MM/YY</p>
                                            </div>
                                            <div className="payment-year-box">
                                            <input type="text" name="month" placeholder='MM/YY' id='year' value={values.month} onChange={handleChange} onBlur={handleBlur} />
                                            {errors.month && touched.month ? (<p className='form-errors'>{errors.month}</p>)
                                            :null}
                                            </div>
                                        </div>
                                        <div className="payment-cvv">
                                            <div className="payment-lable">
                                                <p>CVV</p>
                                            </div>
                                            <div className="payment-cvv-box">
                                                <input type="text" name="cvv" placeholder='CVV' id='cvv' value={values.cvv} onChange={handleChange} onBlur={handleBlur}/>
                                                {errors.cvv && touched.cvv ? (<p className='form-errors'>{errors.cvv}</p>)
                                                :null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment-card-country-selecter">
                                    <div className="payment-lable">
                                        <p>Country or region</p>
                                    </div>
                                    <select name="conutry" value={values.country} onChange={handleChange} onBlur={handleBlur}>
                                        {region.map((place,index)=>(
                                            <option value={place.value} key={index}>{place.name}</option>
                                        ))}
                                    </select>
                                    {errors.country && touched.country ? (<p className='form-errors'>{errors.country}</p>)
                                    :null}
                                </div>
                            </div>
                            <div className="payment-button">
                                <button type="submit" onClick={handleError}>Pay $ {amount}</button>
                             </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>OTP Verification</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              <p className='otp-lavles'>Enter the OTP</p>
                            </DialogContentText>
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
                          <Alert icon={<Check sx={{fontSize: "40px",color:'green'}} />} onClose={handlelose} severity='warning' sx={{width: "100%", fontSize:"25px"}}>Successfully Upgrade</Alert>
                        </Snackbar>

                        {/* Permission Decline */}
        </div>
    </div>
  )
}

export default SubscriptionPayment

const region=[
    {
        name:'India',
        value:'India'
    },
    {
        name:'America',
        value:'America'
    },
    {
        name:'Europe',
        value:'Europe'
    },
    {
        name:'Australia',
        value:'Australia'
    },

]