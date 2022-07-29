import React, { Fragment,useContext } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import {  useSushi } from '../Context/SushiContext';

const SushiContainer = () => {
  const { displaySushis } = useSushi();
  const sushis=displaySushis()
  return (
    <Fragment>
      <div className="belt">
        {sushis&&sushis.map((item,index)=>
        <Sushi
        img={item.img_url}
        name={item.name}
        price={item.price}
        id={item.id}
        eaten={item.eaten}
        />
        )
        }
        <MoreButton/>
      </div>
    </Fragment>
  )
}

export default SushiContainer