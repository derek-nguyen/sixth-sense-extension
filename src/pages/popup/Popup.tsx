import React, { useState, useEffect } from 'react';
import logo from '@assets/img/logo.svg';
import '@pages/popup/Popup.css';
import useStorage from '@src/shared/hooks/useStorage';
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

// import CurrentUrl from '@src/shared/components/CurrentUrl';
import CompanyInformation from '@root/src/shared/components/CompanyInformation';
import About from '@root/src/shared/components/About';

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);

  const [currentURL, setCurrentURL] = useState('');
  useEffect(() => {
    if (chrome.tabs) {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        const url = new URL(tabs[0].url);
        const protocolAndHost = `${url.protocol}//${url.host}`;
        setCurrentURL(protocolAndHost);
      });
    }
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#000',
      }}>
      <header className="App-header" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <CompanyInformation currentURL={currentURL} />
        <About currentURL={currentURL} />
        <button
          style={{
            backgroundColor: theme === 'light' ? '#fff' : '#000',
            color: theme === 'light' ? '#000' : '#fff',
          }}
          onClick={exampleThemeStorage.toggle}>
          Toggle theme
        </button>
      </header>
    </div>

  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
