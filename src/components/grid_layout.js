import React from "react"
import GridItem from "../components/grid_item"

import "./grid_layout.scss"

const GridLayout = ({ gridItems }) => (
  <div className="image__grid grid grid_layout">
    {Object.keys(gridItems).map(key => (
      <GridItem
        itemTitle={gridItems[key].title}
        itemImage={gridItems[key].images.main.src}
        itemLink={gridItems[key].url}
        key={key}
      />
    ))}
  </div>
)

export default GridLayout
