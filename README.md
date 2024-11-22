# Taskify


## Requisitos Técnicos
 - Backend: Node.js com Express para a criação de APIs RESTful. Use MongoDB como banco de dados.
#### Links
  - MongoDB Compass : https://www.mongodb.com/try/download/compass
  - Node : https://nodejs.org/pt
  - ExpressJs : https://expressjs.com/
  - Insomnia : https://insomnia.rest/download

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

## Rotas

1. Autenticação <br>
   - Registar: (POST)

   		 http://localhost:5000/api/v1/users/register
   - Logar: (POST)

   		 http://localhost:5000/api/v1/users/login
2. Tarefas <br>
   - Criar uma tarefa: (POST)

   		 http://localhost:5000/api/v1/tasks
   - Listar todas as tarefas:	(GET)

 			http://localhost:5000/api/v1/tasks
   - Listar uma tarefa: (GET)

 			http://localhost:5000/api/v1/tasks/id
   - Atualizar uma tarefa: (PUT)

 			http://localhost:5000/api/v1/tasks/id
   - Atualizar o estado de uma tarefa:  (PATCH)

 			http://localhost:5000/api/v1/tasks/changeStatus/id
   - Deletar uma tarefa:  (DELETE)

 			http://localhost:5000/api/v1/tasks/id

1. Filtragem <br>
   - Filtrar tarefa por Estado: (GET)

   		 http://localhost:5000/api/v1/tasks?status=Pendente
   - Filtrar tarefa por prioridade: (GET)

   		 http://localhost:5000/api/v1/users/login
   - Filtrar por Combinação: (GET)

   		 http://localhost:5000/api/v1/tasks?status=Pendente&priority=Importante
