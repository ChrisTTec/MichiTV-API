const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {

    res.send("🐱 MichiTV API funcionando");

});


app.get("/api/channels", (req, res) => {


    const sql = `
        SELECT
            id,
            nombre AS name,
            categoria AS category,
            logo,
            url AS streamURL
        FROM channels
        WHERE activo = 1
        ORDER BY nombre ASC
    `;


    db.query(sql, (err, results) => {


        if (err) {

            console.error("Error MySQL:", err);

            return res.status(500).json({
                error: "Error obteniendo canales"
            });

        }


        const channels = results.map(channel => ({

            id: channel.id,
            name: channel.name,
            logo: channel.logo,
            streamURL: channel.streamURL,
            category: channel.category,
            favorite: false

        }));


        return res.json(channels);


    });


});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`🐱 MichiTV API funcionando en puerto ${PORT}`);

});