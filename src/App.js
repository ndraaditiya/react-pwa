import React, { useState } from 'react';
import QrReader from 'modern-react-qr-reader'

const App = () => {
  const [result, setResult] = useState('No Result')

  const handleScan = (data) => {
    setResult(data)
  }

  const handleError = (err) => {
    console.error(err)
  }

  return (
    <div>
      <QrReader
        delay={300}
        style={{ width: '100%' }}
        onError={handleError}
        onScan={handleScan}
        facingMode={"environment"}
      />
      <br />
      <p>{result}</p>
    </div>
  );
}

export default App;
