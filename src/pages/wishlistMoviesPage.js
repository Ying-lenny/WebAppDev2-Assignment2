import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WishlistMoviesPage = props => {
  const context = useContext(MoviesContext);
  const wishlists = context.upcoming.filter( m => m.wishlist )
  return (
    <MovieListPageTemplate
      movies={wishlists}
      title={"Wishlisted Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WishlistMoviesPage;