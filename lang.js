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

function changeLanguage() {
    const selectedLang = document.getElementById('language').value;
    const t = translations[selectedLang];

    document.getElementById('title').innerText = t.title;
    document.getElementById('description').innerText = t.description;
    document.getElementById('create-wallet-btn').innerText = t.createWalletBtn;
    document.getElementById('gameplay-title').innerText = t.gameplayTitle;
    document.getElementById('send-coins-btn').innerText = t.sendCoinsBtn;
    document.getElementById('send-title').innerText = t.sendTitle;
    document.getElementById('recipient-address').placeholder = t.recipientPlaceholder;
    document.getElementById('send-amount').placeholder = t.amountPlaceholder;
    document.getElementById('send-coin-btn').innerText = t.sendCoinBtn;
    document.getElementById('cancel-btn').innerText = t.cancelBtn;

    updateDynamicText(t);
}

function updateDynamicText(t) {
    const balance = document.getElementById('coin-balance').dataset.balance || 0;
    const supply = document.getElementById('total-supply').dataset.supply || 10000000;

    document.getElementById('coin-balance').innerText = `${t.coinBalance} ${balance}`;
    document.getElementById('total-supply').innerText = `${t.totalSupply} ${supply}`;
}

document.addEventListener('DOMContentLoaded', changeLanguage);
