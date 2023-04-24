import React from 'react'
import HomeNavbar from '../components/Navbar/HomeNavbar'
import ClientHero from '../components/clientHome/ClientHero'
import ServiceOption from '../components/clientHome/ServiceOption'
import HomeService from '../components/clientHome/HomeService'
import BusinessService from '../components/clientHome/BusinessServices'
import PropertiesRent from '../components/clientHome/PropertiesRent'
// import SubscriptionForm from '../components/clientHome/SubcribtionPage'
import SubscriptionPaymentPage from '../components/clientHome/SubcribtionPage'


const Home = () => {

  return (
    <>
      <div className="client-nav">
        <HomeNavbar/>
      </div>
      <div className="client-hero">
        <ClientHero/>
      </div>
      <div className="service-option">
        <ServiceOption/>
      </div>
      <div className="sevice-box-client">
        <div className="HomeService">
          <HomeService/>
        </div>
        <div className="BusinessService">
          <BusinessService/>
        </div>
        <div className="Properties-Buy">
          <PropertiesRent/>
        </div>
        <SubscriptionPaymentPage/>
      </div>
    </>
  )
}

export default Home
