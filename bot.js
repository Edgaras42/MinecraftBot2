const mineflayer = require('mineflayer');

// Botas prisijungia prie serverio
let bot;

function createBot() {
  bot = mineflayer.createBot({
    host: 'Chillkmrkarocia.aternos.me',  // Serverio IP
    port: 23210,                        // Serverio prievartas
    username: 'SERVAS24/7',              // Bot vardas
    version: '1.21.4',                   // Minecraft versija
    auth: 'offline'                      // Offline režimas
  });

  // Kai botas prisijungia prie serverio
  bot.on('spawn', () => {
    console.log('Botas prisijungė prie serverio!');
    sendMessagePeriodically(); // Pradeda siųsti žinutę kas 30 minučių
  });

  // Kai botas atsijungia
  bot.on('end', (reason) => {
    console.log(`Botas atsijungė dėl priežasties: ${reason}`);
    // Bandykite prisijungti vėl po 60 sekundžių
    setTimeout(createBot, 60000);
  });

  // Klaidos apdorojimas
  bot.on('error', (err) => {
    console.log('Klaida:', err);
    // Bandykite prisijungti vėl po 60 sekundžių
    setTimeout(createBot, 60000);
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
