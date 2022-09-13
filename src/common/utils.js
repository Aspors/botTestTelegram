const { ERRORS } = require("./commonMessages");
const UserModel = require("../../models");
const { bot } = require("../bot/bot");

const sendMessage = (chatId, message, ...options) => {
  bot.sendMessage(chatId, message, ...options);
};

const sendError = (chatId, message) => {
  bot.sendMessage(chatId, message ?? ERRORS.SOMETHING_WENT_WRONG);
};

const profileExists = (userId) => {
  return UserModel.count({ where: { id: userId } }).then((count) => {
    if (count != 0) {
      return false;
    }
    return true;
  });
};

module.exports = { sendError, sendMessage, ERRORS, profileExists };
