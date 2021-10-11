import React from 'react';
import './App.css';
import MyIcon from './components/MyIcon';
import { Button, ConfigProvider } from 'antd';
import ClipPath from './components/ClipPath';
import ClassSelector from './components/ClassSelector';
import SvgWithFigma from './components/SvgWithFigma';
import ButtonWithPseudoClass from './components/ButtonWithPseudoClass';

function App() {
  const toBlack = () => {
    ConfigProvider.config({
      theme: {
        primaryColor: 'black',
      },
    });
  }
  return (
    <div className="App">
      <ButtonWithPseudoClass />
      <hr />
      <SvgWithFigma />
      <hr />
      <MyIcon />
      <Button type='primary' onClick={() => toBlack()}>Primary</Button>
      <hr />
      <ClipPath />
      <hr />
      <ClassSelector />
      <hr />
    </div>
  );
}

export default App;
