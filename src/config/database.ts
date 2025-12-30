import mysql from "mysql2/promise";

const getConnection = async () =>{
    const connection = await mysql.createConnection({
        port:3306,
        host: "localhost",
        user: "root",
        password: "thanh21112002",
        database: "nodejsbxt",
    });
    return connection;
}



export  {getConnection};