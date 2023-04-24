import React from 'react'
import HomeNavbar from '../Navbar/HomeNavbar';

const ClientChart = () => {
  return (
    <>
    <HomeNavbar/>
    <div className="message-body-box">
        <div className="message-box">
        <div className="message">
          <div className="chart-title">
            <div className="vendor-name">
              <h2>Car Service</h2>
            </div>
          </div>
          <div className="message-border-box">
            {message.map((mes, index) => (
              <div className="messagebox" key={index}>
                <div className="">
                  <div className="clientmsg">
                    <label>{mes.client}</label>
                  </div>
                </div>
                {/* {/ {mes.client} /} */}
                <div className="vendor-meg-box">
                  <div className="vendormsg">
                    <label>{mes.vendor}</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="messagesend">
            <div>
              <input
                className="sendmessage"
                type="text"
                placeholder="enter your message"
              />
            </div>
            <div>
              <button className="send">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ClientChart

const message = [
    {
      client: "Hai",
      vendor: "hello",
    },
    {
      client: "I am form chennai",
      vendor: "ok it's fine",
    },
    {
      client: "where are you from? ",
      vendor: "I also chennai",
    },
    {
      client: "I need your service.",
      vendor: "ok always welcome",
    },
    {
      client: "when will you come?",
      vendor: "with in 15 days,I will come there.",
    },
    {
      client: "Inform me before two days",
      vendor: "ok done",
    },
    {
      client: "ok",
      vendor: "ok thankyou",
    },
  ];