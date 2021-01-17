import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWishlistButton from '../components/buttons/addToWishlist'

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("wishlist" in m);
  });
  
    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => {
            return <AddToWishlistButton movie={movie} />;
          }}
        />
    );
  };

export default UpcomingMoviePage