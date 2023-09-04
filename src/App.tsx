import { useState } from 'react'
import './App.css'


function App() {
  const skins =[
    {
      image: 'ak-vulcan',
      name: 'AK-47 Vulcan',
      price: 'R$ 1250,99',
      wear: 'Factor-new',
    },
    {
      image: 'awp-asiimov',
      name: 'AWP Asiimov',
      price: 'R$ 500,00',
      wear: 'Factor-new',
    },
    {
      image: 'galil-cerberus',
      name: 'Galil Cerberus',
      price: 'R$ 29,00',
      wear: 'Factor-new',
    },
    {
      image: 'glock-elemental',
      name: 'Glock WaterElemental',
      price: 'R$ 59,00',
      wear: 'Factor-new',
    },
    {
      image: 'm4a1-masterpiece',
      name: 'M4A1-s Masterpiece',
      price: 'R$ 800,99',
      wear: 'Factor-new',
    },
    {
      image: 'm4a4-dragon',
      name: 'M4A4 Dragon',
      price: 'R$ 129,99',
      wear: 'Factor-new',
    }
  ]

  return (
    <>
    
      {
        skins.map(item => {
          return (
            <div>
              {/* <img src={require('../src/assets/images/skins/ak-vulcan.jpg')} /> */}
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.wear}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
