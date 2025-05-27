import React from 'react';

function CustomButton({ label, onClick, color = 'blue', size = 'medium', icon }) {
  const sizeMap = {
    small: '6px 12px',
    medium: '10px 20px',
    large: '14px 28px'
  };

  const styles = {
    backgroundColor: color,
    color: '#fff',
    padding: sizeMap[size],
    border: 'none',
    borderRadius: '6px',
    fontSize: size === 'large' ? '16px' : size === 'small' ? '12px' : '14px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px'
  };

  return (
    <button onClick={onClick} style={styles}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}

export default CustomButton;
