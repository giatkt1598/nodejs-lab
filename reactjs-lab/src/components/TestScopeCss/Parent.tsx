import React from 'react';
import style from './Parent.module.scss';

export default function Parent(props: {children: any}) {
  return (
    <div className={style.wrapper}>
      Parent
      <br />
      {props.children}
    </div>
  );
}
