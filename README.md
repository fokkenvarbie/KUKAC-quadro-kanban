<h1>Quadro Kanban</h1>
Este projeto foi desenvolvido para um teste técnico da empresa Kukac, cujo foco principal foi construir um relatório detalhado dos problemas encontrados no frontend do site https://kanban-dusky-five.vercel.app/, além de realizar um desafio opcional criando um conjunto de scripts de testes automatizados ponta-a-ponta (E2E) usando Cypress.

<h2>Objetivo</h2>
  - Avaliar a interface e experiência do usuário do Quadro Kanban.<br>
  - Identificar limitações e pontos de melhoria em funcionalidades essenciais como criação, edição e exclusão.<br>
  - Validar aspectos básicos de responsividade.<br>
  - Automatizar testes que cubram os principais fluxos funcionais da aplicação.<br>

<h2>Testes automatizados realizados</h2>

• Funcionalidade:
  - **Carregamento**: Visita o site e aguarda seu carregamento completo.<br>

• Fluxos:
  - **Abrir uma tarefa**: Confirma que é possível abrir a primeira tarefa da primeira coluna.<br>
  - **Editar uma tarefa**: Realiza edição do nome de uma tarefa aberta e valida a alteração.<br>
  - **Adicionar tag**: Adiciona uma nova tag a uma tarefa e verifica se foi adicionada.<br>
  - **Adicionar tag colorida**: Adiciona uma tag com cor específica e valida estilo CSS e conteúdo.<br>
  - **Criar nova coluna**: Cria uma nova coluna e confirma sua existência.<br>
  - **Criar nova tarefa na nova coluna**: Insere uma nova tarefa na quarta coluna criada e valida sua presença.<br>
  - **Arrastar tarefa entre colunas**: Tenta realizar drag & drop da tarefa entre colunas; entretanto, este teste está marcado como não totalmente automatizado devido a limitações técnicas do Cypress com eventos drag & drop nesta aplicação.<br>
  - **Excluir tarefa**: Remove uma tarefa da primeira coluna e valida sua remoção.<br>
  - **Excluir coluna**: Remove a primeira coluna e confirma que não está mais visível.<br>

• Responsividade:
  - <b>Alternar tema claro/escuro:</b> Testa o funcionamento do botão de troca de tema.<br>
  - <b>Testar diferentes resoluções de tela:</b> Analisa o comportamento do layout em resoluções desktop e mobile simuladas.
