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


EXEMPLOS DE USO/TESTES

Todas as informações corretas:
![image](https://github.com/user-attachments/assets/27750ddd-91f4-4455-bc23-e1a039a48996)

CPF/Telefone incorreto: 
![image](https://github.com/user-attachments/assets/4b1b4d88-9d23-4d7e-bc82-906bfba88bed)
![image](https://github.com/user-attachments/assets/5446dc5b-465e-4aa5-8c5f-50cf697b6fb4)

Obrigatoriedade nos campos: 


![image](https://github.com/user-attachments/assets/b03540f5-d61f-45ee-b996-bc8a04561788)


MySQL WorkBench:


![image](https://github.com/user-attachments/assets/474debd3-b9ba-41b4-b9bc-db2825c655e9)


