<h1>Lab 2 (Doug's Class): Metamask Status Component</h1>

<div>Create a react component that displays information about the user's metamask state. Your submission should be a single javascript file, ie <code>App.js</code> if you are using create-react-app. <b>Do not submit .zip files</b> or anything else, or you will receive 0 (but you can re-submit).</div>

<div>The point of this lab is to get familiar with basic react development, learn about hooks, and to get started using the web3 interface.</div>

<ul>
  <li>Create a new react project using <a href="https://reactjs.org/docs/create-a-new-react-app.html">create-react-app</a> (detailed instructions in the slides)</li>
  <li>Download the file <a href="UseWeb3.js">UseWeb3.js</a> and put it into the src directory in your app.</li>
  <li>Use the following as a starting point for your App.js:

<pre>
import React from 'react';
import { useWeb3 } from './UseWeb3';
 
function MetamaskStatus() {
    let w3 = useWeb3();
    console.log(w3); // look in your JS console
    return &lt;div&gt;status = {w3.status}&lt;/div&gt;;
}

function App() {
    return &lt;MetamaskStatus /&gt;;
}

export default App;
</pre>
</li>
  <li>
    Implement a component that displays the user's metamask status, and allows them to unlock and connect to your dApp, if necessary. At a minimum, ensure your component does the following:
    <ul>
      <li>If a user doesn't have metamask installed, show a message why (status is "NO_WEB3")</li>
      <li>If a user has metamask locked, or your dApp isn't approved, show a message why (status is "LOCKED" or "NOT_ENABLED")</li>
      <li>If the status is "LOCKED" or "NOT_ENABLED", show a button. When the button is clicked, call the enable() function (it's part of what useWeb3 returns)</li>
      <li>If a user's metamask is unlocked and approved (status "READY"), you should show the user's address and what network they are on</li>
      <li>If a user changes their address or network, or locks or unlocks metamask, you should see your UI update accordingly</li>
    </ul>
  </li>
  <li>
    BONUS:
    <ul>
      <li>Alongside a user's address, also show an ethereum <a href="https://www.npmjs.com/package/react-blockies">Blockie</a> "identicon" image</li>
      <li>Use some CSS to make your component pretty looking</li>
    </ul>
  </li>
  <li>
    Here are some example screenshots of what your component could look like:
    <div><img src="https://raw.githubusercontent.com/hoytech/blockchain-dapps/master/lesson2/lab-example-screen1.png" /></div>
    <div><img src="https://raw.githubusercontent.com/hoytech/blockchain-dapps/master/lesson2/lab-example-screen2.png" /></div>
  </li>
</ul>