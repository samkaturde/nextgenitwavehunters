import React from 'react';

const WhatsAppChat = () => {
  const phoneNumber = "919326917837"; // Replace with your phone number (include country code)
  const message = "Hello! I'm interested in learning more about your services."; // Default message

  const handleClick = () => {
    // Open WhatsApp in a new tab
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <button 
        onClick={handleClick} 
        style={{
          backgroundColor: '#25D366',
          borderRadius: '50%', 
          border: 'none', 
          padding: '11px', 
          cursor: 'pointer'
        }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          style={{ width: '40px', height: '40px' }} 
        />
      </button>
    </div>
  );
}

export default WhatsAppChat;
