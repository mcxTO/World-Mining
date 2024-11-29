const totalSupply = 10000000000000;
let minedCoins = 0;
let coinBalance = 0;

const translations = {
    en: {
        title: "Earth Mining",
        description: "Start mining your coins by tapping the Earth!",
        createWalletBtn: "Create Wallet",
        gameplayTitle: "Earth Mining Game",
        sendCoinsBtn: "Send Coins",
        sendTitle: "Send Your Coins",
        recipientPlaceholder: "Recipient Wallet Address",
        amountPlaceholder: "Amount to Send",
        sendCoinBtn: "Send",
        cancelBtn: "Cancel",
        coinBalance: "Coin Balance:",
        totalSupply: "Total Supply:"
    },
    id: {
        title: "Penambangan Bumi",
        description: "Mulailah menambang koin Anda dengan mengetuk Bumi!",
        createWalletBtn: "Buat Dompet",
        gameplayTitle: "Permainan Penambangan Bumi",
        sendCoinsBtn: "Kirim Koin",
        sendTitle: "Kirim Koin Anda",
        recipientPlaceholder: "Alamat Dompet Penerima",
        amountPlaceholder: "Jumlah untuk Dikirim",
        sendCoinBtn: "Kirim",
        cancelBtn: "Batal",
        coinBalance: "Saldo Koin:",
        totalSupply: "Total Pasokan:"
    }
};

function updateRemainingCoins() {
    const remainingCoins = totalSupply - minedCoins;
    document.getElementById('remaining-coins-value').innerText = remainingCoins.toLocaleString();
}

function mineCoin() {
    minedCoins += 100;
    if (minedCoins > totalSupply) minedCoins = totalSupply;
    updateRemainingCoins();
}

function sendCoins() {
    const recipient = document.getElementById('recipient-address').value;
    const amount = parseInt(document.getElementById('send-amount').value);

    if (!recipient || isNaN(amount) || amount <= 0 || amount > coinBalance) {
        alert('Invalid transaction details!');
        return;
    }

    coinBalance -= amount;
    updateBalanceDisplay();
}

function updateBalanceDisplay() {
    document.getElementById('coin-balance').innerText = `Coin Balance: ${coinBalance}`;
}

function changeLanguage() {
    const selectedLang = document.getElementById('language').value;
    const t = translations[selectedLang];
    document.getElementById('title').innerText = t.title;
    document.getElementById('description').innerText = t.description;
    document.getElementById('gameplay-title').innerText = t.gameplayTitle;
    document.getElementById('send-coins-btn').innerText = t.sendCoinsBtn;
    document.getElementById('recipient-address').placeholder = t.recipientPlaceholder;
    document.getElementById('send-amount').placeholder = t.amountPlaceholder;
    document.getElementById('send-coin-btn').innerText = t.sendCoinBtn;
}

document.addEventListener('DOMContentLoaded', updateRemainingCoins);
document.getElementById('mine-btn').addEventListener('click', mineCoin);
document.getElementById('send-coin-btn').addEventListener('click', sendCoins);
document.getElementById('language').addEventListener('change', changeLanguage);
