const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const connection = mysql.createConnection({
    host: '127.0.0.1',  
    port: 3307,
    user: 'root',
    password: '102030',
    database: 'cadastroclientes'
});


connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});


app.post('/validar', (req, res) => {
    const { nome, cpf, fone, email, estadoCivil } = req.body;


    if (!nome || !cpf || !fone || !email || !estadoCivil) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }


    if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf)) {
        return res.status(400).json({ message: 'CPF inválido!' });
    }


    const query = 'INSERT INTO usuarios (nome, cpf, fone, email, estado_civil) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [nome, cpf, fone, email, estadoCivil], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados no MySQL:', err);
            return res.status(500).json({ message: 'Erro ao gravar os dados no banco de dados.' });
        }
        res.status(200).json({ message: 'Dados gravados com sucesso!' });
    });
});


app.post('/apagar', (req, res) => {
    const { cpf } = req.body;

    if (!cpf) {
        return res.status(400).json({ message: 'O CPF é obrigatório!' });
    }

    const query = 'DELETE FROM usuarios WHERE cpf = ?';

    connection.query(query, [cpf], (error, results) => {
        if (error) {
            console.error('Erro ao apagar os dados:', error);
            return res.status(500).json({ message: 'Erro ao apagar os dados.' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'CPF não encontrado.' });
        }

        return res.status(200).json({ message: 'Dados apagados com sucesso!' });
    });
});


app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
