import React, { useEffect } from 'react';

const Toast = ({ title, message, type, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: 'fas fa-check-circle',
    info: 'fas fa-info-circle',
    warning: 'fas fa-exclamation-circle',
    error: 'fas fa-exclamation-circle',
  };

  const icon = icons[type];
  const delay = (duration / 1000).toFixed(2);

  return (
    <div
      className={`toast bg-white shadow-lg border-l-4 rounded-md p-5 flex items-center transition-all duration-300 mb-4 
      ${type === 'success' && 'border-green-500 text-green-500'}
      ${type === 'info' && 'border-blue-500 text-blue-500'}
      ${type === 'warning' && 'border-yellow-500 text-yellow-500'}
      ${type === 'error' && 'border-red-500 text-red-500'}`}
      style={{ animation: `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards` }}
    >
      <div className="toast__icon text-2xl px-4">
        <i className={icon}></i>
      </div>
      <div className="toast__body flex-grow">
        <h3 className="toast__title text-base font-semibold text-gray-800">{title}</h3>
        <p className="toast__msg text-sm text-gray-600 mt-1 leading-6">{message}</p>
      </div>
      <div className="toast__close text-gray-400 hover:text-orange-400 text-lg px-4 cursor-pointer" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Toast;
