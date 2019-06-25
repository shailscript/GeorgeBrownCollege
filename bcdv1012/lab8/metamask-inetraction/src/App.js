import React, { Fragment } from 'react';
import { useWeb3 } from './UseWeb3';

const MetamaskStatus = () => {
    let w3 = useWeb3();
    console.log(w3); // look in your JS console

  return (
      <Fragment>
        <div>status = {w3.status}</div>
      </Fragment>
    );
}
      
const App = () => {
    return <MetamaskStatus />;
}

export default App;
