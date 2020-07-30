import React from 'react';

import Logo from '../../assets/logo.png'
import './Menu.css';
// import ButtonLink from './componets/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="TiagoFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;