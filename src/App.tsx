import React from 'react';
import logo from './logo.svg';
import './App.css';
import {appWindow} from '@tauri-apps/api/window';
import Title from "./components/title";
import {readDir} from '@tauri-apps/api/fs';

function App() {
  const aaa = () => {
    console.log(readDir)
  }
  return (
    <div className="App">
      {/*<div data-tauri-drag-region className="titlebar">*/}
      {/*  <div className="titlebar-button" id="titlebar-minimize" onClick={aaa}>*/}
      {/*    <img*/}
      {/*      src="https://api.iconify.design/mdi:window-minimize.svg"*/}
      {/*      alt="minimize"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="titlebar-button" id="titlebar-maximize">*/}
      {/*    <img*/}
      {/*      src="https://api.iconify.design/mdi:window-maximize.svg"*/}
      {/*      alt="maximize"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="titlebar-button" id="titlebar-close">*/}
      {/*    <img src="https://api.iconify.design/mdi:close.svg" alt="close"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Title/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"

        />
        <p
          onClick={aaa}

        >
          Edit 1111111111111111<code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
