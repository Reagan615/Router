import {useState} from 'react';

function Dialog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  return (
    <div className="dialog-container">
        <button 
        className={`openButton ${isOpen ? 'disabled' : ''}`}
        disabled={isOpen} 
        onClick={handleOpenDialog}>
        Open Dialog
        </button>
        {isOpen && (
            <div className="dialog-window">
            <button className="closeButton" onClick={handleCloseDialog}>Close Dialog</button>
            </div>
        )}
    </div>
  )
}

export default Dialog