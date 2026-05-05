// Configuracion PUBLICA (repo publico) — envio a Google Sheets via Apps Script (PoW)
// - enabled: activa/desactiva el envio en linea
// - endpoint: URL del Web App (termina en /exec)
// - powBits: dificultad del Proof-of-Work (16 recomendado; 18 mas fuerte pero mas lento)
window.GSHEETS_PUBLIC = {
  enabled: true,
  endpoint: "https://script.google.com/macros/s/AKfycbxDu7uV7XGG2cHWc50nrTNT_RtE_rovOWBsP6kQgsfZtgN3fYuaGh5zjer3fBT0qsWa/exec",
  powBits: 16
};
