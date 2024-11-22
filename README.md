# Taskify


## Requisitos Técnicos
 - Backend: Node.js com Express para a criação de APIs RESTful. Use MongoDB como banco de dados.
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

   1. Usuários <br>

     Registo: http://localhost:5000/api/v1/users/register (POST)
     Login: http://localhost:5000/api/v1/users/login (POST)

   2. Tarefas <br>

     Criar uma tarefa: http://localhost:5000/api/v1/tasks (POST)

     Listar todas as tarefas: http://localhost:5000/api/v1/tasks (GET)

     Listar uma tarefas: http://localhost:5000/api/v1/tasks/id (GET)

     Atualizar a tarefa: http://localhost:5000/api/v1/tasks/id  (PUT)

     Atualizar o estado da tarefa: http://localhost:5000/api/v1/tasks/changeStatus/id  (PATCH)

     Deleta a tarefa: http://localhost:5000/api/v1/tasks/id  (DELETE)
   3. Filtragem <br>

     Filtrar tarefa por Estado: http://localhost:5000/api/v1/tasks?status=Pendente (GET)

     Filtrar tarefa por prioridade: http://localhost:5000/api/v1/tasks?priority=Importante (GET)

     Filtrar por Combinação: http://localhost:5000/api/v1/tasks?status=Pendente&priority=Importante (GET)


