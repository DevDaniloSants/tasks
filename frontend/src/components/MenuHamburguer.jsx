import { useState } from 'react';
import '../styles/components/menuHamburguer.sass';

const MenuHamburguer = ({ open, openMenu }) => {
  return (
    <button className={open ? 'hamburguer active' : 'hamburguer'} onClick={openMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuHamburguer;
