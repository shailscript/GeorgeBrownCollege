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
          <p className='app-info'>&#9432; It seems like you don't have metamask installed.</p>
          <a href='https://metamask.io/'>Get metamask</a>
        </Fragment>
      );
    case 'LOCKED':
      return (
        <Fragment>
          <p className='app-info'>&#9432; Please unlock metamask to continue using this app.</p>
          <button onClick={enable}>Click here to unlock metamask</button>
        </Fragment>
      );
    case 'NOT_ENABLED':
      return (
        <Fragment>
          <p className='app-info'>&#9432; Please unlock metamask to continue using this app.</p>
          <button onClick={enable}>Click here to enable metamask</button>
        </Fragment>
      );
    case 'READY':
      return (
        <Fragment>
          <p className='app-info'>&#9432; Below is the wallet info for current user.</p>
          <UserInfo account={account} />
        </Fragment>
      );
    default:
      return (<p>Unexpected Error occured.</p>)

  }
}

const UserInfo = ( { account: { address, networkName} } ) => {
  const networkStyle = {
    textTransform: 'capitalize',
  }
  return (
    <div className='info'>
      <h2>Wallet Information</h2>
      <p>Address: {address}</p>
      <p style={networkStyle}>Network: {networkName}</p>
    </div>
  )
}

const App = () => {
    return <MetamaskStatus />;
}

export default App;
