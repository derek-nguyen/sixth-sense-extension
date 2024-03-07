import { useState, useEffect } from 'react';

const CurrentURL = () => {
  const [currentURL, setCurrentURL] = useState('');

  useEffect(() => {
    if (chrome.tabs) {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        const url = tabs[0].url;
        setCurrentURL(url);
      });
    }
  }, []);
  return (
    <div>
      <p>Current URL: {currentURL}</p>
    </div>
  );
};

export default CurrentURL;
