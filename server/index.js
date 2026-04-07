//console.log("ok")

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/pack_pack_pack_vivo.json", (req, res) => {

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  res.status(403).json({
    erro: "err! try again",
    ip: ip
  });
});

//const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running in " + PORT);
});
