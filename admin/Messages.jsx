import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Modal } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL;

const NoMessageAvailable = () => {
  return (
      <div className="container text-center p-4 w-100">
          <div className="shadow rounded p-4">
              <div className="h1 fw-bold mb-3 m-auto" style={{color: '#c2c2c2'}}>No available messages!</div>
              <div className="h4 fw-light mb-3 m-auto" style={{color: '#a0a0a0'}}>Please try again later.</div>
          </div>
      </div>
  )
}

const MessageDisplayModal = ({message, show, handleShow}) => {
  
  const handleClose = () => handleShow(false);

  return (
      <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <span className='h5'>Quote</span>
          </Modal.Header>
          <Modal.Body>
              <div>
                <span className='fw-bolder'>{message?.name}<br /><small>{message?.email}</small></span><br />
                <small>{message?.phone ? message?.phone : '[No phone no.]'}</small><br /><br />
                <p>{message?.quote_details ?? message?.message}</p>
              </div>
          </Modal.Body>
          <Modal.Footer>
              <button onClick={handleClose}></button>
          </Modal.Footer>
      </Modal>
  )
}

const Messages = () => {
  const [currentMsg, setCurrentMsg] = useState({})
  const [show, setShow] = useState(false)
  const [contactMessages, setContactMessages] = useState([])
  const [quoteMessages, setQuoteMessages] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/api/quotes`)
    .then(({data}) => {
      if (data.length !== 0) {
        setQuoteMessages(data)
      }
    })
    .catch(error => console.log(error))

    axios.get(`${API_URL}/api/messages`)
    .then(({data}) => {
      if (data.length !== 0) {
        setContactMessages(data)
      }
    })
    .catch(error => console.log(error))
  }, [])

  
  const MessageCard = ({message, handleCurrentMsg, handleShow}) => {
    const showMessage = () => {
      handleCurrentMsg(message)
      handleShow(true)
    }

    return (
      <div className="message-card rounded shadow-sm p-3 mb-3" onClick={showMessage}>
        <div className="fw-bolder">{message?.name} <br /><small>{message?.email}</small></div>
        <div className="text-secondary">
          {message?.text}
        </div>
      </div>
    )
  }

  return (
    <div className='container w-100'>
      <section className="site-settings p-4">
        <div className="site-settings-heading h3 p-4">Site Messages</div>
        
          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder h4">Quotes</div>
            <hr />
            { (quoteMessages.length === 0)
              ? <NoMessageAvailable />
              : quoteMessages?.map((message, idx) => {
                return <MessageCard message={message} handleCurrentMsg={setCurrentMsg} handleShow={setShow} key={idx} />
              })
            }
          </div>

          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder h4">Conatct Messages</div>
            <hr />
            { (contactMessages.length === 0)
              ? <NoMessageAvailable />
              :contactMessages?.map((message, idx) => {
                return <MessageCard message={message} handleCurrentMsg={setCurrentMsg} handleShow={setShow} key={idx} />
              })
            }
          </div>
          
          <MessageDisplayModal message={currentMsg} show={show} handleShow={setShow} />
      </section>
    </div>
  )
}

export default Messages