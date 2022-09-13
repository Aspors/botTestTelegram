const { bot } = require("../../bot/bot");
const { imgURL, fileURL, bookCaption } = require("./readConsts");
const { sendError, ERRORS } = require("../../common/utils");

const wantToRead = async (chatId) => {
  try {
    await bot.sendPhoto(chatId, imgURL, {
      caption: bookCaption,
    });
    bot.sendChatAction(chatId, "upload_document");
    await bot.sendDocument(chatId, fileURL);
  } catch (error) {
    sendError(chatId, ERRORS.BOOK_LOADING_ERROR);
    console.log(error);
  }
};

module.exports = { wantToRead };
