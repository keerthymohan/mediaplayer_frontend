import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom"



function Footer() {
  return (

      <div className='py-5 px-4'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-4">
            <h4 className='text-warning me-3'> <FontAwesomeIcon icon={faVideo} /> Media Player</h4> 
            <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, eos fuga! Debitis, molestias. Ipsa voluptates quasi architecto alias impedit dolorum dignissimos, deserunt unde commodi laudantium perspiciatis possimus a aperiam assumenda!</p>
    
            </div>
            <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
              <div>
                <h4 className='text-white'>Links</h4>
                <Link to={'/'}><p className='mt-3'>Landing page</p></Link>
                <Link to={'/home'}><p>Home page</p></Link>
                <Link to={'/watchhistory'}><p> Watch History</p></Link>
              </div>
            </div>
            <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
              <div>
                <h4>Guides</h4>
                <p className='mt-3'>React</p>
                <p>React Bootstrap</p>
                <p>Bootswatch</p>
              </div>
            </div>
            <div className="col-md-4 md:px-5 mt-4 mt-md-0">
              <h4 className='text-white'>Contact Us</h4>
              <div className=" d-flex mt-3">
                <input type="text" placeholder='Email Id' className='form-control'/>
                <button className='btn btn-warning ms-3'>Subscribe</button>
                </div>
                <div className="d-flex justify-content-between mt-3">
                <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
                <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>
                <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
                <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
                <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
              </div>
            </div>
          </div>
        </div>
        </div>
   
  )
}

export default Footer