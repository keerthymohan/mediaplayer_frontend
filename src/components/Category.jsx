import React, { useEffect } from 'react'
import Videocard from './Videocard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getAllVedioCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({dropStatus}) {
  const [show, setShow] = useState(false);

  const [categoryName, setCategoryName] = useState("")
  const [allcategory, setallCategory] = useState([])
  const [categoryStatus, setCategoryStatus] = useState({})
  const [deleteCategory, setdeletecategory] = useState([])
  const [categoryupdatestatus , setcategoryupdatestatus]=useState({})


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  console.log(categoryName);
  const handleCancel = () => {
    setCategoryName("")
  }

  const handleAdd = async () => {
    if (!categoryName) {
      alert('Please fill the category name')
    }
    else {
      const reqBody = {
        Category: categoryName,
        allVideos: []
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Category added successfully')
        handleClose()
        setCategoryStatus(result)
      }
      else {
        toast.error('Something went wrong')
      }

    }
  }

  const getallCategory = async () => {
    const result = await getAllVedioCategoryApi()
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setallCategory(result.data)
    }

  }
  console.log(allcategory);

  const deletecategory = async (id) => {
    const result = await deleteCategoryApi(id)
    if (result.status >= 200 && result.status < 300) {
      setdeletecategory(result)
    }
    else {
      toast.error('something went wrong')
    }
  }


  const videoOver = (e) => {
    //reload
    e.preventDefault()
  }

  const videoDrop = async(e, categoryDetails) => {
    console.log(categoryDetails);
    const vedioDetail = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(vedioDetail);

    if (categoryDetails.allVideos.find((item)=>item.id == vedioDetail.id)) {
      toast.error('vedio already in the same category')
    }

    else {
      categoryDetails.allVideos.push(vedioDetail)
      console.log(categoryDetails);
      const result=await updateCategoryApi(categoryDetails.id,categoryDetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        setcategoryupdatestatus(result)
      }
      
    }

  }

  const videoDrag=(e,videoDetails,categoryDetails)=>{
    console.log(videoDetails,categoryDetails);

    const details = {
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("Details",JSON.stringify(details))
    
  }

  useEffect(() => {
    getallCategory()
  }, [categoryStatus, deleteCategory,categoryupdatestatus,dropStatus])


  return (
    <>
      <h5 className='mt-5'>Category </h5>
      <button onClick={handleShow} className='btn btn-warning mt-4 w-100'> Add Category </button>
      {allcategory?.length > 0 ?
        allcategory?.map((item) => (
          <div className="border border-secondary p-3 rounded mt-4" droppable onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e,item)} >
            <div className="d-flex justify-content-between">
              <h6>{item?.Category}</h6>
              <button onClick={() => deletecategory(item?.id)} className="btn btn-danger">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>

            {item?.allVideos.length>0 &&
            item?.allVideos.map((video)=>(
              <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
                <Videocard videoDetails={video} present={true}/>
                </div>

            ))
              }
          </div>

        ))
        :
        <h5 className="text-center text-danger mt-4">No category added yet...</h5>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border border-dark'>
            <input type="text" placeholder='Enter Category Name' className='form-control' onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme="colored" autoClose={2000} />

    </>
  )
}

export default Category