const { AGREEMENT } = require("../modules/distribution/distributionConsts");
const { MAIN_MENU } = require("../mainMenu/mainMenuConsts");

const keyboard = {
  reply_markup: {
    keyboard: [[MAIN_MENU.WEATHER, MAIN_MENU.READ, MAIN_MENU.MESSAGE]],
    resize_keyboard: true,
  },
};

const agreeKeyboard = {
  reply_markup: {
    keyboard: [[AGREEMENT.AGREE, AGREEMENT.DISAGREE]],
  },
};

module.exports = { keyboard, agreeKeyboard };
