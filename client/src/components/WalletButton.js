import React, { useState, useEffect } from 'react';

const WalletButton = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      alert('Install MetaMask');
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accounts => setAccount(accounts[0]));
    }
  }, []);

  return (
    <button onClick={connectWallet} className="ml-auto btn">
      {account ? `Connected: ${account.slice(0, 6)}...` : 'Connect Wallet'}
    </button>
  );
};

export default WalletButton;
