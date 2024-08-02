const express = require("express");
const sampQuery = require("samp-query");

const app = express();
const PORT = 3000;

const serverOptions = {
    host: "198.186.231.197",
    port: 7777
}

app.get("/onlinePlayers", (req, res) => {
    sampQuery(serverOptions, (error, response) => {
        if (error) {
            return res.status(500).json({error: "Unable to query SAMP server"});
        } 
        res.json(response.players);
    });
})

app.listen(PORT, () => {
    console.log(`[ALERT] Server is running on ${PORT}`);
})