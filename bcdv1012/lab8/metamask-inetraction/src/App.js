import React from 'react';
import { useWeb3 } from './UseWeb3';
 
const MetamaskStatus = () => {
  const w3 = useWeb3();
console.log(w3);
  return (
    <div className='card'>
      <div className='header'>
        <h2 className='status'>Status: {w3.status}</h2>
        
        { w3.status === 'NO_WEB3' ?
            <a href='https://metamask.io/'>Get metamask</a>
          : (w3.status === 'LOCKED' || w3.status === 'NOT_ENABLED') ?
              <button onClick={w3.enable}>Enable metamask</button>
            : (w3.account && <UserInfo account={w3.account} />)
        }
      </div>
    </div>
  );
}

const UserInfo = ( { account: { address, networkName} } ) => (
    <div className='info'>
      <h2>Wallet information</h2>
      <p>Address: {address}</p>
      <p>Network: {networkName}</p>
    </div>
  )

const App = () => {
    return <MetamaskStatus />;
}

export default App;
