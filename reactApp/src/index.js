/* eslint-disable no-unused-vars */
import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const WishlistMoviesPage = lazy(() => import("./pages/wishlistMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const SiteHeader = lazy(() => import("./components/siteHeader"));
const UpcomingMoviePage = lazy(() => import("./pages/upcomingMoviePage"));
const MoviesContextProvider = lazy(() => import("./contexts/moviesContext"));
const GenresContextProvider = lazy(() => import("./contexts/genresContext"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));

//People Page
const PersonPage = lazy(() => import("./pages/peopleDetailPage"));
const PeopleContextProvider = lazy(() => import("./contexts/peopleContext"));
const peoplePopularPage = lazy(() => import("./pages/peoplePopularPage"));
const InterestPeoplePage = lazy(() => import("./pages/interestPeoplePage"));
const peopleLatestPage = lazy(() => import("./pages/peopleLatestPage"));
const peopleNewcomersPage = lazy(() => import("./pages/peopleNewcomersPage"));

//authentication 
const LoginPage = lazy(() => import("./pages/loginPage"));
const SignUpPage = lazy(() => import("./pages/signUpPage"));
const AuthContext = lazy(() => import("./contexts/authContext"));

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
        <Suspense fallback={<h2>Loading page....</h2>}>
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <AuthContext>
          <MoviesContextProvider>
            <GenresContextProvider>
            <PeopleContextProvider>
              <Switch>
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route exact path="/movies/wishlist" component={WishlistMoviesPage} />
                <Route exact path="/person/interest" component={InterestPeoplePage} />                
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
                <Route exact path="/person/popular" component={peoplePopularPage} />
                <Route exact path="/person/latest" component={peopleLatestPage} />
                <Route exact path="/person/newcomers" component={peopleNewcomersPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/person/:id" component={PersonPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
              </PeopleContextProvider>
            </GenresContextProvider>
          </MoviesContextProvider>
        </AuthContext>
      </div>
      </Suspense>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));