import React from 'react'
import Modal from './modal';
import './modal.css'
function Modaltest() {
    const [showModalPopup, setShowModalPopup] = React.useState(false);
    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }
    const handleCross = () => {
        setShowModalPopup(false);
    }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {
        showModalPopup && 
        <Modal
        onClose={handleCross}
        body={<div>Customised body</div>}
        header={<div>title</div>}
        footer={<div>the End</div>}
        />
      }
    </div>
  )
}

export default Modaltest
