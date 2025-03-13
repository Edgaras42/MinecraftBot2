const mineflayer = require('mineflayer');

let bot;

function createBot() {
  bot = mineflayer.createBot({
    host: 'Chillkmrkarocia.aternos.me',  // Serverio IP
    port: 23210,                        // Serverio prievartas
    username: 'SERVAS24/7',              // Bot vardas
    version: '1.21.4',                   // Minecraft versija
    auth: 'offline'                      // Offline režimas
  });

  bot.on('spawn', () => {
    console.log('Botas prisijungė prie serverio!');
    sendMessagePeriodically(); // Pradeda siųsti žinutę kas 30 minučių
  });

  bot.on('end', (reason) => {
    console.log(`Botas atsijungė dėl priežasties: ${reason}`);
    // Bandykite prisijungti vėl po 3 minutės
    setTimeout(createBot, 180000); // 3 minutės
  });

  bot.on('error', (err) => {
    console.log('Klaida:', err);
    // Bandykite prisijungti vėl po 3 minutės
    setTimeout(createBot, 180000); // 3 minutės
  });
}

// Periodiškai siunčia žinutę
function sendMessagePeriodically() {
  setInterval(() => {
    if (bot && bot.chat) {
      bot.chat('Kon jus balvoneliai');
      console.log('Botas išsiuntė žinutę: "Kon jus balvoneliai"');
    }
  }, 1800000); // Kas 30 minučių (30 minutės * 60 sekundžių * 1000 milisekundės)
}

// Sukuriame pirmą botą
createBot();
