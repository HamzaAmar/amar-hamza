'use client';

import { IconButton } from '@components/core';
import { Bookmark } from '@components/icons';
import { useFavorite } from '@hooks/useFavorite';
import React from 'react';

const FavoriteButton = ({ slug }: { slug: string }) => {
  const { isFavorite, toggleFavorite } = useFavorite();

  const isInFavorite = isFavorite(slug);
  return (
    <IconButton
      type="button"
      icon={<Bookmark width={20} />}
      title={`${isInFavorite ? 'Remove' : 'Add'} Article to Favorite`}
      data-bookmark={isInFavorite}
      className="article--favorite"
      onClick={() => toggleFavorite(slug)}
    />
  );
};

export default FavoriteButton;
