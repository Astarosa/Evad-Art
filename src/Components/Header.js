import React from 'react';
import '../Styles/Header.css';

const Header = (props) => {
  return (
    <header className={props.isLoaded ? 'banner-background' : 'banner-background wait'} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${props.backgroundImageUrl})` }}>
      <h1>EVAD'ART</h1>
      <h2>- Comprendre l'art au fil des époques -</h2>
    </header>
  );
};

export default Header;
