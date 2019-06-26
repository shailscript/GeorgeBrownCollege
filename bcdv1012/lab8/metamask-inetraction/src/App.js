import React from 'react';
import { useWeb3 } from './UseWeb3';
 
const MetamaskStatus = () => {
  let w3 = useWeb3();

  return (
    <div className='card'>
      <div className='header'>
        <p>Status = {w3.status}</p>
        
        { w3.status === 'NO_WEB3' ?
            <a href='https://metamask.io/'>Get metamask</a>
          : (w3.status === 'LOCKED' || w3.status === 'NOT_ENABLED') ?
              <button onClick={w3.enable}>Enable metamask</button>
            : (w3.account && <UserInfo w3={w3} />)
        }
      </div>
    </div>
  );
}

const UserInfo = (props) => {
  return (
    <div>
      <p>{props.w3.account.address}</p>
      <p>{props.w3.account.networkName}</p>
    </div>
  )
}

const App = () => {
    return <MetamaskStatus />;
}

export default App;
