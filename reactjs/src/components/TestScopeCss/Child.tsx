import React from 'react';
import styles from './Child.module.scss';

export default function Child(props: {children: any}) {
  return (
    <div className={styles.wrapper}>
      Child
      <br />
      {props.children}
    </div>
  );
}
