const mineflayer = require('mineflayer');

// Sukuriame botą ir prisijungiame prie serverio
const bot = mineflayer.createBot({
  host: 'Chillkmrkarocia.aternos.me',  // Serverio IP
  port: 23210,                         // Serverio prievartas
  username: 'SERVAS24/7',                 // Bot vardas
  version: '1.21.4',                    // Minecraft versija (pakeisk jei reikia)
  auth: 'offline'                       // Jei reikia Microsoft prisijungimo, naudok 'microsoft'
});

// Kai botas prisijungia
bot.on('spawn', () => {
  console.log('✅ Botas prisijungė prie serverio!');
  bot.chat('KON JUS BALVONELIAI 🤖');
});

// Žinutės siuntimas į chat'ą kas 5 minutes
setInterval(() => {
  bot.chat('Aš vis dar čia! 🔥');
}, 300000); // 5 minutės (300 000 ms)

// Automatinis atsakymas į žaidėjų žinutes ir atsijungimo komanda
bot.on('chat', (username, message) => {
  if (username === bot.username) return; // Nereaguojame į savo paties žinutes

  console.log(`${username}: ${message}`);

  if (message.toLowerCase() === 'labas') {
    bot.chat(`Labas, ${username}! Kaip sekasi? 😊`);
  }
  if (message.toLowerCase().includes('kaip tu')) {
    bot.chat(`Aš esu botas ir jaučiuosi puikiai! 🤖`);
  }

  // Jei kas nors parašo "atsijunk" arba "quit", botas atsijungs
  if (message.toLowerCase() === 'atsijunk' || message.toLowerCase() === 'quit') {
    bot.chat('Gerai, atsijungiu... 👋');
    bot.end();
  }
});

// Anti-AFK sistema
setInterval(() => {
  if (bot.entity) {
    bot.setControlState('forward', true); // Einame pirmyn
    setTimeout(() => bot.setControlState('forward', false), 500); // Po 0.5s sustojame

    bot.setControlState('jump', true); // Šokame
    setTimeout(() => bot.setControlState('jump', false), 100); // Po 100ms sustojame
  }
}, 20000); // Kartojame kas 20 sekundžių

// Kai botas atsijungia
bot.on('end', (reason) => {
  console.log(`❌ Botas atsijungė: ${reason}`);
});

// Jei įvyksta klaida
bot.on('error', (err) => {
  console.log('⚠️ Klaida:', err);
});
