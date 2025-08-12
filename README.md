<h1>Quadro Kanban - Teste Técnico.</h1>
Este projeto foi desenvolvido para um teste técnico da empresa Kukac, cujo foco principal foi construir um relatório detalhado dos problemas encontrados no frontend do site https://kanban-dusky-five.vercel.app/, além de realizar um desafio opcional criando um conjunto de scripts de testes automatizados E2E usando Cypress.

<h2>Objetivo:</h2>
• Avaliar a interface e experiência do usuário do Quadro Kanban.<br>
• Identificar limitações e pontos de melhoria em funcionalidades essenciais como criação, edição e exclusão.<br>
• Validar aspectos básicos de responsividade.<br>
• Automatizar testes que cubram os principais fluxos funcionais da aplicação.<br>

<h2>Testes automatizados realizados:</h2>
<h3>Carregamento:</h3>
• Visita o site e aguarda seu carregamento.<br>

<h3>Fluxos:</h3>
• <b>Abrir uma tarefa</b>: Confirma que é possível abrir a primeira tarefa da primeira coluna.<br>
• <b>Editar uma tarefa</b>: Realiza edição do nome de uma tarefa aberta e valida a alteração.<br>
• <b>Adicionar tag</b>: Adiciona uma nova tag a uma tarefa e verifica se foi adicionada.<br>
• <b>Adicionar tag colorida</b>: Adiciona uma tag com cor específica e valida estilo CSS e conteúdo.<br>
• <b>Criar nova coluna</b>: Cria uma nova coluna e confirma sua existência.<br>
• <b>Criar nova tarefa na nova coluna</b>: Insere uma nova tarefa na quarta coluna criada e valida sua presença.<br>
• <b>Arrastar tarefa entre colunas</b>: Tenta realizar drag & drop da tarefa entre colunas; entretanto, este teste está marcado como não totalmente automatizado devido a limitações técnicas do Cypress com eventos drag & drop nesta aplicação.<br>
• <b>Excluir tarefa</b>: Remove uma tarefa da primeira coluna e valida sua remoção.<br>
• <b>Excluir coluna</b>: Remove a primeira coluna e confirma que não está mais visível.<br>

<h3>Responsividade:</h3>
• <b>Alternar tema claro/escuro:</b> Testa o funcionamento do botão de troca de tema.<br>
• <b>Testar diferentes resoluções de tela:</b> Analisa o comportamento do layout em resoluções desktop e mobile simuladas.
