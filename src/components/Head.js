import React from 'react';
import logo from '../images/logo192.png';
import { Typography } from '@mui/material';

const Head = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="calc logo" />
      </div>
      <Typography variant="h3" gutterBottom component="div">CALCULATOR</Typography>
    </header>
  )
}

export default Head;