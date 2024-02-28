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
      alignItems: 'center', // This centers the button vertically in the viewport
      justifyContent: 'center', // This centers the button horizontally in the viewport
      height: '100vh', // This ensures the container takes up the full viewport height
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
          <button onClick={closeModal}>Close</button>
        </div>,
        modalRoot as Element
      )}
    </div>
  );
}