import React from 'react'
import '../style/dashbord.css'
import ReportClient from './ReportClient'
import HomeNavbar from '../Navbar/HomeNavbar'

const Dashbord = () => {
  return (
    <>
    <HomeNavbar/>
    <div className="dashbord-title">
                <label>Your Request</label>
              </div>
    <ReportClient service='Car Service' vendorName='SamRaja' date='20/04/2023' status='On progress' colour='Orange' button='false'/>
    <ReportClient service='AC Service' vendorName='Arjun' date='21/04/2023' status='On progress' colour='Orange' button='false'/>
    <ReportClient service='Compressor Service' vendorName='Anand' date='22/04/2023' status='On progress' colour='Orange' button='false'/>
    <ReportClient service='CCTV Service' vendorName='Priya' date='13/03/2020' status='completed' colour='green' button='true'/>
    <ReportClient service='Clothing Outlet Service' vendorName='Joe' date='14/02/2020' status='completed' colour='green' button='true'/>
    <ReportClient service='Car Service' vendorName='Nivi' date='10/01/2020' status='completed' colour='green' button='true'/>
    <ReportClient service='AC Service' vendorName='Nani' date='13/03/2020' status='completed' colour='green' button='true'/>
    <ReportClient service='Compressor Service' vendorName='Sam' date='13/03/2020' status='Rejected' colour='red' button='false'/>
    </>
  )
}

export default Dashbord