// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to hover over an element
Cypress.Commands.add(
  "hover",
  { prevSubject: "element" },
  (subject, options) => {
    cy.wrap(subject).trigger("mouseover", options);
    cy.wrap(subject).trigger("mouseenter", options);
    cy.wrap(subject).trigger("mousemove", options);
    cy.wrap(subject).trigger("mouseover", { force: true }); // Ensure the event is forced
  }
);

Cypress.Commands.add("loginWithUI", (userId, password) => {
  cy.visit("https://dev-login.platform.creatingly.com/login");
  cy.get('input[name="email"]').should("be.visible").type(userId);
  cy.get('input[name="password"]').should("be.visible").type(password);
  cy.get("#recaptcha-anchor > div.recaptcha-checkbox-border").click();
});

Cypress.Commands.add("dragAndDrop", (subject, target) => {
  Cypress.log({
    name: "DRAGNDROP",
    message: `Dragging element to ${target}`,
  });

  const BUTTON_INDEX = 0;
  const SLOPPY_CLICK_THRESHOLD = 10;
  const dataTransfer = new DataTransfer();

  cy.get(target).should('be.visible').then(($target) => {
    const targetRect = $target[0].getBoundingClientRect();
    cy.get(subject).should('be.visible')
      .trigger("mousedown", {
        button: BUTTON_INDEX,
        clientX: targetRect.left + SLOPPY_CLICK_THRESHOLD,
        clientY: targetRect.top + SLOPPY_CLICK_THRESHOLD,
        force: true,
      })
      .trigger("mousemove", {
        button: BUTTON_INDEX,
        clientX: targetRect.left + targetRect.width / 2,
        clientY: targetRect.top + targetRect.height / 2,
        force: true,
      })
      .trigger("mouseup", { force: true });
  });
});
