import React from 'react';
import GridItem from '../components/grid_item';
import { averageRating } from '../components/common/helpers';

import './grid_layout.scss';

const GridLayout = ({ gridItems }) => (
  <div className="image__grid grid grid_layout">
    {Object.keys(gridItems).map((key) => (
      <GridItem
        itemTitle={gridItems[key].title}
        itemImage={gridItems[key].images.main.src}
        itemLink={gridItems[key].url}
        imageBottomRight={averageRating(gridItems[key].ratings)}
        key={key}
      />
    ))}
  </div>
);

export default GridLayout;
