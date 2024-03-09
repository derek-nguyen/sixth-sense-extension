import { useState, useEffect } from 'react';

const CurrentURL = () => {
  const [currentURL, setCurrentURL] = useState('');

  useEffect(() => {
    if (chrome.tabs) {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        console.log('tabs', tabs);
        const url = new URL(tabs[0].url);
        const protocolAndHost = `${url.protocol}//${url.host}`;
        setCurrentURL(protocolAndHost);
      });
    }
  }, []);

  return (
    <div>
      <p>Main URL: {currentURL}</p>
    </div>
  );
};

export default CurrentURL;
