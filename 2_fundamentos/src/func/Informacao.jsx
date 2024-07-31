import React from 'react'

import Chamando1 from './Chamando1'
import Chamando2 from './Chamando2'

const Informacao = () => {

    const info = () => {
        alert('oi')
    }

  return (
    <div>
    <Chamando1 btn={info} />
    <Chamando2 btn={info} />
    </div>
  )
}

export default Informacao