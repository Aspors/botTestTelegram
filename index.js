if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { bot } = require("./src/bot/bot");
const { mainMenu } = require("./src/mainMenu/mainMenu");
const sequelize = require("./db");

const startBot = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (e) {
    console.log("Подключение к бд сломалось", e);
  }

  bot.setMyCommands([
    { command: "/start", description: "Начальное действие бота" },
  ]);

  mainMenu();
};

startBot();
