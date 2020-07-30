import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://bjjflix.vercel.app/">
        <img src={Logo} alt="Logo BjjFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
