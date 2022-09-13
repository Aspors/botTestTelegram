const UserModel = require("../../../models");
const { profileExists } = require("../../common/utils");
const { keyboard } = require("../../common/keyboards");
const { sendMessage, sendError, ERRORS } = require("../../common/utils");
const { GREETMESSAGE } = require("./startConsts");

const start = async (chatId, userId, userName) => {
  try {
    console.log((await profileExists(userId)).valueOf());
    if ((await profileExists(userId)).valueOf()) {
      sendMessage(chatId, GREETMESSAGE, keyboard);
    } else if (!(await profileExists(userId)).valueOf()) {
      await UserModel.create({
        id: userId,
        chatId,
        name: userName,
      });
      sendMessage(chatId, GREETMESSAGE, keyboard);
    }
  } catch (e) {
    console.log(e);
    sendError(chatId, ERRORS.DATABASE_ERROR);
  }
};

module.exports = { start };
