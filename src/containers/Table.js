import React, { Fragment } from 'react'
import { useSushi } from '../Context/SushiContext'

const Table = () => {
const {budget,count}=useSushi()
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ budget } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(count)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table