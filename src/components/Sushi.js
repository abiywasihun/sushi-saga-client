import React, { Fragment } from 'react'
import { useSushi } from '../Context/SushiContext'

const Sushi = ({img,name,price,id,eaten}) => {
  const {eatSushis} =useSushi()
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>eatSushis(id,price)}>
        { eaten ?
            null
          :
            <img src={img} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi