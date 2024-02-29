import { createPortal } from 'react-dom';
import { useState } from 'react';

const modalRoot = document.getElementById('root');

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  // Declaring open and closed states
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center',
      height: '20rem', 
      backgroundColor: 'white',
    }}>
      
      {/* // BUTTON TO OPEN MODAL */}
      <button onClick={openModal}>Click Me!</button>

      {/* // CONTENT OF MODAL */}
      {isOpen && createPortal(
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '20rem',
          height: '20rem',
          backgroundColor: 'lightblue',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div className = "modal-content">
            <h1 className="modal-cont-title"> HI DENNIS & NEIL!!</h1>
        
          <button onClick={closeModal} style={{ backgroundColor: 'white', color: 'pink', zIndex: 1001 }}>Close</button>
        </div>
        </div>,
        modalRoot as Element
      )}
    </div>
  );
}