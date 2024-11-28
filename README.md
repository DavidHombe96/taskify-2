# Taskify

- #### Contexto
	Você foi contratado para desenvolver uma aplicação de gerenciamento de tarefas chamada "Taskify". A aplicação deve permitir que os usuários criem, visualizem, atualizem e removam tarefas. Além disso, deve ser possível atribuir uma prioridade às tarefas e marcá-las como concluídas.


## Requisitos Técnicos
 - Backend: Node.js com Express para a criação de APIs RESTful. Use MongoDB como banco de dados.
#### Links
  - MongoDB Compass : https://www.mongodb.com/try/download/compass
  - MongoDB Cloud : https://cloud.mongodb.com
  - Node : https://nodejs.org/pt
  - ExpressJs : https://expressjs.com/
  - Insomnia : https://insomnia.rest/download

## Instalação Local
  - Faça o clone do repositório abaixo usando um terminal:

 		git clone https://github.com/DavidHombe96/taskify-2
- Após terminar de baixar acesse o projecto com o comando:

	  cd taskify-2
- Instale as dependências com o seu gerenciador favorito:

	  npm install ou yarn install
- Crie o ficheiro .env e configure as variáveis de ambiente:

	  MONGODB_URL_LOCAL=MONGODB_URL_LOCAL=mongodb://localhost:27017/taskify
	  ENVIRONMENT_ENV=DEV
	  JWT_TOKEN=5161e2b18bc4248630e5b082397898a29c49d7d131a30d46fa1a92fbd618b4f5
	  PORT=3001

## Funcionalidades Principais
1. Cadastro e Autenticação de Usuários [x] <br>

    - Permitir que os usuários se cadastrem na aplicação.
    - Permitir que os usuários façam login na aplicação.

2. Gerenciamento de Tarefas [x] <br>
    - Permitir que os usuários criem novas tarefas.
    - Permitir que os usuários visualizem todas as suas tarefas.
    - Permitir que os usuários atualizem uma tarefa existente.
    - Permitir que os usuários removam uma tarefa existente.
    - Permitir que os usuários marquem uma tarefa como concluída.

3. Filtragem de Tarefas [x] <br>
    - Permitir que os usuários filtrem suas tarefas por  prioridade (Necessária, Importante ou Urgente) <br>
    - Permitir que os usuários filtrem suas tarefas por status (concluídas ou pendentes).<br>

## Documentação

1. Servidor Local <br>
   - URL:

   		 http://localhost:5000/api/v1/api-docs
2. Servidor Online <br>
   - URL

   		 https://api-taskify.up.railway.app/api/v1/api-docs
