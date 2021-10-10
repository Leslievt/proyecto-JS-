document.addEventListener('DOMContentLoaded', () => {
    //opciones de  las  tarjetas
    const cardArray = [
      {
        name: 'Estrellas',
        img: 'img/3.png'
      },
      {
        name: 'Luna',
        img: 'img/9.png'
      },
      {
        name: 'Saturno',
        img: 'img/7.png'
      },
      {
        name: 'Jupiter',
        img: 'img/11.png'
      },
      {
        name: 'Estrellas',
        img: 'img/3.png'
      },
      {
        name: 'Saturno',
        img: 'img/7.png'
      },
      {
        name: 'Marte',
        img: 'img/1.png'
      },
      {
        name: 'Nave',
        img: 'img/5.png'
      },
      {
        name: 'Jupiter',
        img: 'img/11.png'
      },
      {
        name: 'Luna',
        img: 'img/9.png'
      },
      {
        name: 'Marte',
        img: 'img/1.png'
      },
      {
        name: 'Nave',
        img: 'img/5.png'
      }
    ]
  
    cardArray.sort(() => 0.10 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //Creando el tablero
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/13.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //comprobando pares
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/13.png')
        cards[optionTwoId].setAttribute('src', 'img/13.png')
        alert('Has hecho click en la misma imagen!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Maravilloso, encontraste un par, sigue así')
        cards[optionOneId].setAttribute('src', 'img/14.png')
        cards[optionTwoId].setAttribute('src', 'img/14.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'img/13.png')
        cards[optionTwoId].setAttribute('src', 'img/13.png')
        alert('No astro amigo, intentalo de  nuevo')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = '¡Felicidades! ¡Los encontraste todos! has completado esta misión'
      }
    }
  
    //Volteando tarjetas
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  
  