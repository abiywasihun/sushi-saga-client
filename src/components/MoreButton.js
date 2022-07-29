import React from 'react'
import { useSushi } from '../Context/SushiContext'

const MoreButton = () => {
  const {getSushis}=useSushi()
    return <button onClick={getSushis}>
            More sushi!
          </button>
}

export default MoreButton