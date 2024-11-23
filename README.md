# Taskify

## Contexto
Você foi contratado para desenvolver uma aplicação de gerenciamento de tarefas chamada "Taskify". A aplicação deve permitir que os usuários criem, visualizem, atualizem e removam tarefas. Além disso, deve ser possível atribuir uma prioridade às tarefas e marcá-las como concluídas.


## Requisitos Técnicos
 - Backend: Node.js com Express para a criação de APIs RESTful. Use MongoDB como banco de dados.
#### Links
  - MongoDB Compass : https://www.mongodb.com/try/download/compass
  - MongoDB Cloud : https://cloud.mongodb.com
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

   		 https://api-taskify.up.railway.app/api/v1/users/register
   - Logar: (POST)

   		 https://api-taskify.up.railway.app/api/v1/users/login
2. Tarefas <br>
   - Criar uma tarefa: (POST)

   		 https://api-taskify.up.railway.app/api/v1/tasks
   - Listar todas as tarefas:	(GET)

 		 https://api-taskify.up.railway.app/api/v1/tasks
   - Listar uma tarefa: (GET)

 		 https://api-taskify.up.railway.app/api/v1/tasks/id
   - Atualizar uma tarefa: (PUT)

 		 https://api-taskify.up.railway.app/api/v1/tasks/id
   - Atualizar o estado de uma tarefa:  (PATCH)

 		 https://api-taskify.up.railway.app/api/v1/tasks/changeStatus/id
   - Deletar uma tarefa:  (DELETE)

 		 https://api-taskify.up.railway.app/api/v1/tasks/id

3. Filtragem <br>
   - Filtrar tarefa por Estado: (GET)

   		 https://api-taskify.up.railway.app/api/v1/tasks?status=Pendente
   - Filtrar tarefa por Prioridade: (GET)

   		 https://api-taskify.up.railway.app/api/v1/tasks?priority=Urgente
   - Filtrar por Combinação: (GET)

   		 https://api-taskify.up.railway.app/api/v1/tasks?status=Pendente&priority=Importante
