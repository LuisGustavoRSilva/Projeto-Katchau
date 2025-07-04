import mysql from "mysql2"

export const conexao = mysql.createConnection({
    host:"10.26.45.40",
    port:7901,
    user:"root",
    password:"123456",
    database:"katchau"
});
