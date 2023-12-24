import { useState } from 'react';

export const useMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    console.log(open);
  };

  return {
    open,
    toggleMenu,
  };
};
