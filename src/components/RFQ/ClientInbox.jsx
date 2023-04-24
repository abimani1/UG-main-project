import React from 'react'
import '../style/inbox.css'
import img1 from '../../image/1.jpg'
import { Link } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

const ClientInbox = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="cotiner">
            <div className="row">
                <div className="client-body">
                    <div className="vendor-box">
                        <div className="vendor-box-border">
                            <div className="vendor-box-innnerbody">
                                <div className="vendor-innerBox-1">
                                    <div className="vendorprofile-box">
                                        <div className="vendor-image">
                                            <img src={img1} alt="profile" />
                                        </div>
                                    </div>
                                    <div className="vendor-data">
                                        <div className="vendor-name">
                                            <label>Vino</label>
                                        </div>
                                        <div className="vendor-address">
                                            <div className="vendor-address-companyNames">
                                                <p>SMS car service</p>
                                            </div>
                                            <div className="vendor-address-1">
                                                <p>567, 2nd Floor, Rohit</p>
                                                <p>Arcade, Hosa Rd,</p>
                                                <p>Naganathapura, Electronic</p>
                                                <p>City, Bengaluru, Karnataka</p>
                                                <p>560100.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vendor-action-button">
                                        <div className="vendor-call-action-button">
                                            <button onClick={handleClickOpen}>Call</button>
                                        </div>
                                        <div className="vendor-chart-action-button">
                                            <button><Link to={'/client/chart'} className='link'>Live Chart</Link></button>
                                        </div>
                                    </div>
                                    {/* chart */}
                                </div>
                            </div>
                        </div>
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
            <p>Call Now</p>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <div className="contact-data">
            <div className="contact-moblie-number">
                <label>7689879076</label>
            </div>
            <div className="contact-sub-contdunt">
                <p>Contact the vendor quickly for better conversion</p>
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
  )
}

export default ClientInbox