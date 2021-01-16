import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWishlistButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWishlist = e => {
    e.preventDefault();
    context.addToWishlist(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWishlist}
    >
      Add to Wishlist
    </button>
  );
};

export default AddToWishlistButton;