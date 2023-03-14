const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6219629274:AAFhTwNv4yktuE66y2nKmv-fB_wzKnCLBV4';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


// GROUP CHAT BOT
const chatIdgroup = '-807193417';
// bot.sendMessage(chatIdgroup, 'Ini adalah pesan notifikasi yang dikirim dari bot Telegram.');
const exec = require('child_process').exec;
// Command to run
const command = 'free';

// Run the command and send the output to the chat
exec(command, function(error, stdout, stderr) {
  if (error) {
    bot.sendMessage(chatIdgroup, `Error: ${error.message}`);
    return;
  }
  if (stderr) {
    bot.sendMessage(chatIdgroup, `Error: ${stderr}`);
    return;
  }
  bot.sendMessage(chatIdgroup, `Output: ${stdout}`);
});
// END GROUP CHAT BOT





// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;
    bot.sendMessage(chatId, `Welcome ${firstName}`);
    
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
    const Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(chatId,"Hello dear user");  
    }
});