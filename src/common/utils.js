const { ERRORS } = require("./commonMessages");
const UserModel = require("../../models");
const { bot } = require("../bot/bot");

const sendMessage = (chatId, message, ...options) => {
  bot.sendMessage(chatId, message, ...options);
};

const sendError = (chatId, message) => {
  bot.sendMessage(chatId, message ?? ERRORS.SOMETHING_WENT_WRONG);
};

const profileExists = async (userId) => {
  return UserModel.findOne({ where: { id: userId } })
    .then((token) => token !== null)
    .then((isUnique) => isUnique);
};

module.exports = { sendError, sendMessage, ERRORS, profileExists };
