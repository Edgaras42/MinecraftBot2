const mineflayer = require('mineflayer');

// Sukuriame botą ir prisijungiame prie serverio
const bot = mineflayer.createBot({
  host: 'Chillkmrkarocia.aternos.me',  // Serverio IP
  port: 23210,                        // Serverio prievartas
  username: 'SERVAS24/7',              // Bot vardas
  version: '1.21.4',                   // Minecraft versija
  auth: 'offline'                      // Offline režimas
});

bot.on('spawn', () => {
  console.log('Botas prisijungė prie serverio!');
});

bot.on('end', (reason) => {
  console.log(`Botas atsijungė dėl priežasties: ${reason}`);
});

bot.on('error', (err) => {
  console.log('Klaida:', err);
});
