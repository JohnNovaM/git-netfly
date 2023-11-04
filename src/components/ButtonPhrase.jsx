import getRamdomFromArr from "../services/getRamdomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ({ setPhraseRamdon, setBgApp }) => {

    const handleChancePhrase = () => {
        const quote = getRamdomFromArr(phrases)
        setPhraseRamdon(quote)
        setBgApp(getRamdomFromArr(bgArr))


    }
  return (
    <button 
    className="app__btn"
    onClick={handleChancePhrase}
    
    >
        Ver Otro
        
    </button>
      
    
  )
}

export default ButtonPhrase
