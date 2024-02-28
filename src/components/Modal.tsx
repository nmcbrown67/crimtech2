import { createPortal } from 'react-dom';
import { useState } from 'react';

const modalRoot = document.getElementById('modal-root');

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  return (
    <div style={{
      display: 'flex',
      alignItems: 'center', 
      justifyContent: 'center',
      height: '20rem', 
    }}>
      
      <button onClick={openModal}>Click Me!</button>

      {isOpen && createPortal(
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '20rem',
          height: '20rem',
          backgroundColor: 'white',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={closeModal} style={{ backgroundColor: 'red', color: 'black', zIndex: 1001 }}>Close</button>
        </div>,
        modalRoot as Element
      )}
    </div>
  );
}