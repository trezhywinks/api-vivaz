//console.log("ok")

const express = require("express");
const app = express();

app.get("/pack_pack_pack_vivo.json", (req, res) => {

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  res.status(403).json({
    erro: "err! try again",
    ip: ip
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});
