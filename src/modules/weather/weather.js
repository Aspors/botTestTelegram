if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const axios = require("axios").default;
const { sendMessage, sendError, ERRORS } = require("../../common/utils");
const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Ottawa,ca&lang=ru&appid=${weatherApiKey}`;

const getWeather = async (chatId) => {
  try {
    const response = await axios.get(weatherURL);
    const { main } = response.data.weather[0];
    const { temp, feels_like, humidity } = response.data.main;
    sendMessage(
      chatId,
      `Данные о погоде в Канаде:
      В Канаде сейчас: ${main}
      Температура: ${Math.floor(temp - 273)} °C
      Ощущается, как: ${Math.floor(feels_like - 273)} °C 
      Влажность: ${humidity}%
          `
    );
  } catch (error) {
    sendError(chatId, ERRORS.RETRY);
    console.log(error);
  }
};

module.exports = { getWeather };
