/* eslint-disable no-undef */
let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Upcoming Page", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })

  beforeEach(() => {
    cy.visit("/")
    cy.wait(200)
    cy.get("button").contains("Movies").get("#dropdown-split-basic").click().get(".dropdown-item").contains("Upcoming Movies").click();
    cy.wait(200)
  });

  describe("Home Page ", () => {
    beforeEach(() => {
      cy.visit("/")
      cy.wait(200)
    });
  })
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.wait(200)
        cy.get("h2").contains("Upcoming Movies");
        cy.wait(200)
        cy.get(".badge").contains(20);
      });
    });

    describe("Filtering", () => {
        describe("By movie title" ,() => {
          it("should display movies with 'p ' in the title", () => {
            const searchString = 'p'
            const matchingMovies = filterByTitle(movies, searchString );
            cy.get("input").clear().type(searchString) ;
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            });
          })

          it("should display movies with 'o' in the title", () => {
            const searchString = "o";
            const matchingMovies = filterByTitle(movies, searchString);
            cy.get("input").clear().type(searchString);
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            })
          })

          it("should check for movies with 'xyz' in the title to handle errors", () => {
            const searchString = "xyz";
            const matchingMovies = filterByTitle(movies, searchString);
            cy.get("input").clear().type(searchString);
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").should('not.exist');
          })
        });
    });

        describe("By movie genre", () => {
            it("should display movies with the specified genre only", () => {
              const selectedGenreId = 35;
              const selectedGenreText = "Comedy";
              const matchingMovies = filterByGenre(movies, selectedGenreId);
              cy.get("select").select(selectedGenreText); 
              cy.get(".card").should("have.length", matchingMovies.length);
              cy.get(".card").each(($card, index) => {
                cy.wrap($card)
                  .find(".card-title")
                  .should("have.text", matchingMovies[index].title);
              });      
            });

            it("should display movies with the specified genre and text only", () => {
                const searchString = "d";
                const selectedGenreId = 35;
                const selectedGenreText = "Comedy";
                const matchingGenres = filterByGenre(movies, selectedGenreId);
                const matchingMovies = filterByTitle(matchingGenres, searchString);
                cy.get("input").clear().type(searchString);
                cy.get("select").select(selectedGenreText); 
                cy.get(".card").should("have.length", matchingMovies.length);
                cy.get(".card").each(($card, index) => {
                  cy.wrap($card)
                    .find(".card-title")
                    .should("have.text", matchingMovies[index].title);
                });      
              });
            });

            describe("Adding movie to wishlist", () => {
              it("should display movies being added into the wishlist section", () => {
                cy.get(".card").eq(0).get("button").contains("Add to Wishlist").click();
                cy.get(".card").eq(1).get("button").contains("Add to Wishlist").click();
                cy.get(".card").eq(2).get("button").contains("Add to Wishlist").click();
                cy.get("button").contains("Movies").get("#dropdown-split-basic").click().get(".dropdown-item").contains("Wishlist").click();
                cy.wait(200)
                cy.get(".badge").contains(3);
                });
            });
      
      });