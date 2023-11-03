import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RangeSlider from './RangeSlider';

function EditSection(item) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let style = '';
  const handleShow = (e) => {
    // Get next sibling width
    style = e;
    console.log('style', style)
    setShow(true)
};

  return (
    <>
      <Button variant="primary" className='editSection_btn' onClick={handleShow}>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <RangeSlider
         //css={width}
         />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditSection;