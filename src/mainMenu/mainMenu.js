const { MAIN_MENU } = require("./mainMenuConsts");
const { start } = require("../modules/start/start");
const { getWeather } = require("../modules/weather/weather");
const { distribution } = require("../modules/distribution/distribution");
const { wantToRead } = require("../modules/read/read");
const { sendError } = require("../common/utils");
const { bot } = require("../bot/bot");
const { AGREEMENT } = require("../modules/distribution/distributionConsts");

const mainMenu = () => {
  bot.on("message", async (msg) => {
    chatId = msg.chat.id;
    userId = msg.from.id;
    userName = msg.from.username;
    try {
      switch (msg.text) {
        case "/start":
          start(chatId, userId, userName);
          break;
        case MAIN_MENU.WEATHER:
          bot.sendChatAction(chatId, "typing");
          getWeather(chatId);
          break;
        case MAIN_MENU.READ:
          wantToRead(chatId);
          break;
        case MAIN_MENU.MESSAGE:
          distribution(chatId);
          break;
        case AGREEMENT.AGREE:
          break;
        case AGREEMENT.DISAGREE:
          break;
        default:
          break;
      }
    } catch (e) {
      console.log(e);
      sendError(chatId);
    }
  });
};

module.exports = { mainMenu };
