const connectButton = document.getElementById('connect-button');
const balanceEl = document.getElementById('balance');

let tonConnectUI;

async function init() {
  tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://your-site.com/tonconnect-manifest.json',
    buttonRootId: 'connect-button'
  });

  const connectedWallet = await tonConnectUI.restoreConnection();
  if (connectedWallet) {
    const walletInfo = connectedWallet.account.address;
    updateUser(walletInfo);
  }
}

function updateUser(walletAddress) {
  document.getElementById('connect-button').innerText = '✅ Подключено';
  fetch(`https://tonapi.io/v1/address/${walletAddress}`)
    .then(res => res.json())
    .then(data => {
      const balance = (data.balance / 1e9).toFixed(2);
      balanceEl.innerText = `💎 Баланс: ${balance} TON`;
    });
}

window.addEventListener('load', init);
