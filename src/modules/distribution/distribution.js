const { bot } = require("../../bot/bot");
const UserModel = require("../../../models");
const { AGREEMENT, MESSAGES } = require("./distributionConsts");
const { sendError, sendMessage, ERRORS } = require("../../common/utils");
const { agreeKeyboard, keyboard } = require("../../common/keyboards");

const distribution = (chatId) => {
  sendMessage(chatId, AGREEMENT.QUESTION, agreeKeyboard);

  bot.once("message", (msg) => {
    switch (msg.text) {
      case AGREEMENT.AGREE:
        sendMessage(chatId, MESSAGES.ENTER, keyboard);

        bot.once("message", async (msg) => {
          try {
            const users = await UserModel.findAll();
            users
              .filter((item) => item.id !== msg.from.id)
              .forEach(({ id }) => {
                sendMessage(
                  id,
                  `Сообщение от ${msg.from.first_name} (${msg.from.username}): ${msg.text}`
                );
              });
            sendMessage(msg.chat.id, MESSAGES.SUCCESS, keyboard);
          } catch (e) {
            console.log(e);
            sendError(msg.chat.id, ERRORS.DISTRIBUTION_ERROR);
          }
        });
        break;
      case AGREEMENT.DISAGREE:
        sendMessage(chatId, MESSAGES.ENTER_CANCEL, keyboard);
        break;
      default:
        break;
    }
  });
};

module.exports = { distribution };
