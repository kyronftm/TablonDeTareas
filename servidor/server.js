const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'tareas'
})

app.get('/',(req, res) => {
    const sql = "SELECT * FROM tarea;";
    db.query(sql, (err, data) => {
        if (err) return console.log("Error");
        return res.json(data);
    })
})

app.post('/crear', (req, res) => {
    const sql = "INSERT INTO `tarea`(`Materia`, `Titulo`, `FechaInicial`, `FechaEntrega`, `Prioridad`, `Notas`) VALUES (?);";
    const values = [req.body.Materia, req.body.Titulo, req.body.FechaInicial, req.body.FechaEntrega, req.body.Prioridad, req.body.Notas];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.put('/actualizar/:id', (req, res) => {
    const sql = "UPDATE `tarea` SET `Materia` = ?, `Titulo` = ?, `FechaInicial` = ?, `FechaEntrega` = ?, `Prioridad` = ?, `Notas` = ? WHERE `tarea`.`id` = ?;";
    const values = [req.body.Materia, req.body.Titulo, req.body.FechaInicial, req.body.FechaEntrega, req.body.Prioridad, req.body.Notas];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.delete('/estudiante/:id', (req, res) => {
    const sql = "DELETE FROM `tarea` WHERE `tarea`.`id` = ?;";
    const id = req.params.id;
    db.query(sql,[id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log(`Listening on 8081`);
});


