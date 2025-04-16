/* eslint-disable */

describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Contains correct header text", () => {
    cy.getDataTest("fundamentals-header")
      .should("have.css", "font-family")
      .and("match", /Just Me Again Down Here/i);
  });

  it("Dropdown works correctly", () => {
    cy.getDataTest("mobile-dropdown-option").should("not.to.exist");
    cy.getDataTest("mobile-dropdown-btn").click();
    cy.getDataTest("mobile-dropdown-option").should("be.visible");
    cy.getDataTest("mobile-dropdown-btn").click();
    cy.getDataTest("mobile-dropdown-option").should("not.to.exist");
  });
});
