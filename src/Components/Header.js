import React from 'react';
import '../Styles/Header.css';

const Header = (props) => {
  return (
    <header className='banner-background' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${props.backgroundImageUrl})` }}>
      <h1>EVAD'ART</h1>
      <h2>- Understand the Art throught the Ages -</h2>
    </header>
  );
};

export default Header;
