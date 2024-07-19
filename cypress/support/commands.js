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
Cypress.Commands.add('hover', { prevSubject: 'element' }, (subject, options) => {
    cy.wrap(subject).trigger('mouseover', options);
    cy.wrap(subject).trigger('mouseenter', options);
    cy.wrap(subject).trigger('mousemove', options);
    cy.wrap(subject).trigger('mouseover', {force: true}); // Ensure the event is forced
  });