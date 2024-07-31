import { useState } from 'react'
import Board from './Board'

const shuffleArraaay = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}

const generateCard = () => {

    const values = ["A", "B", "C", "D", "E", "F", "G", "H"];

    const cards = values.map((value) => ({
        value,
        isFlipped: false
    }))

    const duplicatedCards = cards
        .concat([...cards])
        .map((card, index) => ({...card, id: index}))

    
    return shuffleArraaay(duplicatedCards)
}
generateCard()
const Game = () => {

    const [cards, setCards] = useState(generateCard())
    const [filippedCards, setFilippedCards] = useState([])
    const [chances, setChances] = useState(12)

    const result = cards.filter((card) => card.isFlipped).length

    const handleCardClick = (clickeCard) => {

        if(chances === 0) return;

        if(filippedCards.length === 2) return;

        const newCard = cards.map((card) => {
            return card.id === clickeCard.id ? {...card, isFlipped: true} : card
        });

        setCards(newCard)

        setFilippedCards([...filippedCards, clickeCard])

        if(filippedCards.length === 1){
            setTimeout(() => {
                const [firstCard] = filippedCards
                
                if(firstCard.value !== clickeCard.value){
                    const resetCards = cards.map((card) => {
                        return card.id === firstCard.id || card.id === clickeCard.id  
                        ? {... card, isFlipped: false}
                        : card; 
                    })
                    setCards(resetCards)
                    setChances((prev) => prev - 1)
                }
                setFilippedCards([])
            }, 600)
        }
    }

    const resetgame = () => {
        setChances(12);
        setFilippedCards([])
        setCards(generateCard())
    }

  return (
    <div className="game">
        <Board cards={cards} onCardClick={handleCardClick}/>
        {chances === 0 ?(
            <p>Suas tentativa acabaram!</p>
        ) :  result === cards.length ? (
           <h2>Voce Ganhou!</h2>
        ) : (
           <p>Voce tem {chances} tentativas!</p>
        )}
        <button className='btn' onClick={resetgame}>Reiniciar</button>
    </div>
  )
}

export default Game