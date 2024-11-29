body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: url('background.jpg') no-repeat center center fixed;
    background-size: cover;
}

.hidden {
    display: none;
}

.universe {
    position: relative;
    width: 100%;
    height: 500px;
    background: url('universe.png') no-repeat center center;
    background-size: contain;
}

#planet {
    width: 100px;
    height: 100px;
    background: url('earth.png') no-repeat center center;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

#language-selector {
    position: absolute;
    top: 10px;
    right: 10px;
}

#roadmap-page, #donation-page {
    text-align: center;
    padding: 20px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
