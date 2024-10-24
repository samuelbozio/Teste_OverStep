![image](https://github.com/user-attachments/assets/0c4cf901-8688-49e2-9ea3-adfd76b2670d)






Query que utilizei para criar o banco de dados:

CREATE DATABASE IF NOT EXISTS cadastroclientes;

USE cadastroclientes;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    fone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    estado_civil VARCHAR(50) NOT NULL
);

----------------------------------------

Para rodar o projeto, estou usando:
├── body-parser@1.20.3
├── cors@2.8.5
├── express@4.21.1
└── mysql2@3.11.3

Se o npm install por acaso não baixar todos os pacotes, segue a linha de comando para cada um:

├── npm install body-parser
├── npm install cors
├── npm install express
└── npm install mysql2


-> Para iniciar a API, precisamos digitar no terminal: node api.js


-> BOTÃO APAGAR: Para apagar, a fim de não complexar desnecessáriamente, basta apenas manter o CPF no seu campo, 
e clicar no botão apagar.
