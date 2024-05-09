# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

0. Create repo
1. npm create vite@latest - Install Vite
cd -
  npm install
  npm run dev
2. npm i react-router react-router-dom sass
3. Change extansion css -> scss
4. Change path in main.jsx and App.jsx
5. Added folders in src: components, data hooks, screens, services
6. Add brouser Routers
7. main.jsx

```import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <BrowserRouter>
      <App />
   </BrowserRouter>
  // </React.StrictMode>,
)
```
