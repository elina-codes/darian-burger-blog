import React from 'react';
import burger from '../../images/svg/icon-burger.svg';
import eat from '../../images/svg/icon-eat.svg';
import fries from '../../images/svg/icon-fries.svg';
import kitchen from '../../images/svg/icon-kitchen.svg';
import money from '../../images/svg/icon-money.svg';
import mouth from '../../images/svg/icon-mouth.svg';
import napkin from '../../images/svg/icon-napkin.svg';
import fridge from '../../images/svg/icon-fridge.svg';

const ratingIconsMap = new Map();

ratingIconsMap.set(null, null);
ratingIconsMap.set('appearance', burger);
ratingIconsMap.set('taste', eat);
ratingIconsMap.set('mouthfeel', mouth);
ratingIconsMap.set('mess', napkin);
ratingIconsMap.set('fries', fries);
ratingIconsMap.set('price', money);
ratingIconsMap.set('leftovers', fridge);

export const averageRating = (ratings) => {
  if (!ratings) return;

  const ratingValues = Object.values(ratings);
  const average = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length;
  const roundedAverage = Math.round(average * 2) / 2;

  return roundedAverage + '/10';
};

export const ratingsNamesAndValues = (ratings, includeIcons) => {
  if (!ratings) return;

  let ratingsArray = [];
  let iconsArray = [];

  for (const [key, value] of Object.entries(ratings)) {
    if (includeIcons) {
      iconsArray.push(ratingIconsMap.get(key));
    }

    ratingsArray.push(`${key}: ${value}`);
  }

  return [ratingsArray, iconsArray];
};

export const ratingsList = (ratings, includeIcons) => {
  if (!ratings) return;

  const ratingsData = ratingsNamesAndValues(ratings, includeIcons);
  console.log(ratingsData);
  const ratingsTypes = ratingsData[0];
  const ratingsIcons = ratingsData[1];

  return ratingsTypes.map((rating, i) => (
    <li className="capitalize">
      <img src={ratingsIcons[i]} className="icon" /> {rating}
    </li>
  ));
};
