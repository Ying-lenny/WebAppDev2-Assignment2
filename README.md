# Assignment 1 - ReactJS app.

Name: Owen Lenihan

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - Added upcoming movies and wishlist pages to track movies that are coming out soon and add them to a wishlist 
 + Feature 2 - .Added popular person and person of interest pages to track Actors that are popular and add them to a page tracking people of interest
 + Feature 3 - Added latest person and newcomers pages which were intended to track the latest people created on IMDB but I couldn't get the page to work in time so I cannot confirm any details on the page's status.
+ Feature 4 - Replaced the original menu on the site with a new dropdown menu using react bootstrap, referenced below in references

## Setup requirements (If required).

 Below is the line you need to run in the intergrated terminal to view the dropdown menu

...... npm install react-bootstrap bootstrap ........

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/reviews - get reviews for a specific movie
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies
+ https://api.themoviedb.org/3/person/popular - get a list of popular people
+ https://api.themoviedb.org/3/person/latest - get a lit of the latest people
+ https://api.themoviedb.org/3/person/${id} - get detailed information on a specific person

## App Design.

### Component catalogue

....... Updated Storybook view .......

![][storiesUpdated]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][homepage]
> Shows page with a list of movies marked as discover. Clicking on a card will take you to that movie's details. Has a button on each card which add the movie to a separate page that tracks favorite movies

![][favoritePage]
> Shows page with a list of movies added from the wishlist movies page. Clicking on a card will take you to that movie's details

![][movieDetail]
> Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
> Shows the full text for a movie review. 

![][upcomingList]
> Shows page with a list of movies which are coming out soon. Clicking on a card will take you to that movie's details. Has a button on each card which add the movie to a wishlist

![][wishlistPage]
> Shows page with a list of movies added from the wishlist movies page. Clicking on a card will take you to that movie's details

![][popularPage]
> Shows page with a list of popular actors. Clicking on a card will take you to that actor's details. Has a button on each card which add the actor to a person of interest page

![][personDetail]
> Shows detailed information on a person.

![][interestPage]
> Shows page with a list of actors added from the popular actors page. Clicking on a card will take you to that actor's details

![][personLatest]
> This was meant to show a page with a list of the latest actors. However I couldn't get the list to display so this page is empty

![][personUpcoming]
> Would've shown a page with a list of actors added from the latest actors page. Clicking on a card would've taken you to that actor's details. No actors to add from the latest actors page

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /movies/wishlist - displays the user's wishlisted movies selection.
+ /person/interest - displays the user's People of Interest selection.
+ /reviews/form - displays the a form to add to movies selection.
+ /movies/upcoming - displays the upcoming movies selection.
+ /person/popular - displays the popular actors selection.
+ /person/latest - displays the latest actors selection.
+ /person/newcomers - displays the user's newcomers actors selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/:id - displays the details on a specific movie chosen.
+ /person/:id - displays the details on a specific actor chosen.
+ / Returns the user to the homepage

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
> Clicking the 'Full Review' for a review extract will display the full text of the review

![][peopleCardLink]
> Clicking a card causes the display of that actor's details.

![][peopleMenuLink]
> Clicking a link on the meny causes changes the page to display that list of actors.

![][movieMenuLink]
> Clicking a link on the meny causes changes the page to display that list of movies.

## Independent learning.

Added a customer dropdown display menu system using react bootstrap. Link referenced below

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Owen Lenihan 

## App Features.

+ Feature 1 - Reworked and created various E2E tests to test various aspects of the site such as navigation and actor name searching with proper test documentation
+ Feature 2 - Added Continuous Intergrations features by connecting the project to gitlabs to test the cypress tests online and linked to a cypress dashboard to view recording

![][cypressDashboard]

![][cypressPipeline]


+ Feature 3 - Added code bundling to ease burden on app as parts of the site are loaded as they are required instead of all at once

![][CodeBundling]

+ Homepage: Shows a collection of movies with dropdown menus leading to movie and actor releated pages.

Tests: cypress/integration/home-page.spec.js

![][homepage]

 
+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails.spec.js 


![][movieDetail]

+ Movie Review page: Displays the full text of a movie review.

![][review]


+ Navigation: Move between pages using a custom dropdown menu using bootstrap.

Tests: cypress/integration/navigation.spec.js

![][navigation]


+ Person Detail Page: Shows the details about a movie.

Tests: cypress/integration/personDetails-page.spec.js

![][personDetail]


+ Popular Person Page: Shows a list of popular people and a button to add them to another page called People of Interest.

Tests: cypress/integration/popular-page.spec.js

![][popularPage]

![][interestPage]


+ Upcoming Page: Shows a list of upcoming movies and a button to add them to another page called Wishlisted Movies.

Tests: cypress/integration/upcoming-page.spec.js

![][upcomingList]

![][wishlistPage]

## Testing.

Cypress Dashboard URL: ... https://dashboard.cypress.io/projects/ew272a/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D .....

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/movieReviewPage.spec.js - test the movieReview page when the Review id is invalid. 
+ cypress/integration/movieDetails.spec.js - test when a movie has no reviews.
+ etc

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).

Page used to create dropdown menu for site header
https://react-bootstrap.github.io/components/dropdowns/?fbclid=IwAR2tgimOzUD9PDYMqmiTU-gbe4y8pcQoLqL_zmEi9PdGAiXsuzHJxVKtZ6Y#split-button-dropdowns

---------------------------------
[homepage]: ./public/homepage.png
[interestPage]: ./public/interestPersonPage.png
[movieDetail]: ./public/movieDetail.png
[navigation]: ./public/navigation.png
[personDetail]: ./public/personDetail.png
[popularPage]: ./public/popularPersonPage.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewlink.png
[stories]: ./public/storybook.png
[storiesUpdated]: ./public/StorybookUpdated.png
[upcomingList]: ./public/upcomingMoviePage.png
[interestPage]: ./public/interestPersonPage.png
[cardLink]: ./public/cardlink.png
[wishlistPage]: ./public/wishlistMoviePage.png
[CodeBundling]: ./public/codeBundling.png
[cypressDashboard]: ./public/cypressDashboard.png
[cypressPipeline]: ./public/cypressPipeline.png
[peopleCardLink]: ./public/peopleCardLink.png
[peopleMenuLink]: ./public/peopleMenuLink.png
[movieMenuLink]: ./public/movieMenuLink.png
[favoritePage]: ./public/favoriteMoviePage.png
[personLatest]: ./public/latestPersonPage.png
[personNewcoming]: ./public/personNewcomingPage.png
