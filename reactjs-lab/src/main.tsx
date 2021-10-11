import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css'

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
