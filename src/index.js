const { getBTCPrice } = require("./services/btc");
const { getMarketPrices } = require("./services/market");
const { evaluate } = require("./strategy/decision");
const { logState } = require("./utils/logger");

const MARKET_DURATION = 15 * 60; // 15 min
let startTime = Math.floor(Date.now() / 1000);

function getTimeRemaining() {
  const now = Math.floor(Date.now() / 1000);
  return MARKET_DURATION - (now - startTime);
}

async function loop() {
  const timeRemaining = getTimeRemaining();

  if (timeRemaining <= 0) {
    console.log("🏁 Mercado finalizado");
    process.exit();
  }

  const btcPrice = await getBTCPrice();
  const market = await getMarketPrices();

  const decision = evaluate({
    btcPrice,
    market,
    timeRemaining,
  });

  logState({ btcPrice, market, timeRemaining, decision });
}

// loop lento no início
setInterval(loop, 10000);

// loop rápido no final
setInterval(() => {
  const timeRemaining = getTimeRemaining();
  if (timeRemaining <= 120) {
    loop();
  }
}, 3000);
