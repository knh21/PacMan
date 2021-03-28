document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const width = 28 // 28 * 28 = 784 squares
    let score = 0

    // layout of the grid
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty
    const squares = []

  // draw the grid and render it
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div') // puts a div in all sqaures
        grid.appendChild(square) // add those squares to the grid
        squares.push(square) // putting them in a new array 

        // add layout to the board

        // checking to see if the first item in the layout is the same as the number and adding the corresponding class to it, keeps looping untill all squares have been checked
        if(layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }
    }
  }
  createBoard();

  // starting position of pac man
  let pacmanCurrentIndex = 490
  squares[pacmanCurrentIndex].classList.add('pac-man')

  // move pac-man
  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    switch(e.keyCode) {
      case 37:
        if(
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')
          )
        pacmanCurrentIndex -= 1
        if (squares[pacmanCurrentIndex -1] === squares[363]) {
          pacmanCurrentIndex = 391
        }
        break
      case 38:
        if(
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')
          ) 
        pacmanCurrentIndex -= width
        break
      case 39:
        if(
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
        )
        pacmanCurrentIndex += 1
        if (squares[pacmanCurrentIndex +1] === squares[392]) {
          pacmanCurrentIndex = 364
        }
        break
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
          !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
        )
        pacmanCurrentIndex += width
        break
    }
    squares[pacmanCurrentIndex].classList.add("pac-man")
    pacDotEaten()
    powerPelletEaten()
    checkForGameOver()
    checkForWin()
  }
  document.addEventListener('keyup', movePacman)
  // when a dot is eaten
  function pacDotEaten(){
      // if pacman is currently in the square with a dot, add one to current score
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++
        scoreDisplay.innerHTML = score // displays the score on the page
        squares[pacmanCurrentIndex].classList.remove('pac-dot') // removes the class with the dot to make it look llike its been eaten
    }
  }

  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score +=10
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unScaredGhost,10000)
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
  }

  //make the ghost back to original color
  function unScaredGhost() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }
  
  // create ghost template
  class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timerId = NaN
        this.isScared = false
    }
  }
  
  ghosts = [
    new Ghost('blinky', 348,250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500),
  ]

  // draw ghost to screen
  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
  })

  // move the ghost randomly
  ghosts.forEach(ghost => moveGhost(ghost))

  // function to move the ghosts
  function moveGhost(ghost) {
    const directions = [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
      // if the next square the ghost goes to does not contain a wall and a ghost, you can move
      if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
        // if you can go here
        // remove all ghost classes
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        // change index to new square
        ghost.currentIndex += direction
        // redraw the ghost at new square
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
       // if not find a new direction
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      // if the ghost is currently scared
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      // if th ghos is scared and pacman runs into it
      if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        score +=100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }
      checkGameOver()
    }, ghost.speed)
  }

  // check for a game over
  function checkGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') && !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        scoreDisplay.innerHTML = "Game Over"
    }
  }

  // check for win
  function checkForWin() {
    if (score === 274) {
        ghost.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        scoreDisplay.innerHTML = "You Win!"
    }
  }









})