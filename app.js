let userWallet = null;
let coinBalance = 0;
let totalSupply = 10000000;
const startYear = 2024;

function createWallet() {
    userWallet = `WALLET_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    document.getElementById('wallet-address').innerText = `Wallet Address: ${userWallet}`;
    showPage('gameplay-page');
}

function mineCoin() {
    const currentYear = new Date().getFullYear();
    const reward = Math.max(1000 - (currentYear - startYear), 1);

    if (totalSupply <= 0) {
        alert('No more coins available to mine!');
        return;
    }

    coinBalance += reward;
    totalSupply -= reward;

    document.getElementById('coin-balance').dataset.balance = coinBalance;
    document.getElementById('coin-balance').innerText = `Coin Balance: ${coinBalance}`;
    document.getElementById('total-supply').dataset.supply = totalSupply;
    document.getElementById('total-supply').innerText = `Total Supply: ${totalSupply}`;
}

function openSendPage() {
    showPage('send-coin-page');
}

function sendCoins() {
    const recipient = document.getElementById('recipient-address').value;
    const amount = parseInt(document.getElementById('send-amount').value);

    if (!recipient || isNaN(amount) || amount <= 0 || amount > coinBalance) {
        alert('Invalid transaction details!');
        return;
    }

    coinBalance -= amount;

    document.getElementById('coin-balance').dataset.balance = coinBalance;
    document.getElementById('coin-balance').innerText = `Coin Balance: ${coinBalance}`;
    alert(`Successfully sent ${amount} coins to ${recipient}`);
    showPage('gameplay-page');
}

function cancelSend() {
    showPage('gameplay-page');
}

function showPage(pageId) {
    document.querySelectorAll('div').forEach(div => div.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}
