const mysql = require("mysql2");

const db = mysql.createConnection({

    host: "sql3.freesqldatabase.com",
    user: "sql3833130",
    password: "VbQCVT8gze",
    database: "sql3833130",
    port: 3306

});


db.connect((err) => {

    if (err) {

        console.log("❌ Error conectando MySQL:");
        console.log(err);

        return;

    }


    console.log("✅ MySQL remoto conectado correctamente");

});


module.exports = db;