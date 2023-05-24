import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditModal = ({show, handleClose, product, handleChange, handleEditChanges}) => {
  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" class ="form-control" placeholder = "Product Name" value = {product.title} name = "title" onChange = {(e) => handleChange(e)}></input>
          <input type="text" class ="form-control" placeholder = "Product Description"
          value = {product.description} name = "description" onChange = {(e) => handleChange(e)}></input>
          <input type="text" class ="form-control" placeholder = "Image URL"
          value = {product.thumbnail} name = "thumbnail" onChange = {(e) => handleChange(e)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EditModal

