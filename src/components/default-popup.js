'use client';

import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import CrossIcon from '@/components/icons/cross-icon';
import WarningIcon from '@/components/icons/warning-icon';

export default function DefaultPopup({ onClose }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-gray-500/40 "
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <CrossIcon />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <WarningIcon />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              This feature has been deactivated in this demo environment
            </h3>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}
