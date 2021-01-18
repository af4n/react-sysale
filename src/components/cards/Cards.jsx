import React from 'react'
import './Cards.scss';
import Card from "../card/Card";
import {products} from "../../data";

const Cards = () => {
  return (
    <div className="cards">
      {
        products.map((product) => <Card key={product.id} {...product}/>)
      }
    </div>
  )
}

export default Cards;