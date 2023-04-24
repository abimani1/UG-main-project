import React from 'react'
import ReportVendor from './Report-vendor'
import HomeNavbar from '../../Navbar/HomeNavbar'
import VendorNavbar from '../vendorNavbar/VendorNav'

const VendorReport = () => {
  return (
    <>
    <VendorNavbar/>
    <div className="dashbord-title">
        <label>Vendor Report</label>
      </div>
    <ReportVendor clientName='Raju'  date='20/04/2023' status='On progress' color='Orange' />
    <ReportVendor clientName="adhan" date='20/04/2023' status='On progress' color='Orange'/>
    <ReportVendor clientName="nandhu"  date='20/03/2023' status='Pending' color='green'/>
    <ReportVendor clientname="vinu"  date='20/02/2023' status='Pending' color='green'/>
    <ReportVendor clientName="pari"  date='10/01/2023' status='Complete' color='red'/>
    <ReportVendor clientName="pavi"  date='21/03/2023' status='Reject' color='blue'/>
    </>
  )
}

export default VendorReport