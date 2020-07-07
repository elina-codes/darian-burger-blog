import { Link } from "gatsby"
import React from "react"

import "./grid_item.scss"

const GridItem = ({ itemTitle, itemImage, itemLink }) => (
  <Link to={itemLink} className="image__grid__item grid__item">
    <div
      style={{
        backgroundImage: `url(${itemImage})`,
      }}
      className="grid__image"
    ></div>
    <div className="image__grid__item__details">
      <h3 className="h2">{itemTitle}</h3>
    </div>
  </Link>
)

export default GridItem
