import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddStatus}) {

  const [show, setShow] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    caption:"",
    vedioImg:"",
    vedioUrl:""
  })
  console.log(videoDetails);
  

  const handleClose = () => {setShow(false);
    handleCancel()
  }

  const handleShow = () => setShow(true);

  const handleCancel = ()=>{
    setVideoDetails({
      caption:"",
      vedioImg:"",
      vedioUrl:""
    })
  }
  const handleAdd = async()=>{
    const {caption , vedioImg , vedioUrl} = videoDetails

    if(!caption || !vedioImg || !vedioUrl){
      toast.info("please fill the form completely")
    }
    else{

      if(vedioUrl.startsWith('https://youtu.be/')){
        //https://youtu.be/HkvVaj_28C8?si=MJTpIi9lvx1faUJd
        let link = `https://www.youtube.com/embed/${vedioUrl.slice(17,28)}`
        console.log(link);
        const result = await addVideoApi({caption,vedioImg,vedioUrl: link})
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('vedio added successfully')
        handleClose()
        setAddStatus(result)
      }
      else{
        toast.error('something went wrong')
        handleCancel
      }
        
      }
      else{
        // https://www.youtube.com/watch?v=HkvVaj_28C8
        let link = `https://www.youtube.com/embed/${vedioUrl.slice(-11)}`
        console.log(link);
        const result = await addVideoApi({caption,vedioImg,vedioUrl: link})
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('vedio added successfully')
        handleClose()
        setAddStatus(result)
      }
      else{
        toast.error('something went wrong')
        handleCancel
      }
      
      }
    }
  }

  return (
    <>
    
      <h5>Upload New Video <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3'/></h5>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faFilm} className='me-2' /> <span className='d-md-inline d-none'>Upload Videos</span ></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border border-secondary p-3 rounded'>
            
              <div className='mb-3'>
                <input type="text" value={videoDetails.caption} placeholder='Video Caption' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} />
              </div>
            
              <div className='mb-3'>
                <input type="text" value={videoDetails.vedioImg} placeholder='Video Image' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,vedioImg:e.target.value})} />
              </div>
            
              <div >
                <input type="text" value={videoDetails.vedioUrl} placeholder='Video Url' className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,vedioUrl:e.target.value})} />
              </div>
         
          </form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />
    
    </>
  )
}

export default Add