function logState({ btcPrice, market, timeRemaining, decision }) {
  console.log("------");
  console.log(`⏱️ Tempo restante: ${timeRemaining}s`);
  console.log(`💰 BTC: ${btcPrice}`);
  console.log(`📏 Distância: ${decision.distance}`);

  console.log(`📊 UP: ${market.up.toFixed(3)}`);
  console.log(`📊 DOWN: ${market.down.toFixed(3)}`);

  console.log(`🧠 Decisão: ${decision.reason}`);

  if (decision.signal) {
    console.log(`🚀 SINAL: ${decision.signal}`);
  }
}

module.exports = { logState };
