/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import arrowIcon from '../../assets/right-arrow.svg';
import './index.css';

export default function MyIcon() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <img
        onClick={() => setOpen((p) => !p)}
        className={`icon icon-${open ? 'open' : 'close'}`}
        src={arrowIcon}
        alt=""
        width="50"
        height="50"
      />
    </div>
  );
}
