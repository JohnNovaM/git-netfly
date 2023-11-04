import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import getRamdomFromArr from './services/getRamdomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'




function App() {

const [phraseRamdon, setPhraseRamdon] = useState(getRamdomFromArr(phrases))
const [bgApp, setBgApp] = useState(getRamdomFromArr(bgArr))

const objStyle = {
  backgroundImage: `url('../fondo${bgApp}.jpg')`
}
  return (
    <div style={objStyle} className='app'>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__card'>
        <Phrase
          phraseRamdon={phraseRamdon}
        />
        <ButtonPhrase
          setPhraseRamdon={setPhraseRamdon}
          setBgApp={setBgApp}
        />
      </article>
    </div>
  )
}

export default App