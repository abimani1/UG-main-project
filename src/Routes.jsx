import React from 'react'
import Landing from "./page/Landing";
import{Routes,Route} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./page/Home"
import RfqForm from "./components/RFQ/RfqForm";
// import HomeNavbar from "./components/Navbar/HomeNavbar";
// import VendorNavbar from "./components/Navbar/VendorNavbar";
import ViewRfq from "./components/RFQ/ViewRfq";
import CURDpopup from "./components/Popup/CURDpopup";
import VendorHome from "./components/vendor/vendorHome/VendorHome";
import Vendor_rfq from "./components/vendor/vendor_Rfq_viwe/vendor_rfq";
import PostQueot from "./components/vendor/PostQuets/PostQueot";
import ViewQuot from './components/RFQ/ViewQuot';
// import Vendor_quot from './components/vendor/vendor_quot/Vendor_quot';
import VendorQuotView from './components/vendor/vendor_quot/Vendor_quot';
import ReviewQuot from './components/Popup/ReviewQuot';
// import Vendor_login from './components/vendor/VendorLogin';
import VendorLogin from './components/vendor/VendorLogin';
import ClientInbox from './components/RFQ/ClientInbox';
import ClientChart from './components/RFQ/ClientChart';
import VentorInbox from './components/vendor/vendorinbox/VentorInbox';
import Dashbord from './components/RFQ/Dashbord';
import VendorReport from './components/vendor/Rport/VendorReport';
import IndividualService from './components/clientHome/IndividualService';
import VendorSubcreation from './components/vendor/Subcription/VendorSubcription';
import SubscriptionPayment from './components/vendor/Subcription/SubscriptionPayment';


const MainRoutes = () => {
    // const[buttonController,setButtonController]=useState(true)
  return (
    <>
    <Routes>
        <Route path="/client/deashbord" element={<Dashbord/>}/>
        <Route path="/"element={<Landing/>}/>
        <Route path="/signin"element={<Signin/>}/>
        <Route path="/signup"element={<Signup/>}/> 
        <Route path="/client/home"element={<Home/>}/> 
        <Route path="/client/rfq"element={<RfqForm/>}/>
        <Route path="/client/chart" element={<ClientChart/>}/>
        <Route path="/client/quote/inbox" element={<ClientInbox/>}/>
        <Route path="/client/rfq/update/:id"element={<CURDpopup/>}/> 
        <Route path="/client/viewRfq"element={<ViewRfq/>}/>
        <Route path="/vendor/home" element={<VendorHome/>}/>
        <Route path="/vendor/viewrfq" element={<Vendor_rfq/>}/>
        <Route path="/vendor/postQueot" element={<PostQueot/>}/>
        <Route path="/client/viewQuot" element={<ViewQuot/>}/>
        <Route path="/vendor/viewQuot" element={<VendorQuotView/>}/>
        <Route path="/vendor/view" element={<ReviewQuot/>}/>
        <Route path="/vendor/longin" element={<VendorLogin/>}/>
        <Route path="/vendor/Report" element={<VendorReport/>}/>
        <Route path="/vendor/rfq/quoteAccpte/clientquote" element={<VentorInbox/>}/>
        <Route path="/vendor/plan/subscription" element={<VendorSubcreation/>}/>
        <Route path="/client/domestic-help-service" element={<IndividualService/>}/>
        <Route path="/vendor/subscription/payment" element={<SubscriptionPayment/>}/>
      </Routes>
    </>
  )
}

export default MainRoutes