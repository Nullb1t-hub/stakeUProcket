import { TonConnectUI } from "@tonconnect/ui";

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://stakeuprocket.github.io/webapp/tonconnect-manifest.json',
  buttonRootId: 'connect-button',
});

// Отображение баланса и адреса пользователя
tonConnectUI.onStatusChange(async (wallet) => {
  if (wallet) {
    const address = wallet.account.address;
    document.querySelector('.user-info').innerHTML = `
      <div id="balance">💎 Адрес: ${shortenAddress(address)}</div>
      <button id="disconnect-button">❌ Отключиться</button>
    `;

    // Обработка отключения
    document.getElementById('disconnect-button').onclick = () => tonConnectUI.disconnect();

    // Получение баланса (если хочешь через TonAPI — напиши, подключим)
  }
});

// Сокращённый адрес
function shortenAddress(address) {
  return address.slice(0, 6) + '...' + address.slice(-4);
}
