
const express = require('express');
const sql = require('mssql');
const config = require('../config');
const router = express.Router();

router.get('/testlogin/:id', async (req, res) => {
    const empId = req.params.id;
    console.log('Employee ID:', empId); // Log the employee ID
    try {
        const pool =await sql.connect(config);
        const result = await pool.request()
            .input('id', sql.Int, empId) // Ensure the data type is correct
            .query('SELECT * FROM employee WHERE id = @id');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error occurred:', err.message); // Log the error message
        res.status(500).json({ message: 'server error', error: err.message });
    }
});

module.exports = router;
