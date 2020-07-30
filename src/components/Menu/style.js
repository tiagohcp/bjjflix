import styled from 'styled-components';

export const LogoImage = styled.img`
  max-width: 168px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: 0%;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;


  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
   
    body {
    --bodyPaddingTop: 40px;
    padding-top: var(--bodyPaddingTop);
  }
  }
`;