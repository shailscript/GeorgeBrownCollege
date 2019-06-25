import React, { Fragment } from 'react';
import { useWeb3 } from './UseWeb3';
 
const MetamaskStatus = () => {
    let w3 = useWeb3();
    console.log(w3); // look in your JS console

    return (
      <Fragment>
        <div>status = {w3.status}</div>
        { w3.status === 'NO_WEB3' ?
            <a href='https://metamask.io/'>Get metamask</a>
          : (w3.status === 'LOCKED' || w3.status === 'NOT_ENABLED') ?
              <button onClick={w3.enable}>Enable metamask</button>
            : <p>All cool </p>
        }
      </Fragment>
    );
}

const App = () => {
    return <MetamaskStatus />;
}

export default App;
