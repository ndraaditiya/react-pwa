import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader'

const App = () => {
  const [result, setResult] = useState('No Result')

  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setResult(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
        facingMode={'environment'}
      />
      <br />
      <p>{result}</p>
    </div>
  );
}

export default App;
