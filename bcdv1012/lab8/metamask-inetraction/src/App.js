import React, { Fragment } from 'react';
import { useWeb3 } from './UseWeb3';
 
const MetamaskStatus = () => {
  const w3 = useWeb3();
console.log(w3);
  return (
    <div className='card'>
      <div className='header'>
        <h2 className='status'>Status: {w3.status}</h2>
        <Action w3={w3} />
      </div>
    </div>
  );
}

const Action = ({ w3: { status, enable, account } }) => {
  switch (status) {
    case 'NO_WEB3':
      return (
        <Fragment>
          <p className='app-info'>It seems like you don't have metamask installed.</p>
          <a href='https://metamask.io/'>Get metamask</a>
        </Fragment>
      );
    case 'LOCKED':
      return (
        <Fragment>
          <p className='app-info'>Please unlock metamask to continue using this app.</p>
          <button onClick={enable}>Click to unlock metamask</button>
        </Fragment>
      );
    case 'NOT_ENABLED':
      return (
        <Fragment>
          <p className='app-info'>Please unlock metamask to continue using this app.</p>
          <button onClick={enable}>Click to enable metamask</button>
        </Fragment>
      );
    case 'READY':
      return (<UserInfo account={account} />);
    default:
      return (<p>Unexpected Error occured.</p>)

  }
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
