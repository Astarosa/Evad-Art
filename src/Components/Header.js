import React from 'react';
import '../Styles/Header.css';

const Header = (props) => {
  return (
    <header className='banner-background' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${props.backgroundImageUrl})` }}>
      <h1>EVAD'ART</h1>
      <h2>- Découvrir l'art au travers des âges -</h2>
    </header>
  );
};

export default Header;
