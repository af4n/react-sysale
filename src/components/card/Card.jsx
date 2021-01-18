import React, {useState} from 'react'
import './Card.scss';
import Select from "../select/Select";
import Checkbox from "../checkbox/Checkbox";
import Counter from "../counter/Counter";

const Card = ({imageProduct, imageProductHover, name, description, price,
                imageCompare, imageAdded, volume, options, isChecked}) => {

  const [color, setColor] = useState('')
  const [counter, setCounter] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="card">
      <div className="card-top">
        <span className="new-product">NEW</span>

        <img src={!isHover ? imageProduct : imageProductHover}
             className="image-product" alt="image"
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}/>

        <button className="compare-product"
                onClick={() => setIsAdded(true)}>
          <img src={!isAdded ? imageCompare : imageAdded}
               alt="image-compare"/>
        </button>
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="card-bottom">
        <div className="select-group">
          <Select
            options={options}
            option={color}
            setOption={setColor}
          />
          <span className="price">{price} грн</span>
        </div>

        <div className="checkbox-group">
          <Checkbox volume={volume}
                    isChecked={isChecked}
          />
        </div>

        <div className="btn-group">
          <Counter counter={counter}
                   setCounter={setCounter}/>
          <button className="btn-buy">КУПИТЬ</button>
        </div>
      </div>
    </div>
  );
}

export default Card;