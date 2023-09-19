
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
    <div className='container'>
      <div className='list-card'>
      {
        skins.map(item => {
          return (
          <div className='card'>
            <div className='img'>
              <img width='100%' src={`./src/assets/images/skins/${item.image}.jpg`} />
            </div>
              <div className='infos'>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.wear}</p>
              </div>
          </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default App
