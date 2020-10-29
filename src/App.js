import React from 'react';

function App() {
  const { pathname, search, hash } = window.location;
  window.location.assign(`https://hackthis.hackillinois.org${pathname}${search}${hash}`);
  return (
    <div className="App">
    </div>
  );
}

export default App;
