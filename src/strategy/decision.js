const {
  TARGET_PRICE,
  TARGET_DISTANCE_ALERT,
  MAX_ENTRY_PRICE,
} = require("../config");

function evaluate({ btcPrice, market, timeRemaining }) {
  const distance = Math.abs(btcPrice - TARGET_PRICE);

  let signal = null;

  // só entra perto do fim e perto da linha
  const nearLine = distance <= TARGET_DISTANCE_ALERT;
  const lateGame = timeRemaining <= 120;

  if (!nearLine || !lateGame) {
    return { signal: null, reason: "fora do cenário ideal", distance };
  }

  // lógica simples de edge inicial
  if (market.down < MAX_ENTRY_PRICE) {
    signal = "BUY_DOWN";
  } else if (market.up < MAX_ENTRY_PRICE) {
    signal = "BUY_UP";
  }

  return {
    signal,
    distance,
    reason: signal ? "edge possível detectado" : "sem edge claro",
  };
}

module.exports = { evaluate };
