const sql =require('mssql')
const express =require('express')

const config ={
    user: "sa",
    password:"12345678",
    server :'127.0.0.1',
    database:'testlogin',
    synchronize: true,
    options: {
        encrypt: false, 
        trustServerCertificate: true,
        enableArithAbort: true
    },
    port: 1433,
};
// async function connectToDatabase(){
//     try{
//         const pool = await sql.connect(config);
//        console.log('Connected to MSSQL');
//         return pool;
//     }catch(err){
//         console.error('database connection failed',err);
//         throw err;
//     }
// }
module.exports =config;