import { useState, useEffect } from 'react';

const KEY = 'favorites';

function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    // if (typeof window !== 'undefined') return [];

    console.log('run only on the client');
    const favorites = localStorage.getItem(KEY);
    return favorites ? JSON.parse(favorites) : [];
  });

  const isFavorite = (postId: string) => {
    return favorites.includes(postId);
  };

  const toggleFavorite = (postId: string) => {
    setFavorites((prevFav) => {
      console.log('this is the value of the prev Favorite', prevFav);
      const favorites = isFavorite(postId)
        ? prevFav.filter((id) => id !== postId)
        : [...prevFav, postId];

      console.log(
        'this is the value of the the New Favorite',
        favorites,
      );

      localStorage.setItem(KEY, JSON.stringify(favorites));
      return favorites;
    });
  };

  return { favorites, toggleFavorite, isFavorite };
}

export default useFavorites;
