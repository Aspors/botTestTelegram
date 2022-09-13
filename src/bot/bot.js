if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const TelegramAPI = require("node-telegram-bot-api");

const token = process.env.TOKEN_API;

const bot = new TelegramAPI(token, { polling: true });

module.exports = { bot };
