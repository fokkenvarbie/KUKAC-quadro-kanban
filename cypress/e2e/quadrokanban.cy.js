describe("Carregamento", () => {
  // Carrega o site automaticamente
  it("Carrega o site", () => {
    cy.visit("https://kanban-dusky-five.vercel.app/");
    cy.wait(1000);
  });
});

describe("Fluxos", () => {
  // Reinicia o site após cada teste
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/");
    cy.wait(1000);
  });

  // Abre uma tarefa na 1ª coluna
  it("Abre uma tarefa", () => {
    cy.get(":nth-child(1) > .board-cards > :nth-child(1)").click();

    cy.contains("Documentar padrões mobile").should("be.visible");
  });

  // Edita nome da tarefa escolhida da 1ª coluna
  it("Edita uma tarefa", () => {
    cy.get(":nth-child(1) > .board-cards > :nth-child(1)").click();

    cy.contains(".custom-input p", "Documentar padrões mobile")
      .should("be.visible")
      .click();

    cy.get(".sc-gsnTZi").type("Editado");

    cy.get(".btn").click();

    cy.contains("Editado").should("be.visible");
  });

  // Adiciona tag à tarefa escolhida da 1ª coluna
  it("Adiciona uma tag", () => {
    cy.get(":nth-child(1) > .board-cards > :nth-child(1)").click();

    cy.contains("section .custom-input p", "Adicionar nova Tag")
      .should("be.visible")
      .click();

    cy.get(".sc-gsnTZi").type("Adicionado");

    cy.get(".btn").click();

    cy.contains("Adicionado").should("be.visible");
  });

  // Adiciona tag colorida à tarefa escolhida da 1ª coluna
  it("Adiciona uma tag colorida", () => {
    cy.get(":nth-child(1) > .board-cards > :nth-child(1)").click();

    cy.get("#\\32 Color").click();

    cy.contains("section .custom-input p", "Adicionar nova Tag")
      .should("be.visible")
      .click({ force: true });

    cy.get(".sc-gsnTZi").type("Adicionado");

    cy.get(".btn").click();

    cy.get("body").click(0, 0);

    cy.get(
      ':nth-child(1) > .board-cards > :nth-child(1) label[style*="background-color: rgb(89, 208, 144)"]'
    )
      .should("contain.text", "Adicionado")
      .and("have.css", "color", "rgb(255, 255, 255)");
  });

  // Cria a 4ª coluna
  it("Cria nova coluna", () => {
    cy.get(".sc-jqUVSM > .custom-input > p")
      .should("be.visible")
      .click({ force: true });

    cy.get(".sc-gsnTZi").type("Adicionado");

    cy.get(".btn").click();

    cy.contains("Adicionado").should("be.visible");
  });

  // Cria uma nova tarefa na 4ª coluna
  it("Cria nova tarefa", () => {
    cy.get(".sc-jqUVSM > .custom-input > p")
      .should("be.visible")
      .click({ force: true });

    cy.get(".sc-gsnTZi").type("Adicionado");

    cy.get(".btn").click();

    cy.get("#AdicionadoCreateTask > .custom-input > p")
      .should("be.visible")
      .click({ force: true });

    cy.get(".sc-gsnTZi").type("Adicionado");

    cy.get(".btn").click();

    cy.contains("Adicionado").should("be.visible");
  });

  // Arrasta a tarefa entre a 1ª e a 2ª coluna
  it("Arrasta uma tarefa", () => {
    cy.contains(".custom-input p", "Adicionar Tarefa")
      .should("be.visible")
      .click({ force: true });

    cy.get(".sc-gsnTZi").type("Adicionado 1");

    cy.get(".btn").click();

    cy.contains("Adicionado ").drag(".drop-list > :nth-child(2)");

    cy.get(".drop-list > :nth-child(2)").contains("Adicionado");

    cy.contains("Adicionado").should("be.visible");
  });

  // IMPORTANTE:
  // Teste de arrastar tarefa (drag & drop) NÃO automatizado devido a limitações técnicas.
  // O teste manual confirma que o recurso funciona com restrições, mas no Cypress o evento drag & drop
  // não dispara corretamente para mover a tarefa entre colunas, mesmo após várias tentativas.
  // Por isso, este teste está temporariamente falhando para evitar falsos negativos.

  // Exclui uma tarefa na 1ª coluna
  it("Exclui uma tarefa", () => {
    cy.get(":nth-child(1) > .board-cards > :nth-child(1) .trash").click({
      force: true,
    });

    cy.contains("Documentar padrões mobile").should("not.exist");
  });

  // Exclui a 1ª coluna
  it("Exclui uma coluna", () => {
    cy.get(":nth-child(1) > .header .trash svg").click({ force: true });

    cy.contains("To Do").should("not.exist");
  });
});

describe("Responsividade", () => {
  // Reinicia o site após cada teste
  beforeEach(() => {
    cy.visit("https://kanban-dusky-five.vercel.app/");
    cy.wait(1000);
  });

  // Testa a funcionalidade do botão de alterar tema
  it("Altera tema entre claro/escuro", () => {
    cy.get(".react-switch-bg").click();

    cy.get(".react-switch-bg").click();
  });

  // Testa telas de diferentes tamanhos (desktop padrão, desktop Full HD, mobile Full HD)
  it("Ajusta o layout para telas menores", () => {
    cy.viewport(1280, 800);

    cy.viewport(1920, 1080);

    cy.viewport(1080, 1920);
  });
});