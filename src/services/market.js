async function getMarketPrices() {
  // initial simulation
  return {
    up: Math.random() * (0.6 - 0.4) + 0.4,
    down: Math.random() * (0.6 - 0.4) + 0.4,
  };
}

module.exports = { getMarketPrices };
