const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all employees and their department 
router.get('/employees', (req, res) => {
    const sql = `SELECT employees.*, department.name 
                AS department_name 
                FROM employees 
                LEFT JOIN departments 
                ON cemployees.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Get single employee with department 
router.get('/employee/:id', (req, res) => {
    const sql = `SELECT employees.*, department.name 
               AS department_name 
               FROM employees 
               LEFT JOIN department 
               ON employees.department_id = department.id 
               WHERE employees.id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// Create a employee
router.post('/employee', ({ body }, res) => {
    const errors = inputCheck(
        body,
        'first_name',
        'last_name',
        'industry_connected'
    );
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `INSERT INTO employees (first_name, last_name, industry_connected, department_id) VALUES (?,?,?,?)`;
    const params = [
        body.first_name,
        body.last_name,
        body.industry_connected,
        body.department_id
    ];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// Update a employee's department
router.put('/employee/:id', (req, res) => {
    const errors = inputCheck(req.body, 'department_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `UPDATE employees SET department_id = ? 
               WHERE id = ?`;
    const params = [req.body.department_id, req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'employee not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

// Delete a employee
router.delete('/employee/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;

    db.query(sql, req.params.id, (err, result) => {
        if (err) {
            res.status(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'employee not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});

module.exports = router;