const axios = require("axios");

async function getBTCPrice() {
  const res = await axios.get(
    "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
  );
  return parseFloat(res.data.price);
}

module.exports = { getBTCPrice };
