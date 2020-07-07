import React from 'react';

export const averageRating = (ratings) => {
  if (!ratings) return;

  const ratingValues = Object.values(ratings);
  const average = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length;
  const roundedAverage = Math.round(average * 2) / 2;

  return roundedAverage + '/10';
};

export const ratingsNamesAndValues = (ratings) => {
  if (!ratings) return;

  let ratingsArray = [];
  for (const [key, value] of Object.entries(ratings)) {
    ratingsArray.push(`${key}: ${value}`);
  }

  return ratingsArray;
};

export const ratingsList = (ratings) => {
  if (!ratings) return;

  return ratingsNamesAndValues(ratings).map((rating) => <li className="capitalize">{rating}</li>);
};
