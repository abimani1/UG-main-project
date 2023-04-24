import React from 'react'
import img1 from '../../../image/1.jpg'
import '../../style/vendorinbox.css'
import {Link} from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { updateRfq } from '../../../server/api';

const VentorInbox = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateColour=async()=>{
    let chang={color:'green'}
    await updateRfq(chang);
  }
  
  const updateStatus=async()=>{
    let chang={status:'Complet'}
    await updateRfq(chang);
    updateColour()
    alert("Closed")
  }
  return (
    <div className="continer">
        <div className="row">
            <div className="vendor-inbox-box">
                <div className="vendor-inbox-box-body">
                  <div className="vendor-inbox-data">
                    <div className="client-inbox-profile-data">
                      <div className="client-image-box">
                        <img src={img1} alt="user" />
                      </div>
                      <div className="client-data-box">
                        <div className="client-inbox-name">
                          <label>Manikandan</label>
                        </div>
                        <div className="client-inbox-service-data">
                          <label>Ac Service</label>
                        </div>
                      </div>
                    </div>
                    <div className="venor-status-box">
                      <label>Progress</label>
                    </div>
                  </div>
                  <div className="vendor-controler-action-button">
                    <button type='button' className='vendor-control-call' onClick={handleClickOpen}>Call</button>
                    <button type='button'className='vendor-control-chart'><Link className='link'>live Chart</Link></button>
                    <button type='button' className='vendor-control-jobComlete'>Job Complete</button>
                  </div>
                </div>
            </div>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{width:'500px',height:'50px'}}>
          <div className="contact-title">
            <p>Update Vendor</p>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <div className="contact-data">
            <div className="contact-moblie-number">
                <label style={{color:'green'}}>Job Completed</label>
            </div>
            <div className="contact-sub-contdunt">
                {/* <p>Contact the Client quickly for better conversion</p> */}
            </div>
           </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{backgroundColor:'lightblue'}} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    </div>
  )
}

export default VentorInbox