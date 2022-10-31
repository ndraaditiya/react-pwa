import React, { useState } from 'react';
import QrReader from 'react-qr-scanner'

const App = () => {
  const [result, setResult] = useState(null)

  const previewStyle = {
    height: 240,
    width: 320,
    justifyContent: 'center',
  }

  const handleScan = (data) => {
    setResult(data)
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div>
      <QrReader
        delay={100}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <br />
      <p>{result}</p>
    </div>
  );
}

export default App;
