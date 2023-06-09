import { useEffect } from 'react';

export default function useFlowbite() {
  useEffect(() => {
    let frontEnd = document.createElement('script');
    frontEnd.setAttribute(
      'src',
      'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js'
    ); // 👈 make sure to use the correct path
    frontEnd.setAttribute('id', 'flowbite-js');

    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById('flowbite-js').remove();
    };
  }, []);
}
