import React, { useState } from 'react';

const BackgroundChange = () => {
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let range: number = 6;

    for (let i = 0; i < range; i++) {
      color += hexRange[Math.floor(Math.random()) * 16];
    }
  };
};

export default BackgroundChange;
