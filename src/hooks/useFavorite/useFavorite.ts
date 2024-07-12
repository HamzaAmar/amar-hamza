import { useState, useEffect } from 'react';

const KEY = 'favorites';

function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    // if (typeof window !== 'undefined') return [];

    const favorites = localStorage.getItem(KEY);
    return favorites ? JSON.parse(favorites) : [];
  });

  const isFavorite = (postId: string) => {
    return favorites.includes(postId);
  };

  const toggleFavorite = (postId: string) => {
    setFavorites((prevFav) => {
      const favorites = isFavorite(postId)
        ? prevFav.filter((id) => id !== postId)
        : [...prevFav, postId];

      localStorage.setItem(KEY, JSON.stringify(favorites));
      return favorites;
    });
  };

  return { favorites, toggleFavorite, isFavorite };
}

export default useFavorites;
