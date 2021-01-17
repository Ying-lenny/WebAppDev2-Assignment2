/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let personId = null
let person;
describe("Actor Details Page", () => {
  before(() => {
    //Get popular people from TMDB and store in popular variable
    cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          return response.results[4].id;
        })
      .then((arbitraryPersonIdignored) => {
        personId = arbitraryPersonIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/person/${personId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((personDetails) => {
        person = personDetails;
        return personDetails.id;
      })
  });
  beforeEach(() => {
    cy.visit("/");
    cy.wait(200)
    cy.get("button").contains("Actors").get("#dropdown-split-basic2").click().get(".dropdown-item").contains("Popular Actors").click();
    cy.wait(200)
    cy.get(".card").eq(4).find("img").click();
    cy.wait(200)
  });

  it("should display actor's name in the page header", () => {
    cy.get("h2").contains(person.name);
  });

  it("should display the actor's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(person.biography);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Name");
        cy.get("li").eq(1).contains(person.name);
        cy.get("li").eq(2).contains("Known For");
        cy.get("li").eq(3).contains(person.known_for_department);
      });
    });

  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", person.homepage);
    });

    it("should display actor's profile on the page", () => {
        cy.get("img").should('be.visible');
      });
});