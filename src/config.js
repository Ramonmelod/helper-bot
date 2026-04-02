require("dotenv").config();

module.exports = {
  TARGET_PRICE: parseFloat(process.env.TARGET_PRICE),
  TARGET_DISTANCE_ALERT: parseFloat(process.env.TARGET_DISTANCE_ALERT),
  MAX_ENTRY_PRICE: parseFloat(process.env.MAX_ENTRY_PRICE),
  TIME_WINDOW: parseInt(process.env.TIME_WINDOW),
};
