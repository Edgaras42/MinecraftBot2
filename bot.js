const mineflayer = require('mineflayer');

// Funkcija, kuri sukuria botą
function startBot() {
    const bot = mineflayer.createBot({
        host: 'Chillkmrkarocia.aternos.me',  // 🔹 Serverio IP
        port: 23210,                         // 🔹 Serverio prievartas
        username: 'SERVAS24/7',               // 🔹 Bot vardas
        version: false,                       // 🔹 Automatiškai nustato versiją
        auth: 'offline'                       // 🔹 „Offline“ režimas (naudoti 'microsoft' jei premium)
    });

    bot.on('spawn', () => {
        console.log('✅ Botas prisijungė prie serverio!');
        bot.chat('Labas! Aš prisijungiau 🚀');
    });

    // 🔄 **Anti-AFK** – juda kas 20 sekundžių
    setInterval(() => {
        if (bot.entity) {
            bot.setControlState('forward', true);
            setTimeout(() => bot.setControlState('forward', false), 500);
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 100);
        }
    }, 20000);

    // 📩 **Klausosi žaidėjų žinučių**
    bot.on('chat', (username, message) => {
        if (username === bot.username) return; // Ignoruojame savo žinutes

        if (message.toLowerCase() === 'atsijunk' || message.toLowerCase() === 'quit') {
            bot.chat('Atsijungiu... 👋');
            bot.end();
        }

        if (message.toLowerCase() === 'labas') {
            bot.chat(`Labas, ${username}! 👋`);
        }
    });

    // 📅 **Kas 30 minučių išsiųs žinutę**
    setInterval(() => {
        if (bot.entity) {
            bot.chat('Kon jus balvoneliai');
        }
    }, 1800000);
